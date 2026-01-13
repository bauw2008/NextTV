'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Player } from '../../../components/Artplayer';
import { SEARCH_RESULTS } from '../../../lib/constants';

export default function PlayerPage() {
  const params = useParams();
  const id = params.id;
  const movie = SEARCH_RESULTS.find(m => m.id === id);

  if (!movie) return <div>Movie not found</div>;

  // Mock episodes for UI
  const episodes = Array.from({ length: 15 }, (_, i) => ({
    id: i + 1,
    title: `${i + 1}`,
    isNew: i === 11
  }));

  return (
    <div className="w-full max-w-7xl pt-4">
      <nav aria-label="Breadcrumb" className="flex mb-6 text-sm text-gray-500">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
                <Link href="/" className="inline-flex items-center hover:text-primary transition-colors">
                    <span className="material-symbols-outlined text-lg mr-1">home</span>
                    首页
                </Link>
            </li>
            <li>
                <div className="flex items-center">
                    <span className="material-symbols-outlined text-gray-400">chevron_right</span>
                    <span className="ml-1 md:ml-2 hover:text-primary transition-colors cursor-pointer">{movie.type === 'movie' ? '电影' : '电视剧'}</span>
                </div>
            </li>
            <li>
                <div className="flex items-center">
                    <span className="material-symbols-outlined text-gray-400">chevron_right</span>
                    <span className="ml-1 md:ml-2 text-gray-900 font-medium">{movie.title}</span>
                </div>
            </li>
        </ol>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Player and Info */}
        <div className="lg:col-span-8 flex flex-col gap-8">
            <div className="relative w-full aspect-video bg-black rounded-xl overflow-hidden shadow-2xl group ring-1 ring-gray-900/5">
                <Player
                    option={{
                        url: 'https://artplayer.org/assets/sample/video.mp4',
                        poster: movie.backdrop,
                        theme: '#FAC638',
                        lang: 'zh-cn',
                    }}
                    style={{
                        width: '100%',
                        height: '100%',
                    }}
                    className="w-full h-full"
                />
            </div>

            <div className="flex flex-col md:flex-row gap-8 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                <div className="w-full md:w-48 flex-shrink-0 mx-auto md:mx-0">
                    <div className="aspect-[2/3] rounded-xl overflow-hidden shadow-lg ring-1 ring-gray-900/5 relative group">
                        <img alt={`${movie.title} Poster`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src={movie.poster}/>
                    </div>
                </div>
                <div className="flex-1 space-y-5">
                    <div>
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-2">
                            <h1 className="text-3xl font-bold text-gray-900">{movie.title}</h1>
                            <div className="flex items-center gap-3">
                                <div className="flex items-center text-primary h-10">
                                    <span className="material-symbols-outlined material-symbols-filled text-xl">star</span>
                                    <span className="text-lg font-bold ml-1 leading-none">{movie.rating}</span>
                                    <span className="text-gray-400 text-sm font-normal ml-1 leading-none self-end pb-1">/ 10</span>
                                </div>
                                <button className="flex items-center justify-center h-10 w-10 rounded-full hover:bg-gray-100 text-gray-400 hover:text-red-500 transition-colors">
                                    <span className="material-symbols-outlined">favorite</span>
                                </button>
                                <button className="flex items-center justify-center h-10 w-10 rounded-full hover:bg-gray-100 text-gray-400 hover:text-blue-500 transition-colors">
                                    <span className="material-symbols-outlined">share</span>
                                </button>
                            </div>
                        </div>
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-600 mb-4">
                            <span className="bg-gray-100 px-2 py-1 rounded text-xs font-semibold text-gray-700">{movie.year}</span>
                            <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                            <span>{movie.genre}</span>
                            <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                            <span>中国大陆</span>
                            <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                            <span>全 32 集</span>
                        </div>
                    </div>
                    <div className="prose prose-sm max-w-none text-gray-600">
                        <h3 className="text-gray-900 font-semibold mb-1">剧情简介</h3>
                        <p className="leading-relaxed">
                            {movie.description || '上古之时，有异人留下"七根心简"，记载着长生的秘密，也封印着足以毁灭世间的力量。数千年后，心简重现人间，引发各方势力暗流涌动。身怀绝技的少年罗韧（男主）与身世神秘的少女木代（女主）意外卷入其中，被迫与一群志同道合的伙伴踏上了寻找心简、守护世间的冒险之旅。'}
                        </p>
                    </div>
                    {movie.actors && (
                    <div>
                        <h3 className="text-gray-900 font-semibold mb-3">演员表</h3>
                        <div className="flex gap-4 overflow-x-auto pb-2 hide-scrollbar">
                            {movie.actors.map((actor, idx) => (
                                <div key={idx} className="flex flex-col items-center gap-2 min-w-[70px]">
                                    <div className="size-16 rounded-full overflow-hidden border border-gray-200 shadow-sm">
                                        <img alt={actor.name} className="w-full h-full object-cover" src={actor.avatar}/>
                                    </div>
                                    <span className="text-xs font-medium text-gray-900 text-center truncate w-full">{actor.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    )}
                </div>
            </div>
        </div>

        {/* Right Column: Episodes */}
        <div className="lg:col-span-4 space-y-6">
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden sticky top-28">
                <div className="p-4 border-b border-gray-100 flex items-center justify-between bg-gray-50/50">
                    <h3 className="font-bold text-gray-900 text-lg">选集</h3>
                    <button className="text-xs text-gray-500 hover:text-primary flex items-center gap-1 transition-colors">
                        更新至 {episodes.length} 集
                        <span className="material-symbols-outlined text-sm">info</span>
                    </button>
                </div>
                <div className="px-4 py-3 border-b border-gray-100 flex items-center justify-between cursor-pointer hover:bg-gray-50 transition-colors">
                    <span className="text-sm font-semibold text-gray-700">第 1 - {episodes.length} 集</span>
                    <span className="material-symbols-outlined text-gray-400 text-lg transform rotate-180">expand_less</span>
                </div>
                <div className="p-4 grid grid-cols-4 sm:grid-cols-5 gap-3 max-h-[500px] overflow-y-auto custom-scrollbar">
                    {episodes.map((ep) => (
                        <button 
                            key={ep.id} 
                            className={`aspect-square flex items-center justify-center rounded-lg font-medium border transition-all relative
                                ${ep.id === 1 
                                    ? 'bg-primary text-white font-semibold shadow-md ring-2 ring-primary/20 border-transparent' 
                                    : 'bg-gray-50 text-gray-700 border-gray-200 hover:border-primary hover:text-primary hover:bg-white'
                                }
                                ${ep.id > 12 ? 'bg-gray-100/50 text-gray-300 cursor-not-allowed' : ''}
                            `}
                            disabled={ep.id > 12}
                        >
                            {ep.id}
                            {ep.id === 1 && (
                                <span className="absolute -top-1 -right-1 flex h-3 w-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                                </span>
                            )}
                            {ep.isNew && (
                                <span className="absolute top-0 right-0 -mt-1 -mr-1 px-1 py-0.5 bg-red-500 text-[8px] text-white rounded font-bold leading-none">NEW</span>
                            )}
                        </button>
                    ))}
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
