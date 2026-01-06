# 自動內容更新設置檢查清單

## ✅ 已完成項目

- [x] API Key 已設置在 GitHub Secrets
- [x] 工作流文件已創建 (`.github/workflows/auto-content-update.yml`)
- [x] 生成腳本已創建 (`scripts/generate-content.js`)
- [x] 分支名稱確認：`main`

## 🔍 使用前檢查

### 1. 確認 GitHub Secrets 設置

1. 前往 GitHub 倉庫
2. 點擊 **Settings** > **Secrets and variables** > **Actions**
3. 確認 `ANTHROPIC_API_KEY` 已存在
4. 確認 API Key 格式正確（應以 `sk-ant-` 開頭）

### 2. 確認 GitHub Actions 權限

1. 前往 **Settings** > **Actions** > **General**
2. 確認 **Workflow permissions** 設置為：
   - ✅ **Read and write permissions**
   - ✅ **Allow GitHub Actions to create and approve pull requests**

### 3. 確認文件結構

確認以下文件存在：
```
.github/workflows/auto-content-update.yml
scripts/generate-content.js
app/page.tsx
```

## 🚀 開始使用

### 方法 1: 手動觸發（推薦先測試）

1. 前往 GitHub 倉庫
2. 點擊 **Actions** 標籤
3. 在左側選擇 **自動內容更新**
4. 點擊 **Run workflow**
5. 選擇內容類型（預設：`all`）
6. 點擊 **Run workflow** 按鈕
7. 等待執行完成（約 1-3 分鐘）

### 方法 2: 等待自動執行

- **執行時間**：每天 UTC 00:00（台灣時間 08:00）
- **無需操作**：系統會自動執行並提交變更

## 📊 檢查執行結果

### 成功標誌

1. **Actions 頁面顯示綠色 ✓**
2. **自動創建 commit**：`🤖 自動更新內容 - YYYY-MM-DD HH:MM`
3. **`app/page.tsx` 文件被更新**，新增了 SEO 內容區塊

### 失敗處理

如果執行失敗，檢查：

1. **API Key 錯誤**
   - 檢查 Secrets 中的 API Key 是否正確
   - 確認 API Key 有足夠的額度

2. **權限錯誤**
   - 確認 Workflow permissions 設置正確
   - 確認倉庫允許 Actions 寫入

3. **文件更新失敗**
   - 檢查 `app/page.tsx` 文件結構是否正確
   - 確認文件中有 `<FAQ />` 組件

## ⚠️ 注意事項

### 1. API 費用

- Anthropic API 會產生費用
- 建議監控 API 使用量
- 每日自動更新會消耗約 1-2 次 API 調用

### 2. 內容審核

- **重要**：生成的內容需要人工審核
- 檢查內容是否符合網站要求
- 確認關鍵字使用是否自然

### 3. 版本控制

- 自動更新會直接提交到 `main` 分支
- 建議在重要更新前先測試
- 可以隨時回滾不需要的更新

### 4. 衝突處理

- 如果多人同時編輯 `app/page.tsx`，可能產生衝突
- 工作流會嘗試自動解決衝突
- 如果無法解決，需要手動處理

## 🔧 故障排除

### 問題 1: 工作流沒有執行

**解決方法**：
- 確認工作流文件已提交到倉庫
- 確認文件路徑正確：`.github/workflows/auto-content-update.yml`
- 檢查 Actions 是否被禁用

### 問題 2: API 調用失敗

**解決方法**：
- 檢查 API Key 是否正確
- 確認 API Key 有足夠額度
- 檢查網絡連接

### 問題 3: 內容沒有更新

**解決方法**：
- 檢查 `app/page.tsx` 文件結構
- 確認腳本執行日誌
- 手動測試腳本：`npm run generate-content`

## 📝 測試建議

### 第一次使用

1. **先手動觸發一次**，確認一切正常
2. **檢查生成的內容**，確認格式正確
3. **審核內容質量**，確認符合要求
4. **如果滿意**，可以啟用自動更新

### 本地測試（可選）

```bash
# 設置環境變數
export ANTHROPIC_API_KEY="your-api-key"
export CONTENT_TYPE="all"

# 執行腳本
npm run generate-content

# 檢查 app/page.tsx 是否更新
```

## ✅ 準備就緒檢查

完成以下檢查後，即可開始使用：

- [ ] API Key 已設置在 GitHub Secrets
- [ ] GitHub Actions 權限已設置
- [ ] 已手動測試一次，確認正常運作
- [ ] 了解如何查看和審核生成的內容
- [ ] 了解如何處理可能的錯誤

---

**準備好了！** 現在可以：
1. 立即手動觸發一次測試
2. 等待明天的自動執行（UTC 00:00）

