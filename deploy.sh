#!/bin/bash

# 部署脚本 - 快速推送到 GitHub

echo "🚀 准备部署到 GitHub..."

# 检查是否有未提交的更改
if [ -n "$(git status --porcelain)" ]; then
    echo "📝 发现未提交的更改，正在添加..."
    git add .
    read -p "请输入提交信息: " commit_message
    git commit -m "${commit_message:-Update: auto commit}"
fi

# 检查是否有远程仓库
if ! git remote | grep -q origin; then
    echo "⚠️  未检测到远程仓库！"
    echo "请先运行以下命令添加 GitHub 仓库："
    echo "git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git"
    exit 1
fi

# 推送到 GitHub
echo "📤 推送到 GitHub..."
git push origin main

if [ $? -eq 0 ]; then
    echo "✅ 代码已成功推送到 GitHub！"
    echo "🌐 Vercel 将自动检测并部署更新"
    echo ""
    echo "📋 下一步："
    echo "1. 访问 https://vercel.com 检查部署状态"
    echo "2. 或等待几分钟后访问你的网站 URL"
else
    echo "❌ 推送失败，请检查错误信息"
    exit 1
fi

