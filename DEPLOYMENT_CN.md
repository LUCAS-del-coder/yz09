# 部署指南 - GitHub & Vercel

## 📋 快速开始

### 第一步：推送到 GitHub

1. **在 GitHub 上创建新仓库**
   - 访问 https://github.com/new
   - 仓库名称：`myanmar-casino-review`（或你喜欢的名字）
   - 选择 Public 或 Private
   - **不要**勾选 "Initialize this repository with a README"
   - 点击 "Create repository"

2. **连接本地仓库到 GitHub**

```bash
cd /Users/idea3c/myanmar-casino-review

# 添加远程仓库（替换 YOUR_USERNAME 为你的 GitHub 用户名，REPO_NAME 为仓库名）
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git

# 设置主分支
git branch -M main

# 推送代码
git push -u origin main
```

如果提示输入用户名和密码，使用 GitHub Personal Access Token 作为密码。

### 第二步：部署到 Vercel

#### 方法 1：通过 Vercel Dashboard（最简单）⭐

1. **访问 Vercel**
   - 访问 https://vercel.com
   - 点击 "Sign Up" 或 "Log In"
   - 选择 "Continue with GitHub" 使用 GitHub 账号登录

2. **导入项目**
   - 登录后点击 "Add New Project"
   - 找到并选择你的 `myanmar-casino-review` 仓库
   - 点击 "Import"

3. **配置项目**（通常自动检测，无需修改）
   - Framework Preset: **Next.js** ✅（自动检测）
   - Root Directory: `./` ✅
   - Build Command: `npm run build` ✅
   - Output Directory: `.next` ✅
   - Install Command: `npm install` ✅

4. **环境变量**（可选）
   - 如果需要，点击 "Environment Variables"
   - 添加：`NEXT_PUBLIC_BASE_URL` = `https://your-project.vercel.app`

5. **部署**
   - 点击 "Deploy" 按钮
   - 等待构建完成（通常 1-3 分钟）
   - 部署完成后会显示网站 URL

#### 方法 2：通过 Vercel CLI

```bash
# 安装 Vercel CLI
npm i -g vercel

# 登录 Vercel
vercel login

# 在项目目录部署
cd /Users/idea3c/myanmar-casino-review
vercel

# 跟随提示操作，选择：
# - Set up and deploy: Y
# - Which scope: 选择你的账号
# - Link to existing project: N
# - Project name: myanmar-casino-review
# - Directory: ./
# - Override settings: N

# 生产环境部署
vercel --prod
```

### 第三步：配置自动部署

连接到 GitHub 后，Vercel 会自动：
- ✅ 每次推送到 `main` 分支时自动部署
- ✅ 为每个 Pull Request 创建预览部署
- ✅ 部署状态会在 GitHub 上显示

## 🔄 更新网站

每次修改代码后：

```bash
cd /Users/idea3c/myanmar-casino-review

# 修改文件后...
git add .
git commit -m "描述你的更改"
git push

# Vercel 会自动检测并部署！🚀
```

## 🌐 自定义域名（可选）

1. 在 Vercel Dashboard → 你的项目 → Settings → Domains
2. 输入你的域名（例如：`casino-reviews.com`）
3. 按照提示配置 DNS 记录
4. 等待 DNS 生效（通常几分钟到几小时）

## ⚙️ 环境变量配置

如果需要设置环境变量：

1. Vercel Dashboard → 项目 → Settings → Environment Variables
2. 添加变量：
   - **Name**: `NEXT_PUBLIC_BASE_URL`
   - **Value**: `https://your-project.vercel.app`
   - **Environment**: Production, Preview, Development（全选）

## 🐛 故障排除

### 构建失败

**检查点：**
1. 查看 Vercel 构建日志中的错误信息
2. 本地测试构建：
   ```bash
   npm run build
   ```
3. 确保 Node.js 版本兼容（Vercel 使用 Node.js 18+）

### 图片不显示

**解决方案：**
1. 确保图片在 `public/images/casinos/` 目录中
2. 或使用外部图片 URL 更新 `casinos.json`
3. 代码已包含图片错误处理，会显示占位符

### TypeScript 错误

```bash
# 本地检查类型错误
npx tsc --noEmit
```

## 📦 项目结构

```
myanmar-casino-review/
├── app/              # Next.js 14 App Router 页面
├── components/       # React 组件
├── data/            # 赌场数据 JSON
├── public/          # 静态文件（图片等）
├── types/           # TypeScript 类型定义
├── package.json     # 依赖配置
└── README.md        # 项目说明
```

## ✅ 部署检查清单

- [ ] 代码已推送到 GitHub
- [ ] Vercel 项目已创建并连接 GitHub
- [ ] 构建成功无错误
- [ ] 网站可以访问
- [ ] 所有页面正常加载
- [ ] 移动端响应式正常
- [ ] 环境变量已配置（如需要）

## 🎉 完成！

部署完成后，你会获得一个类似这样的 URL：
`https://myanmar-casino-review.vercel.app`

这个 URL 可以：
- 分享给他人
- 用作生产环境
- 配置到自定义域名

**需要帮助？** 查看 Vercel 文档：https://vercel.com/docs

