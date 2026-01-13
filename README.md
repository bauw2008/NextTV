# NextTV

<div align="center">
  <img src="./public/logo.png" alt="NextTV Logo" width="32" height="32" />

  <p><strong>现代化的视频流媒体播放平台</strong></p>

  <p>
    一个功能丰富的视频流媒体应用，支持多源搜索、智能播放、弹幕互动和历史记录管理
  </p>
</div>

---

## 特性

- 🎬 **多源视频搜索** - 支持自定义多个视频源 API，聚合搜索电影和电视剧
- 🎥 **高级播放器** - 基于 Artplayer，支持 HLS/M3U8 流媒体播放
- 💬 **弹幕系统** - 实时弹幕显示，支持多个弹幕源配置
- 🚀 **去广告功能** - 自动过滤 M3U8 流中的广告片段
- ⏭️ **智能跳过** - 自动跳过片头片尾，可自定义跳过时间点
- 📝 **播放历史** - 自动保存观看进度，随时继续观看
- ⭐ **收藏管理** - 收藏喜爱的视频，方便快速访问
- 🎯 **豆瓣推荐** - 集成豆瓣 API，展示热门和高分影视内容
- ⚙️ **灵活配置** - 可视化管理视频源和弹幕源，支持导入导出
- ⌨️ **快捷键支持** - 丰富的键盘快捷键，提升观看体验

---

## 技术栈

### 核心框架

- **Next.js** 16.0.0 - React 服务端渲染框架
- **React** 19.2.3 - 用户界面构建库
- **Tailwind CSS** 4.1.18 - 现代化 CSS 框架

### 播放器相关

- **Artplayer** 5.3.0 - 功能丰富的 HTML5 视频播放器
- **HLS.js** 1.6.15 - HTTP Live Streaming 支持
- **artplayer-plugin-danmuku** 5.2.0 - 弹幕插件

### 状态管理

- **Zustand** 5.0.10 - 轻量级状态管理库

---

## 快速开始

### 前置要求

- Node.js 18.0 或更高版本
- npm 或 yarn 包管理器

### 安装

```bash
# 克隆项目
git clone https://github.com/yourusername/NextTV.git
cd NextTV

# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看应用。

### 构建生产版本

```bash
# 构建项目
npm run build

# 启动生产服务器
npm start
```

---

## 主要功能

### 1. 视频搜索

- 支持多个视频源聚合搜索
- 分页浏览搜索结果
- 展示视频封面、标题和简介

### 2. 视频播放

- **HLS 流媒体支持**：原生 HLS 和 HLS.js 自动降级
- **自动去广告**：通过过滤 M3U8 中的 `#EXT-X-DISCONTINUITY` 标签去除广告
- **片头片尾跳过**：可配置自动跳过的起止时间
- **剧集切换**：上一集/下一集快速切换
- **进度保存**：自动保存播放进度（每 5 秒）
- **弹幕显示**：实时加载和显示弹幕评论

### 3. 播放历史

- 自动记录观看历史（最多 20 条）
- 显示观看进度和剧集信息
- 快速跳转到历史记录
- 支持删除单条或清空全部历史

### 4. 收藏管理

- 收藏喜爱的影视作品
- 查看收藏列表
- 快速访问收藏内容

### 5. 豆瓣推荐

- 首页展示豆瓣热门和高分内容
- 支持按标签筛选（热门、最新、经典、豆瓣高分等）
- 自定义标签管理（添加、编辑、删除）
- 分页浏览推荐内容

### 6. 设置管理

- **视频源管理**：

  - 添加/编辑/删除视频源
  - 启用/禁用视频源
  - 调整源优先级
  - 导入/导出配置

- **弹幕源管理**：
  - 类似视频源的管理功能
  - 支持多个弹幕源配置

---

## 快捷键

播放器支持以下快捷键操作：

