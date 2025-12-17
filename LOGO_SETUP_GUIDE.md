# Logo 圖片設置指南

## 📁 圖片存放位置

所有 casino logo 圖片應該存放在：
```
/public/images/casinos/
```

## 📝 需要的 Logo 文件

根據 `data/casinos.json` 配置，你需要準備以下 logo 文件：

1. **Shwe Casino**: `/public/images/casinos/shwe-logo.png`
2. **777 Casino**: `/public/images/casinos/777-logo.png`
3. **888 Casino**: `/public/images/casinos/888-logo.png`
4. **Win8 Casino**: `/public/images/casinos/win8-logo.png`
5. **999 Casino**: `/public/images/casinos/999-logo.png`
6. **PGLucky88 Casino**: `/public/images/casinos/pglucky88-logo.png`
7. **FaFaFa Casino**: `/public/images/casinos/fafafa-logo.png`

## 🖼️ 圖片規格建議

- **格式**: PNG（推薦，支持透明背景）或 JPG
- **尺寸**: 建議 200x200px 到 400x400px
- **背景**: 透明背景（PNG）或白色背景
- **文件大小**: 建議小於 200KB 以優化加載速度

## 📥 添加 Logo 的步驟

### 方法 1: 使用文件管理器

1. 打開項目文件夾
2. 導航到 `public/images/casinos/` 目錄
3. 將 logo 圖片複製到該目錄
4. 確保文件名與 `casinos.json` 中的配置一致

### 方法 2: 使用終端命令

```bash
# 進入項目目錄
cd /Users/idea3c/myanmar-casino-review

# 確保目錄存在
mkdir -p public/images/casinos

# 複製圖片到目錄（替換 YOUR_LOGO_PATH 為實際圖片路徑）
cp YOUR_LOGO_PATH public/images/casinos/shwe-logo.png
```

## ✅ 驗證 Logo 是否正確

1. 確認文件路徑正確：
   - 文件應該在 `public/images/casinos/` 目錄下
   - 文件名應該完全匹配（包括擴展名）

2. 檢查 `casinos.json` 中的路徑：
   ```json
   "logo": "/images/casinos/shwe-logo.png"
   ```
   注意：路徑以 `/images/` 開頭（不包含 `public`）

3. 啟動開發服務器測試：
   ```bash
   npm run dev
   ```
   然後訪問 `http://localhost:3000/images/casinos/shwe-logo.png` 確認圖片可以訪問

## 🎨 圖片優化建議

### 使用 Next.js Image 組件

代碼中已經使用了 Next.js 的 `Image` 組件，它會自動優化圖片：

```tsx
<Image
  src={casino.logo}
  alt={`${casino.nameMm} ကာစီနို လိုဂို`}
  width={120}
  height={120}
  className="object-contain w-full h-full"
/>
```

### 圖片優化工具

如果圖片太大，可以使用以下工具優化：

1. **TinyPNG**: https://tinypng.com/ (在線壓縮 PNG/JPG)
2. **Squoosh**: https://squoosh.app/ (Google 開發的圖片優化工具)
3. **ImageOptim** (Mac 應用)

## 🔄 更新 Logo

如果需要更換 logo：

1. 用新圖片替換舊圖片（保持相同的文件名）
2. 清除瀏覽器緩存或使用 `Ctrl+Shift+R` (Windows) / `Cmd+Shift+R` (Mac) 強制刷新
3. 如果是生產環境，可能需要重新部署

## 📌 注意事項

- **文件大小**: 保持圖片文件小於 200KB 以確保快速加載
- **文件格式**: 建議使用 PNG（支持透明背景）
- **命名規範**: 使用小寫字母和連字符，如 `shwe-logo.png`
- **路徑**: Next.js 的 `/public` 目錄下的文件可以直接通過 `/` 路徑訪問

## 🐛 常見問題

### Logo 不顯示？

1. 檢查文件路徑是否正確
2. 確認文件是否存在
3. 檢查瀏覽器控制台是否有 404 錯誤
4. 確認文件擴展名是否匹配（`.png` vs `.jpg`）

### Logo 顯示模糊？

1. 使用更高分辨率的圖片（至少 200x200px）
2. 確保使用 PNG 格式而不是 JPG
3. 檢查是否使用了正確的 width 和 height 屬性

