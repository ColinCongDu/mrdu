import{_ as n,o as s,c as a,a as e}from"./app-cae166ec.js";const t={},p=e(`<h3 id="css实现闪烁效果" tabindex="-1"><a class="header-anchor" href="#css实现闪烁效果" aria-hidden="true">#</a> css实现闪烁效果</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.fa-star</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> yellow<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 24px<span class="token punctuation">;</span>
  <span class="token property">animation</span><span class="token punctuation">:</span> blink 1s infinite<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token atrule"><span class="token rule">@keyframes</span> blink</span> <span class="token punctuation">{</span>
  <span class="token selector">0%</span> <span class="token punctuation">{</span>
    <span class="token property">opacity</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">50%</span> <span class="token punctuation">{</span>
    <span class="token property">opacity</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">100%</span> <span class="token punctuation">{</span>
    <span class="token property">opacity</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的 CSS 代码将会让 .fa-star 的元素闪烁。animation: blink 1s infinite; 意味着我们正在应用名为 blink 的动画，以每秒一次的速度无限循环。</p><p>@keyframes blink 定义了闪烁的过程，具体地，它将使元素从完全透明到不透明再到回到完全透明。这个过程在整个动画时间内均匀分布。</p><p>您可以根据需要调整 animation 的持续时间、动画名称和属性，以达到您想要的效果。</p>`,5),i=[p];function c(l,o){return s(),a("div",null,i)}const r=n(t,[["render",c],["__file","css实现各种特效.html.vue"]]);export{r as default};
