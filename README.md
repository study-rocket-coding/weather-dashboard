# Weather Dashboard 🌦️

一個基於 React 19 與 Tailwind CSS v4 打造的現代化天氣儀表板。提供全球城市即時天氣資訊與七天預報，具備專業的載入視覺效果與極致的行動端體驗。

![React](https://img.shields.io/badge/React-19-blue?logo=react)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-v4-38B2AC?logo=tailwind-css)
![Vite](https://img.shields.io/badge/Vite-v8-646CFF?logo=vite)
![Prettier](https://img.shields.io/badge/Prettier-enabled-F7B93E?logo=prettier)

## ✨ 核心功能

- 🔍 **全球城市搜尋**：串接 Open-Meteo Geocoding API，支援具備 Debounce (300ms) 機制的即時地名搜尋。
- 🌡️ **即時天氣資訊**：提供體感溫度、濕度、風速及對應的天氣圖示（包含晴、雨、雲、雷雨等完整狀態）。
- 📅 **七天預報列表**：清晰展示未來一週的氣溫變化趨勢。
- 🪄 **高級骨架屏載入**：實作具備 1.2s 流動光暈 (Shimmer Effect) 的骨架屏，優化數據載入時的視覺心理感受。
- 📱 **行動端優化**：
    - 響應式佈局 (RWD)：針對手機、平板、桌面端進行深度排版優化。
    - PWA-like 體驗：支援 Apple Touch Icon 與系統主題色 (Theme Color) 整合。
- ⚡ **效能優化**：利用 `preconnect` 提前建立 API 連線，縮短行動網路環境下的載入時間。

## 🛠️ 技術棧

- **Frontend**: React 19 (Hooks, 函式元件)
- **Styling**: Tailwind CSS v4 (採用最新的 @theme 變數與動畫實作)
- **Icons**: [Bas Milius - Meteocons](https://bas.dev/work/meteocons) (專業氣象圖示系統)
- **API**: Open-Meteo (免費，無需 API Key)
- **Tooling**: Vite (建置工具), ESLint (代碼檢查), Prettier (自動排版)

## 🚀 快速開始

### 環境需求
- Node.js (建議 v18 以上)
- npm 或 yarn

### 安裝步驟
1. 複製此專案：
   ```bash
   git clone https://github.com/study-rocket-coding/weather-dashboard.git
   ```
2. 安裝依賴：
   ```bash
   npm install
   ```
3. 啟動開發伺服器：
   ```bash
   npm run dev
   ```
4. 建立生產環境版本：
   ```bash
   npm run build
   ```

### 常用指令
- `npm run dev`: 啟動 Vite 開發環境。
- `npm run format`: 使用 Prettier 進行全專案程式碼格式化。
- `npm run lint`: 執行 ESLint 檢查。

## 🌿 分支策略與流程 (Git Flow)

專案採用嚴謹的分支管理策略，確保程式碼的穩定性與部署的自動化。

### 分支規範：
- **`main`**：正式發佈分支。受保護分支，須經由 Pull Request 且規範由 `dev` 分支合併。
- **`dev`**：開發主分支。受保護分支，須經由 Pull Request 進行功能合併。
- **`preparing`**：部署預備分支，此分支的任何變更將自動觸發 GitHub Pages 部署。
- **`feature-*`**：功能開發分支。
- **`fix-*`**：錯誤修復分支。

## 📁 專案結構

```text
src/
├── assets/           # 靜態資源（SVG 氣象圖示）
├── components/       # UI 元件（Header, Footer, CitySearch, etc.）
│   └── skeletons/    # 載入狀態元件（Shimmer 骨架屏）
├── constants/        # 常數定義（氣象代碼映射、圖片路徑）
├── pages/            # 頁面級元件（WeatherDashboard 主頁面）
├── App.jsx           # 應用程式入口與狀態管理
└── index.css         # 全域樣式與 Tailwind v4 設定
```

## 🎨 設計細節

- **視覺階層**：使用 Slate 系統配色，並針對主要數據 (Primary) 與次要數據 (Secondary) 進行細膩的字重與透明度區分。
- **圖示資源**：採用 [Meteocons](https://bas.dev/work/meteocons) 專業氣象圖示，確保了各種天氣狀態（晴、雨、雷雨、雪等）的視覺一致性與美感。
- **無障礙支持 (Accessibility)**：
    - 採用語意化標籤（如 `<dl>`, `<dt>`, `<dd>`）處理氣象數據。
    - 完善的 Meta Tags 與社交媒體分享縮圖設定。
- **穩定性**：內建 `<noscript>` 警告，確保在 JavaScript 停用環境下仍有明確提示。
