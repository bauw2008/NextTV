"use client";

import { useState, useEffect, useMemo, useRef, useCallback } from "react";
import { useParams, useSearchParams } from "next/navigation";
import Link from "next/link";
import { Player } from "../../../components/Artplayer";
import { getVideoDetail } from "../../../lib/api";
import { useSettingsStore } from "../../../store/useSettingsStore";

export default function PlayerPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const id = params.id;
  const source = searchParams.get("source");

  const [videoDetail, setVideoDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentEpisodeIndex, setCurrentEpisodeIndex] = useState(0);
  const [episodesCollapsed, setEpisodesCollapsed] = useState(false);

  // 播放器引用
  const playerRef = useRef(null);

  // 获取视频详情
  useEffect(() => {
    async function fetchVideoDetail() {
      if (!id || !source) {
        setError("缺少必要的参数");
        setLoading(false);
        return;
      }

      // 在 effect 内部直接获取当前的 videoSources，避免作为依赖项
      const videoSources = useSettingsStore.getState().videoSources;
      const sourceConfig = videoSources.find((s) => s.key === source);
      if (!sourceConfig) {
        setError("未找到对应的视频源");
        setLoading(false);
        return;
      }

      setLoading(true);
      setError(null);

      try {
        const detail = await getVideoDetail(id, source, sourceConfig.url);
        setVideoDetail(detail);
      } catch (err) {
        console.error("获取视频详情失败:", err);
        setError("获取视频详情失败，请稍后重试");
      } finally {
        setLoading(false);
      }
    }

    fetchVideoDetail();
    // 只在 id 或 source 改变时重新获取数据，不依赖 videoSources
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, source]);

  // 切换剧集
  const handleEpisodeClick = (index) => {
    setCurrentEpisodeIndex(index);
  };

  // 处理全局快捷键
  const handleKeyboardShortcuts = useCallback(
    (e) => {
      // 忽略输入框中的按键事件
      if (
        e.target.tagName === "INPUT" ||
        e.target.tagName === "TEXTAREA"
      )
        return;

      // Alt + 左箭头 = 上一集
      if (e.altKey && e.key === "ArrowLeft") {
        if (videoDetail && currentEpisodeIndex > 0) {
          setCurrentEpisodeIndex(currentEpisodeIndex - 1);
          e.preventDefault();
        }
      }

      // Alt + 右箭头 = 下一集
      if (e.altKey && e.key === "ArrowRight") {
        if (
          videoDetail &&
          videoDetail.episodes &&
          currentEpisodeIndex < videoDetail.episodes.length - 1
        ) {
          setCurrentEpisodeIndex(currentEpisodeIndex + 1);
          e.preventDefault();
        }
      }

      // 左箭头 = 快退
      if (!e.altKey && e.key === "ArrowLeft") {
        if (playerRef.current && playerRef.current.currentTime > 5) {
          playerRef.current.currentTime -= 10;
          e.preventDefault();
        }
      }

      // 右箭头 = 快进
      if (!e.altKey && e.key === "ArrowRight") {
        if (
          playerRef.current &&
          playerRef.current.currentTime < playerRef.current.duration - 5
        ) {
          playerRef.current.currentTime += 10;
          e.preventDefault();
        }
      }

      // 上箭头 = 音量+
      if (e.key === "ArrowUp") {
        if (playerRef.current && playerRef.current.volume < 1) {
          playerRef.current.volume =
            Math.round((playerRef.current.volume + 0.1) * 10) / 10;
          playerRef.current.notice.show = `音量: ${Math.round(
            playerRef.current.volume * 100
          )}`;
          e.preventDefault();
        }
      }

      // 下箭头 = 音量-
      if (e.key === "ArrowDown") {
        if (playerRef.current && playerRef.current.volume > 0) {
          playerRef.current.volume =
            Math.round((playerRef.current.volume - 0.1) * 10) / 10;
          playerRef.current.notice.show = `音量: ${Math.round(
            playerRef.current.volume * 100
          )}`;
          e.preventDefault();
        }
      }

      // 空格 = 播放/暂停
      if (e.key === " ") {
        if (playerRef.current) {
          playerRef.current.toggle();
          e.preventDefault();
        }
      }

      // f 键 = 切换全屏
      if (e.key === "f" || e.key === "F") {
        if (playerRef.current) {
          playerRef.current.fullscreen = !playerRef.current.fullscreen;
          e.preventDefault();
        }
      }
    },
    [videoDetail, currentEpisodeIndex]
  );

  // 监听键盘事件
  useEffect(() => {
    document.addEventListener("keydown", handleKeyboardShortcuts);
    return () => {
      document.removeEventListener("keydown", handleKeyboardShortcuts);
    };
  }, [handleKeyboardShortcuts]);

  // 计算当前剧集信息（放在条件返回之前以保证 Hooks 顺序一致）
  const currentEpisodeUrl = videoDetail?.episodes?.[currentEpisodeIndex] || "";
  const currentEpisodeTitle =
    videoDetail?.episodes_titles?.[currentEpisodeIndex] ||
    `第 ${currentEpisodeIndex + 1} 集`;

  // 使用 useMemo 记忆 playerOption，避免不相关状态变化导致播放器重新渲染
  const playerOption = useMemo(
    () => ({
      url: currentEpisodeUrl,
      poster: videoDetail?.backdrop || videoDetail?.poster || "",
      theme: "#FAC638",
      lang: "zh-cn",
      title: videoDetail ? `${videoDetail.title} - ${currentEpisodeTitle}` : "",
      autoplay: true,
    }),
    [
      currentEpisodeUrl,
      videoDetail?.backdrop,
      videoDetail?.poster,
      videoDetail?.title,
      currentEpisodeTitle,
    ]
  );

  if (loading) {
    return (
      <div className="w-full max-w-7xl pt-4 flex items-center justify-center min-h-screen">
        <div className="flex flex-col items-center gap-4">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-primary border-t-transparent"></div>
          <p className="text-gray-500">加载中...</p>
        </div>
      </div>
    );
  }

  if (error || !videoDetail) {
    return (
      <div className="w-full max-w-7xl pt-4 flex items-center justify-center min-h-screen">
        <div className="flex flex-col items-center gap-4">
          <span className="material-symbols-outlined text-6xl text-gray-300">
            error
          </span>
          <p className="text-gray-500">{error || "未找到视频"}</p>
          <Link href="/" className="text-primary hover:underline">
            返回首页
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-7xl pt-4">
      <nav aria-label="Breadcrumb" className="flex mb-6 text-sm text-gray-500">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li className="inline-flex items-center">
            <Link
              href="/"
              className="inline-flex items-center hover:text-primary transition-colors"
            >
              <span className="material-symbols-outlined text-lg mr-1">
                home
              </span>
              首页
            </Link>
          </li>
          <li>
            <div className="flex items-center">
              <span className="material-symbols-outlined text-gray-400">
                chevron_right
              </span>
              <span className="ml-1 md:ml-2 hover:text-primary transition-colors cursor-pointer">
                {videoDetail.type === "movie" ? "电影" : "电视剧"}
              </span>
            </div>
          </li>
          <li>
            <div className="flex items-center">
              <span className="material-symbols-outlined text-gray-400">
                chevron_right
              </span>
              <span className="ml-1 md:ml-2 text-gray-900 font-medium">
                {videoDetail.title}
              </span>
            </div>
          </li>
        </ol>
      </nav>

      <div className={`grid grid-cols-1 gap-8 transition-all duration-300 lg:grid-cols-12`}>
        {/* Left Column: Player and Info */}
        <div className={`flex flex-col gap-8 transition-all duration-300 lg:col-span-8`}>
          <div className="relative w-full aspect-video bg-black rounded-xl overflow-hidden shadow-2xl group ring-1 ring-gray-900/5">
            {currentEpisodeUrl ? (
              <Player
                option={playerOption}
                style={{
                  width: "100%",
                  height: "100%",
                }}
                className="w-full h-full"
                getInstance={(art) => {
                  playerRef.current = art;
                }}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-white">
                <span>暂无播放源</span>
              </div>
            )}
          </div>

          <div className="flex flex-col md:flex-row gap-8 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <div className="w-full md:w-48 shrink-0 mx-auto md:mx-0">
              <div className="aspect-2/3 rounded-xl overflow-hidden shadow-lg ring-1 ring-gray-900/5 relative group">
                <img
                  alt={`${videoDetail.title} Poster`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  src={videoDetail.poster}
                />
              </div>
            </div>
            <div className="flex-1 space-y-5">
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-2">
                  <h1 className="text-3xl font-bold text-gray-900">
                    {videoDetail.title}
                  </h1>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center text-primary h-10">
                      <span className="material-symbols-outlined material-symbols-filled text-xl">
                        star
                      </span>
                      <span className="text-lg font-bold ml-1 leading-none">
                        {videoDetail.rating}
                      </span>
                      <span className="text-gray-400 text-sm font-normal ml-1 leading-none self-end pb-1">
                        / 10
                      </span>
                    </div>
                    <button className="flex items-center justify-center h-10 w-10 rounded-full hover:bg-gray-100 text-gray-400 hover:text-red-500 transition-colors">
                      <span className="material-symbols-outlined">
                        favorite
                      </span>
                    </button>
                    <button className="flex items-center justify-center h-10 w-10 rounded-full hover:bg-gray-100 text-gray-400 hover:text-blue-500 transition-colors">
                      <span className="material-symbols-outlined">share</span>
                    </button>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-600 mb-4">
                  <span className="bg-gray-100 px-2 py-1 rounded text-xs font-semibold text-gray-700">
                    {videoDetail.year}
                  </span>
                  <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                  <span>{videoDetail.genre}</span>
                  {videoDetail.class && (
                    <>
                      <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                      <span>{videoDetail.type_name}</span>
                    </>
                  )}
                  {videoDetail.episodes.length > 1 && (
                    <>
                      <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                      <span>全 {videoDetail.episodes.length} 集</span>
                    </>
                  )}
                  <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                  <span className="text-primary text-xs bg-primary/10 px-2 py-1 rounded">
                    {videoDetail.source_name || source}
                  </span>
                </div>
              </div>
              {videoDetail.desc && (
                <div className="prose prose-sm max-w-none text-gray-600">
                  <h3 className="text-gray-900 font-semibold mb-1">剧情简介</h3>
                  <p className="leading-relaxed">{videoDetail.desc}</p>
                </div>
              )}
              {videoDetail.actors && videoDetail.actors.length > 0 && (
                <div>
                  <h3 className="text-gray-900 font-semibold mb-3">演员表</h3>
                  <div className="flex gap-4 overflow-x-auto pb-2 hide-scrollbar">
                    {videoDetail.actors.map((actor, idx) => (
                      <div
                        key={idx}
                        className="flex flex-col items-center gap-2 min-w-[70px]"
                      >
                        <div className="size-16 rounded-full overflow-hidden border border-gray-200 shadow-sm bg-gray-100 flex items-center justify-center">
                          <span className="material-symbols-outlined text-gray-400 text-2xl">
                            person
                          </span>
                        </div>
                        <span className="text-xs font-medium text-gray-900 text-center truncate w-full">
                          {actor.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right Column: Episodes */}
        <div className={`space-y-6 transition-all duration-300 lg:col-span-4`}>
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden sticky top-28">
            <div className="p-4 border-b border-gray-100 flex items-center justify-between bg-gray-50/50">
              <h3 className="font-bold text-gray-900 text-lg">选集</h3>
              <button className="text-xs text-gray-500 hover:text-primary flex items-center gap-1 transition-colors">
                {videoDetail.episodes.length > 1
                  ? `共 ${videoDetail.episodes.length} 集`
                  : "电影"}
                <span className="material-symbols-outlined text-sm">info</span>
              </button>
            </div>
            {videoDetail.episodes.length > 1 && (
              <>
                <div
                  className="px-4 py-3 border-b border-gray-100 flex items-center justify-between cursor-pointer hover:bg-gray-50 transition-colors"
                  onClick={() => setEpisodesCollapsed(!episodesCollapsed)}
                >
                  <span className="text-sm font-semibold text-gray-700">
                    第 1 - {videoDetail.episodes.length} 集
                  </span>
                  <span
                    className={`material-symbols-outlined text-gray-400 text-lg transition-transform ${
                      episodesCollapsed ? "" : "rotate-180"
                    }`}
                  >
                    expand_less
                  </span>
                </div>
                {!episodesCollapsed && (
                  <div className="p-4 pt-6 grid grid-cols-5 sm:grid-cols-6 md:grid-cols-7 lg:grid-cols-8 gap-2.5 max-h-[500px] overflow-y-auto custom-scrollbar">
                    {videoDetail.episodes.map((_, index) => {
                      const episodeTitle =
                        videoDetail.episodes_titles[index] ||
                        `第${index + 1}集`;
                      const displayIndex = String(index + 1).padStart(2, "0");
                      return (
                        <div key={index} className="relative group/episode">
                          <button
                            className={`w-full aspect-square flex items-center justify-center rounded-lg font-medium border transition-all relative text-xs cursor-pointer
                              ${
                                index === currentEpisodeIndex
                                  ? "bg-primary text-white font-semibold shadow-md ring-2 ring-primary/20 border-transparent"
                                  : "bg-gray-50 text-gray-700 border-gray-200 hover:border-primary hover:text-primary hover:bg-white"
                              }
                            `}
                            onClick={() => handleEpisodeClick(index)}
                          >
                            {displayIndex}
                            {index === currentEpisodeIndex && (
                              <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
                              </span>
                            )}
                          </button>
                          {/* Hover Tooltip */}
                          <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-2 py-1 bg-gray-900 text-white text-xs rounded whitespace-nowrap opacity-0 invisible group-hover/episode:opacity-100 group-hover/episode:visible transition-all duration-200 pointer-events-none z-50">
                            {episodeTitle}
                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 -mb-1 border-4 border-transparent border-b-gray-900"></div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </>
            )}
            {videoDetail.episodes.length === 1 && (
              <div className="p-4 text-center text-gray-500">
                这是一部电影，无需选集
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
