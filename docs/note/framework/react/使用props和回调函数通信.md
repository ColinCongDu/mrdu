

# 使用props和回调函数通信

这件事并没有我们想象的那么复杂。简单的讲，父组件把变量或者函数作为参数传递给子组件，这些参数被包装在一个被称为`props`的对象中。 在子组件中，就可以访问这些变量和函数，这些函数可以在子组件内部被调用，同时传入一些参数。这样你就完成了父子组件之间的通信，假如你把父组件当做一个数据的中转站，那么你就可以同时完成兄弟组件之间的通信了。

在下面的例子中，我们演示了这种通信方式。

假设我们现在有两个组件，父组件`<Counter/>`和子组件`<Add/>`。在这里我们使用`props`把传递变量和函数传递给子组件。
```jsx
  // Counter.js
  import Add from "./Add";
  
  function Counter() {
      let num = 0;
  
      return (
          <div>
              <Add num={num}></Add>
          </div>
      );
  }
  
  //Add.js
  function Add(props) {
      return <span>传入数值：{props.num}</span>;
  }
  ```
- 子组件一般通过回调函数将参数传递给父组件。下面的示例在子组件`<Add/>`中添加计数按钮，按钮每次点击就将传入数值 `+1`，然后将值回传给父组件。为了让变量`num`改变后在父组件中及时将结果渲染出来，把父组件修改为Class组件， 将num放到state中，把`num`变成可响应的，

  ```jsx
  // Counter.js
  import { useState } from "react";
  import Add from "./Add";
  
  function Counter() {
      let [num, setNum] = useState(0);
      const handleChange = (temp) => {
          setNum(temp);
      };
  
      return (
          <div>
              <span>计算结果： {num}</span>
              <Add num={num} onChange={handleChange}></Add>
          </div>
      );
  }
  
  // Add.js
  function Add(props) {
      let num = props.num;
      const handleAdd = () => {
          props.onChange(num + 1);
      };
      return (
          <div>
              <button onClick={handleAdd}>点击 + 1</button>
          </div>
      );
  }
  ```
  

### 兄弟组件的通信

所谓兄弟组件，即处于同一个父组件中子组件。其实从上面父组件的通信，大家基本就能看出，如何进行兄弟组件间的通信：其最方便的方式便是经过父组件，由父组件进行中转，将参数传给其他子组件、调用子组件的方法。

在上面父子组件中的通信示例中，再添加另一个子组件`<Sub/>`，sub组件中添加按钮，每次点击按钮就将传入参数`-1`, 并将计算结果通过回调参数传回父组件。这样子组件`<Add/>`和`<Sub/>`，通过父组件`<Counter/>`实现了`num`变量的共享。

```jsx
// Sub.js
function Sub(props) {
    let num = props.num;

    const onClick = function () {
        num -= 1;
        props.onChange(num);
    };

    return <button onClick={onClick}>点击 - 1</button>;
}
```

### 跨级组件的通信

跨级组件通信指的是相隔多个级别的组件间的通信。它们和父子组件、兄弟组件间的通信不一致的是：组件间嵌套过深、甚至压根处于不同分支上的组件间的通信（页面上的组件通常被组织为一棵组件树），这样就不能简单的通过Props或者回调来通信了。

当组件处于同一个分支的时候，通常使用`Context`进行通信，当组件处于不同分支时，通常使用`Event Bus`通信。当然，Event Bus相对Context要灵活的很多。

