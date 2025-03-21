# 常用的hook

## `useEffect`

`useEffect`用于在函数组件中处理副作用。

> 在 React 中，副作用（Side Effects） 指的是组件渲染时产生的与 UI 直接无关的操作，比如
> - 网络请求（获取数据）
> - 手动操作 DOM
> - 订阅和取消订阅事件
> - 定时器（setTimeout、setInterval）
> - 日志记录
> - 存储数据到 localStorage 或 sessionStorage
> - 清理资源（如 WebSocket 连接、监听器等）
>
> 这些操作之所以称为副作用，是因为它们并不会直接影响组件的 UI 渲染逻辑，而是发生在渲染后，影响外部系统或状态。


## `useCallback`

## `useMemo`

## `useRef`