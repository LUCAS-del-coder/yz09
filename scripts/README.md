# 自動內容生成腳本說明

## 📋 概述

這個腳本使用 Anthropic Claude API 自動生成 SEO 優化的內容，並更新到 Next.js 項目的首頁。

## 📁 文件結構

```
.github/workflows/
  └── auto-content-update.yml    # GitHub Actions 工作流

scripts/
  ├── generate-content.js           # 內容生成腳本
  ├── transform-posts-to-blog.js   # 將 scraped posts.json 轉換為 blog-posts.json
  ├── split-blog-posts-by-locale.js # 將 blog-posts.json 拆成 blog-posts-en / blog-posts-my
  ├── translate-blog-posts-en.js    # 將 blog-posts-en.json 緬文內容翻譯成英文 (需 ANTHROPIC_API_KEY)
  └── README.md                     # 本說明文件
```

## 📰 Blog 文章轉換 (transform-posts)

當你有新的 scraped blog 資料在 `data/posts.json` 時：

1. 執行轉換腳本：
```bash
npm run transform-posts
```

2. 腳本會：
   - 將外部連結 (mm7.tech) 轉為內部連結 `/blog/blog-{id}`
   - 清除 excerpt 中的 `[...]` 截斷
   - 保留 content_html 用於完整文章顯示
   - 生成 URL-safe slugs (blog-5160, blog-5129 等)

## 🚀 使用方法

### 方法 1: 本地執行

1. 設置環境變數：
```bash
export ANTHROPIC_API_KEY="your-api-key-here"
export CONTENT_TYPE="all"  # 可選: all, games, promotions, seo
```

2. 執行腳本：
```bash
npm run generate-content
```

### 方法 2: GitHub Actions 自動執行

1. 在 GitHub 倉庫設置 Secrets：
   - 進入 Settings > Secrets and variables > Actions
   - 添加 `ANTHROPIC_API_KEY` secret

2. 工作流會自動執行：
   - **每日自動觸發**：每天 UTC 00:00（台灣時間 08:00）
   - **手動觸發**：在 GitHub Actions 頁面點擊 "Run workflow"

## ⚙️ 配置選項

### CONTENT_TYPE 選項

- `all` - 生成完整內容（主標題、主段落、遊戲段落、支付段落）
- `games` - 只生成遊戲相關內容
- `promotions` - 只生成促銷活動內容
- `seo` - 只生成 SEO 優化內容

### 關鍵字系統

腳本包含 29 個預定義的 SEO 關鍵字。在每日自動更新模式下，會根據日期選擇 5 個關鍵字，確保每天選擇相同的關鍵字。

## 📝 生成的內容

生成的內容會自動插入到 `app/page.tsx` 文件中，位於 `<FAQ />` 組件之後。

內容格式：
- 使用 Next.js JSX 語法
- 包含適當的 Tailwind CSS 類名
- 自動轉義 HTML 特殊字符
- 包含時間戳記註釋

## 🔧 故障排除

### API Key 錯誤

如果看到 "未設置 ANTHROPIC_API_KEY" 錯誤：
1. 確認環境變數已正確設置
2. 確認 API Key 格式正確（應以 `sk-ant-` 開頭）

### 文件更新失敗

如果看到 "無法找到合適的插入位置" 警告：
1. 檢查 `app/page.tsx` 文件結構是否正確
2. 確認文件中有 `<FAQ />` 組件

### JSON 解析錯誤

如果看到 JSON 解析警告：
- 腳本會自動嘗試修復常見的 JSON 格式問題
- 如果修復失敗，會嘗試從文本中提取內容

## 📌 注意事項

1. **API 費用**：使用 Anthropic API 會產生費用，請注意使用量
2. **內容審核**：生成的內容需要人工審核，確保符合網站要求
3. **版本控制**：建議在提交前檢查生成的內容
4. **關鍵字驗證**：腳本會自動驗證關鍵字使用情況，但建議人工檢查

## 🌐 Blog 英文翻譯 (translate-blog-en)

將 `data/blog-posts-en.json` 中的緬甸文內容翻譯成英文，使用 Anthropic Claude API。

1. 設置環境變數：
```bash
export ANTHROPIC_API_KEY="your-api-key-here"
```

2. 翻譯全部文章：
```bash
npm run translate-blog-en
```

3. 僅翻譯前 N 篇（測試用）：
```bash
LIMIT=3 npm run translate-blog-en
```

4. **僅翻譯 content_html**（標題、摘要、內文已是英文時使用，省 API 呼叫）：
```bash
# Linux / macOS / Git Bash
npm run translate-blog-en:html
# 或
CONTENT_HTML_ONLY=1 npm run translate-blog-en

# Windows CMD
set CONTENT_HTML_ONLY=1 && npm run translate-blog-en
```

翻譯後會直接寫回 `data/blog-posts-en.json`。預設會翻譯標題、摘要、內文與 HTML 內文，標籤會對應為英文（如 Slots, Casino）。使用 `CONTENT_HTML_ONLY=1` 時只會翻譯仍含緬文的 `content_html`。

## 🔗 相關文檔

- [Anthropic API 文檔](https://docs.anthropic.com/)
- [GitHub Actions 文檔](https://docs.github.com/en/actions)

