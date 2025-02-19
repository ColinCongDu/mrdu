# 使用Context通信 

Context是一个典型的生产者-消费者（Provider-Consumer）模式。当订阅了Context的消费者的组件，能从组件树中，离自己最近的生产者中获取值。Context的使用包含创建和使用两个部分。我们先介绍Context的API，然后再通过Demo说明如何使用Context。

Context的相关API包含下面几个：

- React.createContext(defaultValue)

  通过调用该API,就可以创建一个Context对象。defaultValue是传入的默认值， 当订阅了Context消费者的组件，没有从树中匹配到生产者时，defaultValue才会生效

  ```jsx
  const Context = React.createContext(defaultValue);
  ```

- Conext.displayName

  Context对象能够设置display属性，React DevTools 使用该字符串来确定 context 要显示的内容。

- Context.Provider

  Provider是Context对象上的生产者组件。使用Provider标签包裹的后代组件都能够访问到Provider组件传入的value。

  ```jsx
  <Context.Provider value={/* 需要传给后代的值 */}>
      <ChildComponent></ChildComponent>
  </Context.Provider>
  ```

1. Provider可以嵌套使用，但是同一个Context的Provider嵌套时，里层的值会覆盖外层的值。
2. Provider能够监听到value值的变化，当value值变化时，它内部的所有消费者组件都会重新渲染。 
3. 其实value传入的值也可以是对象，该对象可以包含一个回调函数，用来更新传入的值。

- Context.Consumer

  Consumer是一个消费者组件，此组件可以让你在函数式组件中可以订阅 context。但是这要求消费

  组件必须把一个函数作为子元素，这个函数接受Provider传入的值, 并返回一个React元素节点

  ```jsx
  function FunComponent() {
      return (
          <Context.Consumer>
              {value => {
                  return <div>{value}</div>;
              }}
          </Context.Consumer>
      );
  }
  ```

- Class.contextType

  contextType是自定义的类组件上的静态属性，可以被赋值为创建的Context对象，这样就可以在类组件内部通过`this.Context`来访问生产者传入的值。

  ```jsx
  class ClazzComponet extends React.Component {
      static contextType = Context;
  
      render() {
          const value = this.context;
          return <div>{value}</div>
      }
  }
  ```

  当然，也可以在类外部赋值。
  
  ```jsx
  ClazzComponet.contextType = Context;
  ```

接下来我们通过一个demo演示Context的使用。

1. 创建Context。

   ```jsx
   // Context.js
   import React from "react";
   
   const CounterContext = React.createContext({
       num: 0,
       handleChange: () => {},
   });
   
   CounterContext.displayName = "CounterContextName";
   
   export default CounterContext;
   ```

2. 在Account组件中添加一个Provider组件，将包含一个num变量及改变num变量的回调函数的对象，作为值传入其包裹的子组件及其后代。

   ```jsx
   import React from "react";
   import Counter from "./Counter";
   import CounterContext from "./Context";
   
   class Account extends React.Component {
       static contentType = CounterContext;
   
       constructor(props) {
           super(props);
   
           this.state = {
               num: 0,
           };
           this.handleChange = this.handleChange.bind(this);
       }
   
       handleChange(num) {
           this.setState({
               num,
           });
       }
   
       render() {
           const provider = {
               num: this.state.num,
               handleChange: this.handleChange,
           };
   
           return (
               <CounterContext.Provider value={provider}>
                   <Counter></Counter>
               </CounterContext.Provider>
           );
       }
   }
   
   export default Account;
   ```

3. 在Counter类组件中，订阅Provider传入的value值，并展示对象值的num变量。

   ```jsx
   import React from "react";
   import Add from "./Add";
   import CounterContext from "./Context";
   
   class Counter extends React.Component<any, any> {
       static contextType = CounterContext;
   
       constructor(props) {
           super(props);
       }
   
       render() {
           const { num } = this.context;
   
           return (
               <div>
                   <span>计算结果： {num}</span>
                   <Add num={num}></Add>
               </div>
           );
       }
   }
   
   export default Counter;
   ```

4. 在Add函数组件中，订阅Provider传入的value值，并通过传入的回调函数，更改值中的num变量。

   ```jsx
   import CounterContext from "./Context";
   
   function Add(props) {
       let num = props.num;
       return (
           <CounterContext.Consumer>
               {(context: any) => {
                   const { handleChange } = context;
   
                   return (
                       <button
                           onClick={() => {
                               handleChange(num + 1);
                           }}
                       >
                           点击 + 1
                       </button>
                   );
               }}
           </CounterContext.Consumer>
       );
   }
   
   export default Add;
   ```

