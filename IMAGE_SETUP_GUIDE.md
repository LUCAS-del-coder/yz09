# 圖片設置指南

## 📁 圖片目錄結構

請將圖片放入以下目錄：

```
public/
  images/
    casinos/          # 賭場 Logo 和 Hero 圖片
    games/            # 遊戲圖片
```

---

## 🎰 Casino 圖片（需要 14 張）

### 需要的 Casino Logo（PNG 格式，透明背景）

請將以下 Logo 放入 `public/images/casinos/` 目錄：

1. **shwe-logo.png** - Shwe Casino Logo
2. **777-logo.png** - 777 Casino Logo
3. **888-logo.png** - 888 Casino Logo
4. **win8-logo.png** - Win8 Casino Logo
5. **999-logo.png** - 999 Casino Logo
6. **pglucky88-logo.png** - PGLucky88 Casino Logo
7. **fafafa-logo.png** - FaFaFa Casino Logo

**Logo 要求：**
- 格式：PNG（透明背景）
- 推薦尺寸：200x200 像素（正方形）
- 文件大小：建議小於 100KB
- 背景：透明或白色

### 需要的 Casino Hero 圖片（JPG 格式）

請將以下 Hero 圖片放入 `public/images/casinos/` 目錄：

1. **shwe-hero.jpg** - Shwe Casino Hero 圖片
2. **777-hero.jpg** - 777 Casino Hero 圖片
3. **888-hero.jpg** - 888 Casino Logo Hero 圖片
4. **win8-hero.jpg** - Win8 Casino Hero 圖片
5. **999-hero.jpg** - 999 Casino Hero 圖片
6. **pglucky88-hero.jpg** - PGLucky88 Casino Hero 圖片
7. **fafafa-hero.jpg** - FaFaFa Casino Hero 圖片

**Hero 圖片要求：**
- 格式：JPG 或 PNG
- 推薦尺寸：1200x600 像素（2:1 比例）
- 文件大小：建議小於 500KB
- 內容：賭場品牌相關的宣傳圖片

---

## 🎮 遊戲圖片（需要 6 張）

請將以下遊戲圖片放入 `public/images/games/` 目錄：

1. **5-lions-megaways.jpg**
   - 遊戲：5 LIONS MEGAWAYS™
   - 主題：金色獅子 Foo Dog

2. **starlight-princess-1000.jpg**
   - 遊戲：Starlight Princess 1000
   - 主題：動漫風格天使公主

3. **gates-of-olympus-1000.jpg**
   - 遊戲：Gates of Olympus 1000
   - 主題：宙斯和希臘神廟

4. **ancient-egypt-classic.jpg**
   - 遊戲：ANCIENT EGYPT Classic
   - 主題：埃及女王

5. **caishens-gold.jpg**
   - 遊戲：Caishen's Gold
   - 主題：財神和金幣

6. **gates-of-olympus-1000-alt.jpg**
   - 遊戲：Gates of Olympus 1000（備用版本）
   - 主題：宙斯主題（不同角度）

**遊戲圖片要求：**
- 格式：JPG 或 PNG
- 推薦尺寸：600x400 像素（3:2 比例）
- 文件大小：建議小於 500KB
- 內容：遊戲截圖或宣傳圖

---

## 📋 完整文件清單

### Casino 圖片（14 張）

**Logo（7 張）：**
- [ ] shwe-logo.png
- [ ] 777-logo.png
- [ ] 888-logo.png
- [ ] win8-logo.png
- [ ] 999-logo.png
- [ ] pglucky88-logo.png
- [ ] fafafa-logo.png

**Hero（7 張）：**
- [ ] shwe-hero.jpg
- [ ] 777-hero.jpg
- [ ] 888-hero.jpg
- [ ] win8-hero.jpg
- [ ] 999-hero.jpg
- [ ] pglucky88-hero.jpg
- [ ] fafafa-hero.jpg

### 遊戲圖片（6 張）

- [ ] 5-lions-megaways.jpg
- [ ] starlight-princess-1000.jpg
- [ ] gates-of-olympus-1000.jpg
- [ ] ancient-egypt-classic.jpg
- [ ] caishens-gold.jpg
- [ ] gates-of-olympus-1000-alt.jpg

---

## 🔍 如何獲取圖片

### 方法 1：從官方網站下載
1. 訪問各個 Casino 的官方網站
2. 右鍵點擊 Logo 或宣傳圖片
3. 選擇「另存為圖片」
4. 根據要求調整尺寸和格式

### 方法 2：使用圖片編輯工具
1. 使用 Photoshop、GIMP 或 Canva 等工具
2. 創建符合尺寸要求的圖片
3. 導出為 PNG（Logo）或 JPG（Hero/Game）

### 方法 3：使用 AI 生成圖片
1. 使用 Midjourney、DALL-E 或 Stable Diffusion
2. 根據遊戲/賭場主題生成圖片
3. 調整尺寸和格式

### 方法 4：使用免費圖片資源
- Unsplash (https://unsplash.com)
- Pexels (https://www.pexels.com)
- Pixabay (https://pixabay.com)

---

## ✅ 驗證圖片是否正確

添加圖片後，請執行以下步驟驗證：

1. **檢查文件路徑**
   ```bash
   ls public/images/casinos/
   ls public/images/games/
   ```

2. **本地測試**
   ```bash
   npm run dev
   ```
   訪問 http://localhost:3000 查看圖片是否正確顯示

3. **檢查控制台**
   - 打開瀏覽器開發者工具（F12）
   - 查看 Console 是否有圖片載入錯誤
   - 查看 Network 標籤確認圖片是否成功載入

---

## 🚨 常見問題

### 問題 1：圖片顯示為空白
**解決方案：**
- 確認文件名稱完全匹配（區分大小寫）
- 確認文件路徑正確
- 檢查文件格式是否正確

### 問題 2：圖片太大導致載入慢
**解決方案：**
- 使用圖片壓縮工具（如 TinyPNG）
- 調整圖片尺寸
- 使用 WebP 格式（需要修改代碼支持）

### 問題 3：Logo 有白色背景
**解決方案：**
- 使用 PNG 格式並確保背景透明
- 使用圖片編輯工具移除背景

---

## 📝 注意事項

1. **文件名必須完全匹配**（區分大小寫）
2. **文件路徑必須正確**（`/images/casinos/` 和 `/images/games/`）
3. **建議使用壓縮工具優化圖片大小**
4. **確保圖片版權合法**（使用官方圖片或授權圖片）

---

## 🎯 快速開始

1. 創建目錄（已完成）：
   ```bash
   mkdir -p public/images/casinos public/images/games
   ```

2. 將圖片文件放入對應目錄

3. 驗證圖片是否正確顯示

4. 提交到 Git：
   ```bash
   git add public/images/
   git commit -m "添加 Casino 和遊戲圖片"
   git push
   ```

---

完成後，您的網站將顯示所有圖片！🎉