| 快捷键    | 功能       |
| --------- | ---------- |
| `空格`    | 播放/暂停  |
| `←`       | 快退 10 秒 |
| `→`       | 快进 10 秒 |
| `Alt + ←` | 上一集     |
| `Alt + →` | 下一集     |
| `↑`       | 增加音量   |
| `↓`       | 减少音量   |
| `F`       | 全屏切换   |

---

## 项目结构

```
NextTV/
├── app/                          # Next.js App Router 目录
│   ├── layout.js                 # 根布局组件
│   ├── page.js                   # 首页（豆瓣推荐）
│   ├── globals.css               # 全局样式
│   ├── api/                      # API 路由
│   │   ├── search/route.js       # 搜索 API 代理
│   │   ├── douban/route.js       # 豆瓣 API 代理
│   │   └── detail/route.js       # 视频详情 API
│   ├── search/                   # 搜索页面
│   │   ├── page.js
│   │   └── SearchContent.js
│   ├── play/[id]/                # 播放页面（动态路由）
│   │   └── page.js
│   └── settings/                 # 设置页面
│       └── page.js
│
├── components/                   # React 组件
│   ├── Navbar.js                 # 导航栏
│   ├── Footer.js                 # 页脚
│   ├── MovieCard.js              # 视频卡片组件
│   ├── Artplayer.js              # 播放器组件
│   ├── EpisodeList.js            # 剧集列表组件
│   ├── ContinueWatching.js       # 继续观看组件
│   ├── FavoriteButton.js         # 收藏按钮组件
│   └── Pagination.js             # 分页组件
│
├── lib/                          # 工具函数库
│   ├── api.js                    # 视频搜索和详情 API
│   ├── constants.js              # 常量配置
│   ├── doubanApi.js              # 豆瓣推荐 API
│   ├── danmakuApi.js             # 弹幕 API
│   └── util.js                   # 工具函数
│
├── store/                        # Zustand 状态管理
│   ├── usePlayHistoryStore.js    # 播放历史状态
│   ├── useSettingsStore.js       # 设置状态
│   └── useFavoritesStore.js      # 收藏状态
│
├── public/                       # 静态资源
│   └── logo.png                  # NextTV Logo
│
├── package.json                  # 依赖管理
├── next.config.js                # Next.js 配置
└── postcss.config.mjs            # PostCSS 配置
```

---

## 配置指南

### 添加视频源

1. 进入"设置"页面
2. 在"视频源管理"部分点击"添加视频源"
3. 填写源名称和 API 地址
4. 保存后启用该视频源

### 添加弹幕源

1. 进入"设置"页面
2. 在"弹幕源管理"部分点击"添加弹幕源"
3. 填写源名称和 API 地址
4. 保存后启用该弹幕源

### 导入/导出配置

在设置页面，你可以：

- 点击"导出配置"将当前设置保存为 JSON 文件
- 点击"导入配置"从 JSON 文件恢复设置

---

## 数据存储

应用使用浏览器的 LocalStorage 存储以下数据：

- 播放历史记录（最多 20 条）
- 收藏列表
- 视频源和弹幕源配置
- 用户自定义标签

所有数据仅存储在本地，不会上传到服务器。

---

## 开发

### 启动开发服务器

```bash
npm run dev
```

### 代码检查

```bash
npm run lint
```

### 构建项目

```bash
npm run build
```

---

## 贡献

欢迎贡献代码、报告问题或提出建议！

1. Fork 本仓库
2. 创建你的特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交你的改动 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开一个 Pull Request

---

## 许可证

本项目采用 MIT 许可证 - 详见 [LICENSE](LICENSE) 文件。

---

## 致谢

- [Artplayer](https://github.com/zhw2590582/ArtPlayer) - 优秀的 HTML5 视频播放器
- [豆瓣](https://movie.douban.com/) - 提供影视推荐数据
- [Next.js](https://nextjs.org/) - React 服务端渲染框架
- [Tailwind CSS](https://tailwindcss.com/) - 现代化 CSS 框架

---

<div align="center">
  <p>Made with ❤️ by NextTV Team</p>
</div>
