import{_ as n,o as s,c as a,a as e}from"./app-cae166ec.js";const p={},t=e(`<h1 id="实例是如何挂载的" tabindex="-1"><a class="header-anchor" href="#实例是如何挂载的" aria-hidden="true">#</a> 实例是如何挂载的</h1><p>Vue有两种实例化方式。但归根结底，它们都是需要创建一个Vue实例。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 方式一：直接实例化</span>
<span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&#39;#app&#39;</span><span class="token punctuation">,</span>
  store<span class="token punctuation">,</span>
  router<span class="token punctuation">,</span>
  <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">&#39;&lt;App/&gt;&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span> App <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// 方式二: 先创建，后挂载</span>
<span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    data<span class="token punctuation">,</span>
    <span class="token operator">...</span><span class="token punctuation">.</span>
    store<span class="token punctuation">,</span>
    router<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">$mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在vue实例化过程中，有下面几个步骤。</p><ol><li><p>调用_init(options)实例化Vue组件。这里的options参数实际上就是官网中描述的data、props、生命周期函数等。</p></li><li><p>合并options。主要是把Vue组件内置的options、创建Vue实例的options、以及组件内部extend、mixin的options三者之间的optinos合并。</p><ul><li><p>检查子对象options的components中包含的子组件的名称</p><ol><li>组件的命名规范要遵循html5命名规范。</li><li>组件名称不能和内置vue内置标签<code>slot</code>和<code>component</code>相同，同时不能是html和svg。</li></ol></li><li><p>规范化子对象options.props。</p><ol><li><p>将props传入参数名称转化为驼峰写法。</p></li><li><p>将非对象描述的props参数转化为对象描述。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 对象格式的props
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><p><em>/ props: { param-name: Object; } // 会被转化成 =&gt; props: { paramName: { type: Object } } /</em></p><ul><li>数组格式的props */ props: [&#39;param-Name1&#39;, &#39;paramName2&#39;]</li></ul><p>// 会被转化成 =&gt;</p><p>props: { paramName1: { type: null, }, paramName2: { type: null } }</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>规范化子对象options.inject。</p><ol><li><p>对以数组或对象传入的inject对象进行格式化。都会被转化为对象描述。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">[</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">]</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> <span class="token literal-property property">from</span><span class="token operator">:</span> <span class="token string">&#39;foo&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token punctuation">{</span> <span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token punctuation">{</span>
     <span class="token literal-property property">from</span><span class="token operator">:</span> <span class="token string">&#39;bar&#39;</span><span class="token punctuation">,</span>
     <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&#39;foo&#39;</span>
  <span class="token punctuation">}</span> 
<span class="token punctuation">}</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> <span class="token literal-property property">from</span><span class="token operator">:</span> <span class="token string">&#39;bar&#39;</span><span class="token punctuation">,</span> <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&#39;foo&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token punctuation">{</span>
  <span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token string">&#39;bar&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> <span class="token literal-property property">from</span><span class="token operator">:</span> <span class="token string">&#39;bar&#39;</span> <span class="token punctuation">}</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol></li><li><p>规范化子对象options.directives</p><ol><li><p>将指令也转化为对象描述。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> {
    focus: function (el) {
                el.focus()
           }
    }
} =&gt; {
    focus {
        bind: function(el) { ... },
        update: function(el) { ... }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol></li><li><p>合并父options和子options。分别遍历父对象和子对象，然后组成一个新的options返回。</p></li></ul></li><li><p>初始化代理。</p></li><li><p>初始化生命周期。</p></li><li><p>初始化事件。</p></li><li><p>初始化渲染。</p></li><li><p>初始化inject</p></li></ol><blockquote><p>这里比较有意思的是在<code>validateComponentName()</code>函数中校验组件名称的时候，<code>config</code>对象实际上是在<code>web/runtime/index.js</code>中被重写了的。</p></blockquote>`,6),o=[t];function i(l,c){return s(),a("div",null,o)}const u=n(p,[["render",i],["__file","实例是如何挂载的.html.vue"]]);export{u as default};
