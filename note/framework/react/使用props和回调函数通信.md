# 使用 props 和回调函数通信

这件事并没有我们想象的那么复杂。简单的讲，父组件把变量或者函数作为参数传递给子组件，这些参数被包装在一个被称为`props`的对象中。 在子组件中，就可以接收这些变量和函数，当子组件在内部调用这些函数的时候，同时可以传入一些参数，就成功的向父组件传递了信息。这样你就完成了父子组件之间的通信，假如你把父组件当做一个数据的中转站，那么你就可以同时完成兄弟组件之间的通信了。

在下面的例子中，我们演示了这种通信方式。假设我们现在有两个组件，父组件`<Counter/>`和子组件`<Add/>`。

```jsx
// Counter.js
import { useState } from 'react';
import Add from './Add';

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

在`Counter`组件中，我们把变量`num`和函数`handleChange`作为`props`传递给`Add`组件。在`Add`组件中接收了这两个参数，并且在内部调用`handleChange`函数来修改`num`的值。
