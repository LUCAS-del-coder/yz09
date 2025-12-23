# 部署指南 - GitHub & Vercel

## 步骤 1: 初始化 Git 仓库

```bash
cd /Users/idea3c/myanmar-casino-review
git init
git add .
git commit -m "Initial commit: Myanmar Casino Review Website"
```

## 步骤 2: 创建 GitHub 仓库

1. 访问 [GitHub](https://github.com/new)
2. 创建新仓库（例如：`myanmar-casino-review`）
3. **不要**初始化 README、.gitignore 或 license（我们已经有了）
4. 复制仓库的 HTTPS URL

## 步骤 3: 推送代码到 GitHub

```bash
# 添加远程仓库（替换 YOUR_USERNAME 和 REPO_NAME）
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git

# 推送代码
git branch -M main
git push -u origin main
```

## 步骤 4: 部署到 Vercel

### 方法 1: 通过 Vercel Dashboard（推荐）

1. 访问 [Vercel](https://vercel.com)
2. 使用 GitHub 账号登录
3. 点击 "Add New Project"
4. 选择你的 GitHub 仓库
5. 配置项目：
   - **Framework Preset**: Next.js（会自动检测）
   - **Root Directory**: `./`（默认）
   - **Build Command**: `npm run build`（默认）
   - **Output Directory**: `.next`（默认）
   - **Install Command**: `npm install`（默认）

6. 环境变量（可选）：
   - 如果需要，添加 `NEXT_PUBLIC_BASE_URL` 环境变量

7. 点击 "Deploy"

### 方法 2: 通过 Vercel CLI

```bash
# 安装 Vercel CLI
npm i -g vercel

# 登录 Vercel
vercel login

# 在项目目录中部署
cd /Users/idea3c/myanmar-casino-review
vercel

# 生产环境部署
vercel --prod
```

## 步骤 5: 配置自定义域名（可选）

1. 在 Vercel Dashboard 中，进入项目设置
2. 点击 "Domains"
3. 添加你的自定义域名
4. 按照提示配置 DNS 记录

## 环境变量配置

如果需要在 Vercel 中设置环境变量：

1. 进入 Vercel Dashboard → 项目 → Settings → Environment Variables
2. 添加：
   - `NEXT_PUBLIC_BASE_URL`: 你的网站 URL（例如：`https://my-casino-reviews.vercel.app`）

## 自动部署

连接到 GitHub 后，Vercel 会自动：
- 监听 `main` 分支的推送
- 自动构建和部署
- 为每个 Pull Request 创建预览部署

## 故障排除

### 构建失败

如果构建失败，检查：
- Node.js 版本（Vercel 默认使用 Node.js 18+）
- 依赖项是否正确安装
- 类型错误（运行 `npm run build` 本地测试）

### 图片加载问题

确保：
- 图片路径正确
- `public/images/casinos/` 目录中有图片文件
- 或者图片已经上传到 CDN

## 有用的命令

```bash
# 本地测试构建
npm run build
npm start

# 查看 Vercel 部署日志
vercel logs

# 检查项目状态
vercel inspect
```

## 后续更新

每次推送代码到 GitHub 时，Vercel 会自动重新部署：

```bash
git add .
git commit -m "Update: description of changes"
git push
```

