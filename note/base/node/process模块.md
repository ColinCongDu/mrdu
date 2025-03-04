# process模块

process 是一个全局对象，提供了与当前 Node.js 进程交互的多种方法和属性。通过 process 对象，开发者可以获取进程信息、控制进程行为，以及处理与操作系统的交互。

## `process.cwd()` 

用于获取进程的**当前工作目录**（Current Working Directory, CWD）。返回当前工作目录的绝对路径（字符串），即**启动 Node.js 进程的目录**。

### 与`__dirname` 的区别

|对比项       |process.cwd()   	    |__dirname                  |
|------------|---------------------|---------------------------|
|作用	        |返回当前工作目录      |返回当前文件所在目录         |
|受影响的情况 |受 process.chdir()影响|不受影响，始终是文件所在目录 |

假设项目目录如下：
```swift
/home/user/my_project/
  ├── app.js
  ├── utils/
  │   ├── helper.js
```

如果 helper.js 代码如下：
```javascript
console.log('process.cwd():', process.cwd());
console.log('__dirname:', __dirname);
```

在 my_project 目录下执行：
```sh
node utils/helper.js
```

可能的输出：
process.cwd(): /home/user/my_project
__dirname: /home/user/my_project/utils

可以看出：
- `process.cwd()` 返回的是启动 Node.js 进程的目录。
- `__dirname` 返回的是当前文件所在目录（helper.js 所在的 utils/ 目录）。


## `process.abort()`

用于立即终止当前进程并生成一个核心转储文件（core dump）。核心转储文件包含了进程在终止时的内存快照，对于调试和诊断问题非常有用。

```javascript
console.log('进程即将终止并生成核心转储文件。');
process.abort();
console.log('这行代码不会被执行。');
```

需要注意的是：
- 不可在 Worker 线程中使用： `process.abort()` 方法在 Worker 线程中不可用。 
- 与 process.exit() 的区别： `process.exit()`方法用于终止当前进程，并可以指定退出码，但不会生成核心转储文件。相比之下，`process.abort()` 会生成核心转储文件，提供更详细的调试信息。

### 使用场景
`process.abort()` 主要用于以下情况：

1. 检测到不可恢复的错误。

例如，Node.js 的关键组件（如数据库连接、配置加载等）出现严重错误，继续运行会导致不可预测的行为。

```javascript
const fs = require('fs');

try {
    const config = JSON.parse(fs.readFileSync('./config.json', 'utf8'));
    if (!config.databaseUrl) {
        console.error('配置文件损坏：缺少 databaseUrl！');
        process.abort(); // 立即终止并生成 core dump
    }
} catch (error) {
    console.error('无法加载配置文件:', error);
    process.abort(); // 终止进程
}

console.log('这行代码不会被执行');
```

2. 调试 & 生成核心转储

在本地、测试或生产环境中调试严重错误，有时需要人为制造崩溃，可以通过`process.abort()`生成 core dump 进行分析。

3. 进程进入异常状态

例如，检测到内存泄漏、资源耗尽等无法继续安全运行的情况。示例：在未捕获的异常中使用`process.abort()`。

```javascript
process.on('uncaughtException', (err) => {
    console.error('发生未捕获异常:', err);
    process.abort(); // 生成 core dump 以便后续分析
});

throw new Error('致命错误！');
```



# `process.cwd()`