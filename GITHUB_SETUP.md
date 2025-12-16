# GitHub 设置指南

## 快速开始

### 1️⃣ 在 GitHub 上创建仓库

1. 访问 https://github.com/new
2. 填写仓库信息：
   - **Repository name**: `myanmar-casino-review`（或你喜欢的名字）
   - **Description**: `Luxury Myanmar Casino Review Website built with Next.js 14`
   - **Visibility**: 选择 Public 或 Private
   - ❌ **不要**勾选以下选项：
     - Add a README file
     - Add .gitignore
     - Choose a license
3. 点击 "Create repository"

### 2️⃣ 连接本地仓库到 GitHub

复制你在 GitHub 上创建的仓库 URL（例如：`https://github.com/YOUR_USERNAME/myanmar-casino-review.git`）

然后运行以下命令：

```bash
cd /Users/idea3c/myanmar-casino-review

# 添加远程仓库（替换下面的 URL 为你的仓库 URL）
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git

# 查看远程仓库（确认添加成功）
git remote -v
```

### 3️⃣ 推送代码到 GitHub

```bash
# 推送代码
git branch -M main
git push -u origin main
```

**如果提示输入用户名和密码：**
- Username: 你的 GitHub 用户名
- Password: 使用 **GitHub Personal Access Token**（不是密码）

#### 如何创建 Personal Access Token：

1. 访问 https://github.com/settings/tokens
2. 点击 "Generate new token" → "Generate new token (classic)"
3. 设置：
   - **Note**: `Vercel Deployment`
   - **Expiration**: 选择期限（建议 90 days 或 No expiration）
   - **Scopes**: 勾选 `repo`（完整仓库访问权限）
4. 点击 "Generate token"
5. **复制并保存 token**（只显示一次！）

### 4️⃣ 验证推送成功

访问你的 GitHub 仓库页面，应该能看到所有文件。

## 🔄 后续更新

每次修改代码后，使用以下命令推送：

```bash
cd /Users/idea3c/myanmar-casino-review

# 添加所有更改
git add .

# 提交更改
git commit -m "描述你的更改"

# 推送到 GitHub
git push
```

或者使用提供的脚本：

```bash
./deploy.sh
```

## ✅ 检查清单

- [ ] GitHub 仓库已创建
- [ ] 远程仓库已添加（`git remote -v` 可以查看）
- [ ] 代码已成功推送（GitHub 仓库页面可以看到文件）
- [ ] 可以正常进行后续更新推送

## 🆘 常见问题

### 错误：remote origin already exists

如果已经存在 origin，可以先删除再添加：

```bash
git remote remove origin
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git
```

### 错误：Authentication failed

确保使用 Personal Access Token 而不是密码。

### 错误：Permission denied

检查仓库 URL 是否正确，或者是否有访问权限。

## 📚 下一步

代码推送到 GitHub 后，继续查看 `DEPLOYMENT_CN.md` 了解如何部署到 Vercel。

