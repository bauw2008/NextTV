/**
 * Format seconds as HH:MM:SS or MM:SS
 */
export function formatTime(seconds) {
  if (seconds === 0) return "00:00";

  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = Math.round(seconds % 60);

  if (hours === 0) {
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;
  }
  return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;
}

/**
 * Format seconds as M:SS (compact format for UI display)
 */
export function formatTimeShort(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${String(secs).padStart(2, "0")}`;
}

/**
 * Format remaining time as "X 分 Y 秒"
 */
export function formatTimeRemaining(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins} 分 ${secs} 秒`;
}

export function extractEpisodeNumberFromTitle(episodeTitle, ismovie) {
  // 如果是电影，则返回1, 因为电影只有1集
  if (ismovie) {
    return 1;
  }
  // 匹配格式：第1集、第01集、第10集等
  const chineseMatch = episodeTitle.match(/第(\d+)集/);
  if (chineseMatch) {
    return parseInt(chineseMatch[1], 10);
  }
  // 匹配格式：EP01、EP1、E01、E1等
  const epMatch = episodeTitle.match(/[Ee][Pp]?(\d+)/);
  if (epMatch) {
    return parseInt(epMatch[1], 10);
  }
  // 匹配格式：01、1（纯数字，通常在标题开头或结尾）
  const numberMatch = episodeTitle.match(/(?:^|\s)(\d+)(?:\s|$)/);
  if (numberMatch) {
    return parseInt(numberMatch[1], 10);
  }
  return null;
}

// 去广告相关函数
export function filterAdsFromM3U8(m3u8Content) {
  if (!m3u8Content) return "";

  // 默认去广告逻辑
  // 按行分割M3U8内容
  const lines = m3u8Content.split("\n");
  const filteredLines = [];
  let inAdBlock = false; // 是否在广告区块内
  let adSegmentCount = 0; // 统计移除的广告片段数量

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // 🎯 增强功能1: 检测行业标准广告标记（SCTE-35系列）
    // 使用 line.includes() 保持与原逻辑一致，兼容各种格式
    if (
      line.includes("#EXT-X-CUE-OUT") ||
      (line.includes("#EXT-X-DATERANGE") && line.includes("SCTE35")) ||
      line.includes("#EXT-X-SCTE35") ||
      line.includes("#EXT-OATCLS-SCTE35")
    ) {
      inAdBlock = true;
      adSegmentCount++;
      continue; // 跳过广告开始标记
    }

    // 🎯 增强功能2: 检测广告结束标记
    if (line.includes("#EXT-X-CUE-IN")) {
      inAdBlock = false;
      continue; // 跳过广告结束标记
    }

    // 🎯 增强功能3: 如果在广告区块内，跳过所有内容
    if (inAdBlock) {
      continue;
    }

    // ✅ 原始逻辑保留: 过滤#EXT-X-DISCONTINUITY标识
    if (!line.includes("#EXT-X-DISCONTINUITY")) {
      filteredLines.push(line);
    }
  }

  // 输出统计信息
  if (adSegmentCount > 0) {
    console.log(`✅ M3U8广告过滤: 移除 ${adSegmentCount} 个广告片段`);
  }

  return filteredLines.join("\n");
}
