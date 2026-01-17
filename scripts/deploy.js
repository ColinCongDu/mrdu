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
    const forceBuild = process.argv.includes('-f') || process.argv.includes('--force');

    if (!fs.existsSync(distPath) || forceBuild) {
        if (forceBuild) {
            console.log('检测到 -f 参数，强制重新构建项目...');
        } else {
            console.error('错误: 构建目录不存在，需要构建项目');
        }
        runCommand('npm run docs:build', '构建项目');
    }

    console.log('进入构建目录...');
    process.chdir(distPath);
    console.log('当前工作目录', process.cwd());

    runCommand('git init', '初始化 git 仓库');
    
    console.log(`检查是否存在 ${deployBranch} 分支...`);
    const branches = childProcess.execSync('git branch -a', { encoding: 'utf-8', stdio: ['ignore', 'pipe', 'pipe'] }).trim();
    const branchExists = branches.includes(deployBranch);
    
    if (!branchExists) {
        runCommand(`git checkout -b ${deployBranch}`, `创建并切换到 ${deployBranch} 分支`);
    } else {
        runCommand(`git checkout ${deployBranch}`, `切换到 ${deployBranch} 分支`);
    }
    
    runCommand('git add .', '添加所有文件');
    runCommand('git commit -m "Deploy: 更新站点内容"', '提交更改');
    
    const remoteUrl = childProcess.execSync('git -C ../.. config --get remote.origin.url', { encoding: 'utf-8' }).trim();
    
    console.log('检查是否存在远程仓库...');
    const remotes = childProcess.execSync('git remote', { encoding: 'utf-8', stdio: ['ignore', 'pipe', 'pipe'] }).trim();
    const remoteExists = remotes.includes('origin');
    
    if (!remoteExists) {
        runCommand(`git remote add origin ${remoteUrl}`, '添加远程仓库');
    } else {
        runCommand(`git remote set-url origin ${remoteUrl}`, '更新远程仓库 URL');
    }
    
    runCommand(`git push -f origin HEAD:${deployBranch}`, `强制推送到 ${deployBranch} 分支`);

    console.log('返回项目根目录...');
    process.chdir(path.join(__dirname, '..'));

    console.log('\n✓ 部署成功！');
}

main();