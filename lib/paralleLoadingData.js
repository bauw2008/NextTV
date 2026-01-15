import { getVideoDetail } from "@/lib/cmsApi";
import { scrapeDoubanDetails } from "@/lib/getDouban";

// ============================================================================
// 初始数据加载 Promise 缓存
// ============================================================================
const dataPromiseCache = new Map();

/**
 * 获取初始数据加载 Promise（带缓存）
 */
export function getInitialDataPromise(id, source, videoSources, playHistory) {
  const key = `${source}:${id}`;
  if (!dataPromiseCache.has(key)) {
    dataPromiseCache.set(key, fetchInitialData(id, source, videoSources, playHistory));
  }
  return dataPromiseCache.get(key);
}

/**
 * 获取初始数据：视频详情、豆瓣演员、初始弹幕、播放记录
 * 这是核心优化：一次性获取所有初始数据，包括从 store 读取的播放记录
 */
async function fetchInitialData(id, source, videoSources, playHistory) {
  // 1. 获取视频详情
  const sourceConfig = videoSources.find((s) => s.key === source);
  if (!sourceConfig) {
    throw new Error("未找到对应的视频源");
  }

  const videoDetail = await getVideoDetail(id, sourceConfig.name, sourceConfig.url);

  // 2. 读取播放记录，确定初始集数
  const playRecord = playHistory.find((item) => item.source === source && item.id === id);
  const initialEpisodeIndex = playRecord?.currentEpisodeIndex ?? 0;
  const initialTime = playRecord?.currentTime && playRecord.currentTime > 5 ? playRecord.currentTime : 0;
  let doubanActors = [];
  console.log("播放记录:", playRecord ? `第${initialEpisodeIndex + 1}集, ${Math.floor(initialTime)}秒` : "无");
  if (!videoDetail.douban_id) {
    console.log("没有豆瓣ID，无法获取弹幕");
    return {
      videoDetail,
      doubanActors,
      initialEpisodeIndex,
      initialTime,
    };
  } else {
    const doubanResult = await scrapeDoubanDetails(videoDetail.douban_id);
    if (doubanResult.code === 200 && doubanResult.data.actors) {
      doubanActors = doubanResult.data.actors;
      doubanActors.forEach((actor) => {
        actor.avatar = actor.avatar.replace(/img\d+\.doubanio\.com/g, "img.doubanio.cmliussss.com");
      });
      console.log(`豆瓣演员数据加载完成，共 ${doubanActors.length} 位演员`);
    } else {
      console.warn("获取豆瓣演员数据失败:", doubanResult.reason?.message);
      doubanActors = [];
    }
    return {
      videoDetail,
      doubanActors,
      initialEpisodeIndex,
      initialTime,
    };
  }
}
