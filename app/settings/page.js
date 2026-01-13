'use client';

import { useSettingsStore } from '../../store/useSettingsStore';

const SourceItem = ({ source, type, toggleSource }) => (
    <div className={`group flex items-center justify-between p-4 bg-white border rounded-2xl hover:shadow-card transition-all duration-200 cursor-pointer ${source.enabled ? 'border-blue-100 hover:border-blue-200' : 'border-gray-100 hover:border-gray-200'}`}>
        <div className="flex items-center gap-4 flex-1 min-w-0">
            <div className="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in">
                <input
                    type="checkbox"
                    name={`toggle-${source.id}`}
                    id={`toggle-${source.id}`}
                    className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer transition-all duration-200 border-gray-300 top-0"
                    style={{ left: source.enabled ? '24px' : '0px', borderColor: source.enabled ? '#FAC638' : '#D1D5DB' }}
                    checked={source.enabled}
                    onChange={() => toggleSource(source.id, type)}
                />
                <label
                    htmlFor={`toggle-${source.id}`}
                    className={`toggle-label block overflow-hidden h-6 rounded-full cursor-pointer transition-colors duration-200 ${source.enabled ? 'bg-primary' : 'bg-gray-300'}`}
                ></label>
            </div>
            <div className="flex flex-col min-w-0">
                <span className="font-bold text-gray-900 text-lg truncate">{source.name}</span>
                <span className="text-sm text-gray-500 truncate font-mono">{source.url}</span>
            </div>
        </div>
        <div className="flex items-center gap-2 pl-4">
            <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-all duration-300 cursor-pointer">
                <span className="material-symbols-outlined text-[20px]">arrow_upward</span>
            </button>
            <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-all duration-300 cursor-pointer">
                <span className="material-symbols-outlined text-[20px]">arrow_downward</span>
            </button>
            <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-all duration-300 cursor-pointer">
                <span className="material-symbols-outlined text-[20px]">edit_square</span>
            </button>
            <button className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-full transition-all duration-300 cursor-pointer">
                <span className="material-symbols-outlined text-[20px]">delete</span>
            </button>
        </div>
    </div>
);

export default function Settings() {
  const { videoSources, danmakuSources, toggleSource } = useSettingsStore();

  return (
    <div className="w-full px-4 md:px-8 pb-12 max-w-5xl mx-auto">
      {/* Video Sources */}
      <section className="bg-white rounded-2xl shadow-soft p-6 md:p-8 mt-6 border border-gray-100">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-2">
            <div>
                <h2 className="text-2xl font-bold text-gray-900">视频源管理</h2>
                <p className="text-gray-500 mt-1">管理视频来源，调整优先级和启用状态</p>
            </div>
            <div className="flex items-center gap-3">
                <button className="px-4 py-2 text-sm font-medium text-gray-600 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 hover:text-gray-900 transition-colors shadow-sm cursor-pointer">
                    恢复默认
                </button>
                <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors shadow-md flex items-center gap-1.5 cursor-pointer">
                    <span className="material-symbols-outlined text-sm font-bold">add</span>
                    添加源
                </button>
            </div>
        </div>
        <div className="relative mt-6 mb-6">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="material-symbols-outlined text-gray-400">search</span>
            </div>
            <input className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl leading-5 bg-white placeholder-gray-400 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-primary focus:border-primary sm:text-sm shadow-sm transition-shadow" placeholder="搜索源..." type="text"/>
        </div>
        <div className="space-y-4">
            {videoSources.map((source) => <SourceItem key={source.id} source={source} type="video" toggleSource={toggleSource} />)}
        </div>
      </section>

      {/* Danmaku Sources */}
      <section className="bg-white rounded-2xl shadow-soft p-6 md:p-8 mt-8 border border-gray-100">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-2">
            <div>
                <h2 className="text-2xl font-bold text-gray-900">弹幕源管理</h2>
                <p className="text-gray-500 mt-1">配置弹幕接口，丰富观影体验</p>
            </div>
            <div className="flex items-center gap-3">
                 <button className="px-4 py-2 text-sm font-medium text-gray-600 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 hover:text-gray-900 transition-colors shadow-sm">
                    恢复默认
                </button>
                <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors shadow-md flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-sm font-bold">add</span>
                    添加源
                </button>
            </div>
        </div>
        <div className="relative mt-6 mb-6">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="material-symbols-outlined text-gray-400">search</span>
            </div>
            <input className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl leading-5 bg-white placeholder-gray-400 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-primary focus:border-primary sm:text-sm shadow-sm transition-shadow" placeholder="搜索弹幕源..." type="text"/>
        </div>
        <div className="space-y-4">
            {danmakuSources.map((source) => <SourceItem key={source.id} source={source} type="danmaku" toggleSource={toggleSource} />)}
        </div>
      </section>

      {/* Data Management */}
      <section className="bg-white rounded-2xl shadow-soft p-6 md:p-8 mt-8 border border-gray-100">
        <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900">数据管理</h2>
            <p className="text-gray-500 mt-1">导入或导出您的所有设置、源和播放历史</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <button className="group flex items-center justify-between p-6 bg-gray-50 border border-gray-100 rounded-2xl hover:bg-white hover:border-primary hover:shadow-card hover:ring-1 hover:ring-primary/20 transition-all duration-300 text-left cursor-pointer">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center text-green-600 group-hover:bg-green-600 group-hover:text-white transition-all duration-300">
                        <span className="material-symbols-outlined text-2xl">upload_file</span>
                    </div>
                    <div>
                        <h3 className="font-bold text-gray-900 text-lg">导入配置</h3>
                        <p className="text-sm text-gray-500 mt-1">从 JSON 文件恢复数据</p>
                    </div>
                </div>
                <span className="material-symbols-outlined text-gray-400 group-hover:text-primary transition-all duration-300">chevron_right</span>
            </button>
            <button className="group flex items-center justify-between p-6 bg-gray-50 border border-gray-100 rounded-2xl hover:bg-white hover:border-primary hover:shadow-card hover:ring-1 hover:ring-primary/20 transition-all duration-300 text-left cursor-pointer">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                        <span className="material-symbols-outlined text-2xl">download</span>
                    </div>
                    <div>
                        <h3 className="font-bold text-gray-900 text-lg">导出配置</h3>
                        <p className="text-sm text-gray-500 mt-1">备份当前数据到本地</p>
                    </div>
                </div>
                <span className="material-symbols-outlined text-gray-400 group-hover:text-primary transition-all duration-300">chevron_right</span>
            </button>
        </div>
      </section>
    </div>
  );
}
