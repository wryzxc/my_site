#!/bin/bash
# 自动部署脚本 - 一键推送到GitHub

echo "🚀 开始部署到GitHub..."

# 检查是否有修改
if git status | grep -q "Changes not staged for commit\|Untracked files"; then
    # 添加所有修改
    git add .
    
    # 询问提交信息
    echo "📝 请输入提交说明（默认：更新网站内容）："
    read -r commit_msg
    if [ -z "$commit_msg" ]; then
        commit_msg="更新网站内容"
    fi
    
    # 提交
    git commit -m "$commit_msg"
    
    # 推送到GitHub
    echo "📤 推送到GitHub..."
    git push origin main
    
    echo "✅ 部署成功！"
else
    echo "ℹ️ 没有需要提交的修改"
fi
