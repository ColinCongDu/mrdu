import{_ as n,o as e,c as i,a as s}from"./app-cae166ec.js";const d="/mrdu/assets/scripts.png",l={},a=s(`<h1 id="源码解析" tabindex="-1"><a class="header-anchor" href="#源码解析" aria-hidden="true">#</a> 源码解析</h1><h2 id="源码目录" tabindex="-1"><a class="header-anchor" href="#源码目录" aria-hidden="true">#</a> 源码目录</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>├── dist
├── flow
├── scripts
├── src
|  ├── compiler
|  |  ├── codegen
|  |  ├── directives
|  |  └── parser
|  ├── core
|  |  ├── components
|  |  ├── global-api
|  |  ├── instance
|  |  ├── observer
|  |  ├── util
|  |  └── vdom
|  ├── platforms
|  |  ├── web
|  |  └── weex
|  ├── server
|  |  ├── bundle-renderer
|  |  ├── optimizing-compiler
|  |  ├── template-renderer
|  |  └── webpack-plugin
|  ├── sfc
|  └── shared
└── test
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="入口在哪里" tabindex="-1"><a class="header-anchor" href="#入口在哪里" aria-hidden="true">#</a> 入口在哪里</h2><p>自前端工程化以来，随着npm和yarn这样的包管理工具的应用，一切都变得可配置起来。而packag.json作为npm主要配置文件，其中有关于当前工程的一切配置信息。当然，我们阅读源码的时候其实更关注的是其中的&quot;scripts&quot;字段下配置的命令。</p><p><img src="`+d+`" alt="image-20210324230229266"></p><div align="center">图1 Vue源码中配置的部分命令</div><p>我们先看的“dev”命令。Vue源码并不是像我们的普通项目一样直接跑起来，而是运行了一个rollup工具，对源码进行打包, rollup后面跟的短字符都是它的命令行选项。事实上当我们运行<code>npm run dev</code>的时候，后边的内容是交给node执行的。</p><p><code>-w </code> 表示对源文件进行监听，当文件改变时重新打包；</p><p><code>-c</code> 表示rollup使用配置文件，其配置文件的路径是scripts/config.js。</p><p><code>--environment</code>是对环境变量的配置。在开发中，我们一般需要针对生产环境和开发环境使用不同的配置文件，如：prod.config.js、dev.config.js，但是开发环境和生产环境一般只有很少的一部分配置不同，因此无谓配置两个文件。这时候就可以直接通过<code>--environment</code>选项来配置一些环境变量，其后面更的是键值对，使用‘：’分隔。比如上面的配置是<code>--environment TARGET:web-full-dev</code>，此时访问<code>p<wbr>rocess.env.TARGET</code>的值就会是web-full-dev。</p><p>最后的<code>--sourcemap</code>表示生成sourcemap文件。</p><p>跟随配置文件的路径scripts/config.js，我们发现其核心代码是一个genConfig()方法，它生成了rollup打包所需的config配置对象。唯一特别的是，根据上面脚本命令配置的环境变量的不同，会生成不同的打包配置。当然，我们现在主要看的是“dev”命令的配置。当然，这个函数最终返回的对象需要结合代码的执行上下文查看，值得注意的是，在“dev”命令中，配置的入口路径指向：<code>src/platforms/web/entry-runtime-with-compiler.js</code>, 所以我们的源码就从这里开始看。</p><p>代码1： config.js文件中的genConfig方法。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function genConfig (name) {
  const opts = builds[name]
  const config = {
    input: opts.entry,
    external: opts.external,
    plugins: [
      flow(),
      alias(Object.assign({}, aliases, opts.alias))
    ].concat(opts.plugins || []),
    output: {
      file: opts.dest,
      format: opts.format,
      banner: opts.banner,
      name: opts.moduleName || &#39;Vue&#39;
    },
    onwarn: (msg, warn) =&gt; {
      if (!/Circular/.test(msg)) {
        warn(msg)
      }
    }
  }

  // built-in vars
  const vars = {
    __WEEX__: !!opts.weex,
    __WEEX_VERSION__: weexVersion,
    __VERSION__: version
  }
  // feature flags
  Object.keys(featureFlags).forEach(key =&gt; {
    vars[\`p<wbr>rocess.env.\${key}\`] = featureFlags[key]
  })
  // build-specific env
  if (opts.env) {
    vars[&#39;p<wbr>rocess.env.NODE_ENV&#39;] = JSON.stringify(opts.env)
  }
  config.plugins.push(replace(vars))

  if (opts.transpile !== false) {
    config.plugins.push(buble())
  }

  Object.defineProperty(config, &#39;_name&#39;, {
    enumerable: false,
    value: name
  })

  return config
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="我们该如何调试源码" tabindex="-1"><a class="header-anchor" href="#我们该如何调试源码" aria-hidden="true">#</a> 我们该如何调试源码</h2><p>https://saikikoko.github.io/2020/08/07/%E6%89%8B%E6%8A%8A%E6%89%8B%E6%95%99%E4%BD%A0%E5%A6%82%E4%BD%95%E8%B0%83%E8%AF%95Vue%E6%BA%90%E7%A0%81/</p><h2 id="vue到底是什么东西" tabindex="-1"><a class="header-anchor" href="#vue到底是什么东西" aria-hidden="true">#</a> Vue到底是什么东西</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Vue.prototype = {
    $mount: function() { ... },
   
    _init: function() { ... },
    
    $data: {},
    $props: {},
    $set: function() { ... },
    $delete: function() { ... },
    $watch: function() { ... }，
    
    $on: function() { ... },
    $once: function() { ... },
    $off: function() { ... },
    $emit: function() { ... },
    
    _update: function() { ... },
    $forceUpdate: function() { ... },,
    $destory: function() { ... },
    
    $nextTick: function() { ... },
    _render: function() { ... },
    
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,19),v=[a];function r(c,u){return e(),i("div",null,v)}const m=n(l,[["render",r],["__file","源码解析.html.vue"]]);export{m as default};
