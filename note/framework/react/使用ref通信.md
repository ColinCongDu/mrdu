# 使用 ref 通信

在某些场景下，我们可能需要使用命令式的方式访问子组件。例如我们包装一个包含表单业务的弹窗组件，并在组件中
维护组件的显示和隐藏状态，然后在组件外部访问该组件内部的方法，控制该组件的显示隐藏。

幸运的是，`React`的组件提供了`ref`属性，允许我们访问组件实例。要实现这个功能，我们需要经过下面几个步骤。
1. 使用`useRef`创建组件引用。
2. 使用`forwardRef`包装子组件，把引用转发给子组件。
3. 使用`useImperativeHandle`自定义暴露给父组件的方法。

下面是一个简单的示例，演示了如何使用`ref`来实现组件之间的通信。
```jsx
import { useRef, useImperativeHandle, forwardRef } from 'react';

const FancyInput = forwardRef((props, ref) => {
  const inputRef = useRef();

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    }
  }));

  return <input ref={inputRef} {...props} />;
});

const MyComponent = () => {
  const fancyRef = useRef();

  const focusFancyInput = () => {
    fancyRef.current.focus();
  };

  return (
    <>
      <FancyInput ref={fancyRef} />
      <button onClick={focusFancyInput}>Focus Fancy Input</button>
    </>
  );
};
```
在上面的示例中，我们在父组件`MyComponent`组件中创建了`inputRef`，并访问了`FancyInput`组件的`focus`方法。
在子组件`FancyInput`中，使用`forwardRef`包装了子组件，把`inputRef`转发到组件内部， 然后使
用`useImperativeHandle`自定义了暴露给父组件的方法。

要实现子组件聚焦的功能，我们可以简单把`forwardRef`转发进来的`ref`参数传递给`<Input/>`。例如：
```jsx
const FancyInput = forwardRef((props, ref) => {
  return <input ref={ref} {...props} />;
});
```
但是我们在实际的业务过程中, 我们不可能总是仅仅访问子组件的`DOM`这么简单。


此外，我们在实际业务中，子组件可能对外暴露任何内部数据，因此对`useImperativeHandle`做个简单的说明：
它接收3个参数来控制暴露给父组件的方法。
```jsx
useImperativeHandle(ref, createHandle, [deps])
```
- `ref`
  通过`forwardRef`转发进来的父组件中传递的`ref`。
- `createHandle`
  该函数的返回值是你想暴露的任何类型的数据，通常我们会返回一个对象，它会作为`ref.current`的值。
- [deps]
  `createHandle`的依赖数组，依赖发生变化会重新执行createHandle函数。




