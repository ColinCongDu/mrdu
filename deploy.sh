#!/bin/bash

echo "开始部署到 deploy 分支..."

DIST_PATH=".vitepress/dist"
DEPLOY_BRANCH="deploy"

echo "构建项目..."
npm run docs:build

echo "进入构建目录..."
cd "$DIST_PATH"

echo "初始化 git 仓库..."
git init

echo "添加所有文件..."
git add .

echo "提交更改..."
git commit -m "Deploy: 更新站点内容"

echo "添加远程仓库..."
git remote add origin https://github.com/$(git config --get remote.origin.url | sed 's/.*github.com[:/]\(.*\)\.git/\1/').git 2>/dev/null || git remote set-url origin $(git config --get remote.origin.url | sed 's|github.com[:/]||;s|\.git$||' | xargs -I {} echo "https://github.com/{}.git")

echo "强制推送到 $DEPLOY_BRANCH 分支..."
git push -f origin HEAD:$DEPLOY_BRANCH

echo "返回项目根目录..."
cd ../..

echo "部署成功！"
