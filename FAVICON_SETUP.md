# Favicon 設置指南

## 📋 已完成的配置

已在 `app/layout.tsx` 中添加了 favicon 配置，使用：
- `/images/site-logo.png` 作為主要圖標
- `/favicon.ico` 作為傳統 favicon

## 📁 添加 Favicon 文件

### 方法 1: 使用現有 Logo（推薦）

如果您想使用現有的 `site-logo.png` 作為 favicon，需要：

1. **轉換 PNG 為 ICO 格式**：
   - 使用在線工具：https://convertio.co/png-ico/
   - 或使用工具：https://favicon.io/favicon-converter/
   - 上傳 `public/images/site-logo.png`
   - 下載轉換後的 `favicon.ico`

2. **放置文件**：
   - 將 `favicon.ico` 放入 `public/` 目錄
   - 路徑：`public/favicon.ico`

### 方法 2: 創建新的 Favicon

1. **準備圖片**：
   - 尺寸：16x16、32x32、48x48 像素（推薦 32x32）
   - 格式：PNG 或 ICO
   - 內容：網站 Logo 或代表圖標

2. **轉換為 ICO**：
   - 使用在線轉換工具
   - 確保支持多種尺寸

3. **放置文件**：
   - 放入 `public/favicon.ico`

## ✅ 驗證

添加 favicon 後：

1. **清除瀏覽器緩存**
2. **強制刷新**：`Cmd + Shift + R` (Mac) 或 `Ctrl + Shift + R` (Windows)
3. **檢查瀏覽器標籤頁**：應該能看到 favicon

## 🔧 其他圖標格式（可選）

如果需要支持更多設備，可以添加：

- `public/apple-touch-icon.png` (180x180) - iOS 設備
- `public/android-chrome-192x192.png` - Android 設備
- `public/android-chrome-512x512.png` - Android 設備

然後在 `app/layout.tsx` 的 icons 配置中添加對應路徑。

