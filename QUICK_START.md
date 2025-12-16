# 🚀 快速开始指南

## 📋 当前状态

✅ Git 仓库已初始化  
✅ 所有代码已提交  
✅ 部署配置已准备就绪  

## 🎯 接下来需要做的 3 个步骤

### 步骤 1: 推送到 GitHub（5分钟）

1. **在 GitHub 创建新仓库**
   - 访问：https://github.com/new
   - 仓库名：`myanmar-casino-review`
   - **不要**勾选任何初始化选项
   - 点击 "Create repository"

2. **连接并推送代码**

```bash
cd /Users/idea3c/myanmar-casino-review

# 添加你的 GitHub 仓库 URL（替换 YOUR_USERNAME 和 REPO_NAME）
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git

# 推送到 GitHub
git branch -M main
git push -u origin main
```

📖 **详细说明**: 查看 `GITHUB_SETUP.md`

### 步骤 2: 部署到 Vercel（3分钟）

1. **访问 Vercel 并登录**
   - 访问：https://vercel.com
   - 使用 GitHub 账号登录（点击 "Continue with GitHub"）

2. **导入项目**
   - 点击 "Add New Project"
   - 选择你的 `myanmar-casino-review` 仓库
   - 点击 "Import"

3. **部署**
   - 所有配置会自动检测（Next.js）
   - 直接点击 "Deploy"
   - 等待 1-3 分钟完成构建

✅ **完成！** 你会得到一个类似这样的 URL：  
`https://myanmar-casino-review.vercel.app`

📖 **详细说明**: 查看 `DEPLOYMENT_CN.md`

### 步骤 3: 后续更新（每次修改后）

```bash
cd /Users/idea3c/myanmar-casino-review

# 方式 1: 使用脚本（推荐）
./deploy.sh

# 方式 2: 手动操作
git add .
git commit -m "描述你的更改"
git push
```

Vercel 会自动检测 GitHub 的更新并重新部署！🎉

## 📚 文档说明

- `GITHUB_SETUP.md` - GitHub 详细设置指南
- `DEPLOYMENT_CN.md` - Vercel 部署完整指南
- `README.md` - 项目技术文档
- `deploy.sh` - 快速部署脚本

## 🔑 重要提示

### GitHub Personal Access Token

如果推送时提示需要密码，使用 **Personal Access Token**：
1. https://github.com/settings/tokens
2. Generate new token (classic)
3. 勾选 `repo` 权限
4. 复制 token 用作密码

### 图片文件

项目代码已包含图片错误处理，如果图片不存在会显示占位符。  
如需添加真实图片，放在：`public/images/casinos/`

### 环境变量（可选）

如果需要自定义 base URL：
- Vercel Dashboard → Settings → Environment Variables
- 添加：`NEXT_PUBLIC_BASE_URL` = `https://your-domain.vercel.app`

## ✅ 检查清单

完成后确认：
- [ ] GitHub 仓库创建成功
- [ ] 代码已推送到 GitHub
- [ ] Vercel 项目已创建
- [ ] 网站可以访问
- [ ] 所有页面正常显示
- [ ] 移动端响应式正常

## 🆘 需要帮助？

- Vercel 文档：https://vercel.com/docs
- GitHub 文档：https://docs.github.com
- Next.js 文档：https://nextjs.org/docs

## 🎉 完成！

部署成功后，你的网站就可以在全球访问了！

---

**当前目录**: `/Users/idea3c/myanmar-casino-review`  
**Git 状态**: ✅ 已初始化，3 个提交  
**下一步**: 推送到 GitHub

