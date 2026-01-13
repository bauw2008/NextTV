'use client';

import { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { MovieCard } from '../../components/MovieCard';
import { Pagination } from '../../components/Pagination';
import { SEARCH_RESULTS } from '../../lib/constants';

export default function SearchContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';
  const router = useRouter();
  const [inputValue, setInputValue] = useState(query);

  useEffect(() => {
    setInputValue(query);
  }, [query]);

  const handleSearch = (e) => {
    e.preventDefault();
    router.push(`/search?q=${encodeURIComponent(inputValue)}`);
  };

  const results = SEARCH_RESULTS.filter(m => m.title.includes(query) || query === '七根心简');

  return (
    <div className="w-full max-w-7xl flex flex-col gap-8 pt-6">
      <div className="flex flex-col items-center justify-start gap-6 w-full max-w-3xl mx-auto">
        <form onSubmit={handleSearch} className="w-full relative group">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-primary transition-colors">
            <span className="material-symbols-outlined">search</span>
          </div>
          <input 
            className="w-full h-14 bg-white border border-gray-200 rounded-xl pl-12 pr-4 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-primary focus:border-transparent transition-all shadow-sm text-lg" 
            placeholder="搜索电影、电视剧、演员..." 
            type="text" 
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <div className="absolute inset-y-0 right-4 flex items-center">
            <div className="flex gap-2">
                {inputValue && (
                    <button type="button" onClick={() => { setInputValue(''); router.push('/search'); }} className="p-1 hover:bg-gray-100 rounded-md text-gray-400 hover:text-gray-600 transition-colors">
                        <span className="material-symbols-outlined text-xl">close</span>
                    </button>
                )}
                <div className="w-px h-6 bg-gray-200 self-center"></div>
                <span className="bg-gray-100 text-gray-500 text-xs px-2 py-1 rounded border border-gray-200 self-center">⌘K</span>
            </div>
          </div>
        </form>
        
        <div className="bg-white p-1.5 rounded-xl inline-flex shadow-sm border border-gray-200">
            <label className="cursor-pointer relative">
                <input className="peer sr-only" name="media-type" type="radio" value="all" defaultChecked />
                <div className="px-6 py-2 rounded-lg text-sm font-semibold text-gray-500 peer-checked:bg-primary peer-checked:text-white peer-checked:shadow-md transition-all flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px]">grid_view</span>
                    全部
                </div>
            </label>
            <label className="cursor-pointer relative">
                <input className="peer sr-only" name="media-type" type="radio" value="movies" />
                <div className="px-6 py-2 rounded-lg text-sm font-semibold text-gray-500 peer-checked:bg-primary peer-checked:text-white peer-checked:shadow-md transition-all flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px]">movie</span>
                    电影
                </div>
            </label>
            <label className="cursor-pointer relative">
                <input className="peer sr-only" name="media-type" type="radio" value="tv" />
                <div className="px-6 py-2 rounded-lg text-sm font-semibold text-gray-500 peer-checked:bg-primary peer-checked:text-white peer-checked:shadow-md transition-all flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px]">tv</span>
                    电视剧
                </div>
            </label>
        </div>
      </div>

      <div>
        <div className="flex items-baseline justify-between mb-6">
            <h2 className="text-xl text-gray-500 font-medium">
                找到 {results.length} 个关于 <span className="text-gray-900 font-bold text-2xl mx-1">"{query}"</span> 的结果
            </h2>
            <div className="flex items-center gap-2 text-sm text-gray-500">
                <span>排序：</span>
                <select className="bg-transparent border-none text-gray-900 font-medium focus:ring-0 cursor-pointer py-0 pr-8 pl-0">
                    <option>相关度</option>
                    <option>最新上映</option>
                    <option>评分最高</option>
                </select>
            </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
          {results.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
        
        {/* Always render pagination */}
        <Pagination />
      </div>
    </div>
  );
}
