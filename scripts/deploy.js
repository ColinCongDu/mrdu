const childProcess = require('child_process');
const fs = require('fs');
const path = require('path');

function runCommand(command, description) {
    try {
        console.log(`${description}...`);
        childProcess.execSync(command, { stdio: 'inherit' });
        console.log(`✓ ${description} 完成`);
    } catch (error) {
        console.error(`✗ ${description} 失败:`, error.message);
        process.exit(1);
    }

}

function main() {
    console.log('开始部署到 deploy 分支...\n');

    const distPath = path.join(__dirname, '../.vitepress', 'dist');
    const deployBranch = 'deploy';

    if (!fs.existsSync(distPath)) {
        console.error('错误: 构建目录不存在，需要构建项目');
        runCommand('npm run docs:build', '构建项目');
    }

    console.log('进入构建目录...');
    process.chdir(distPath);

    runCommand('git init', '初始化 git 仓库');
    runCommand('git add .', '添加所有文件');
    runCommand('git commit -m "Deploy: 更新站点内容"', '提交更改');

    const remoteUrl = fs.execSync('git -C ../.. config --get remote.origin.url', { encoding: 'utf-8' }).trim();
    runCommand(`git remote add origin ${remoteUrl}`, '添加远程仓库');
    runCommand(`git push -f origin HEAD:${deployBranch}`, `强制推送到 ${deployBranch} 分支`);

    console.log('返回项目根目录...');
    process.chdir(path.join(__dirname, '..'));

    console.log('\n✓ 部署成功！');
}

main();