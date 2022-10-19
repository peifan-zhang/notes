<template><div><!-- 小熊猫 -->
<!-- <img src="/img/panda-waving.png" class="panda no-zoom" style="width: 130px;height: 115px;opacity: 0.8;margin-bottom: -4px;padding-bottom:0;position: fixed;bottom: 0;left: 0.5rem;z-index: 1;"> -->
<h2 id="关于" tabindex="-1"><a class="header-anchor" href="#关于" aria-hidden="true">#</a> 关于</h2>
<h3 id="📚blog" tabindex="-1"><a class="header-anchor" href="#📚blog" aria-hidden="true">#</a> 📚Blog</h3>
<p>这是一个兼具博客文章、知识管理、文档查找的个人网站，主要内容是Web前端技术。如果你喜欢这个博客&amp;主题欢迎到<a href="https://github.com/xugaoyi/vuepress-theme-vdoing" target="_blank" rel="noopener noreferrer">GitHub<ExternalLinkIcon/></a>点个Star、获取源码，或者交换<RouterLink to="/friends/">友链</RouterLink> ( •̀ ω •́ )✧</p>
<h3 id="🎨theme" tabindex="-1"><a class="header-anchor" href="#🎨theme" aria-hidden="true">#</a> 🎨Theme</h3>
<p>本站主题是根据<a href="https://vuepress.vuejs.org/zh/" target="_blank" rel="noopener noreferrer">VuePress<ExternalLinkIcon/></a>的默认主题修改而成。取名<code v-pre>Vdoing</code>(维度)，旨在轻松打造一个<code v-pre>结构化</code>与<code v-pre>碎片化</code>并存的个人在线知识库&amp;博客，让你的知识海洋像一本本书一样清晰易读。配合多维索引，让每一个知识点都可以快速定位！ 更多<a href="https://github.com/xugaoyi/vuepress-theme-vdoing" target="_blank" rel="noopener noreferrer">详情<ExternalLinkIcon/></a>。</p>
<p><a href="https://github.com/xugaoyi/vuepress-theme-vdoing" target="_blank"><img src='https://img.shields.io/github/stars/xugaoyi/vuepress-theme-vdoing' alt='GitHub stars' class="no-zoom"></a>
<a href="https://github.com/xugaoyi/vuepress-theme-vdoing" target="_blank"><img src='https://img.shields.io/github/forks/xugaoyi/vuepress-theme-vdoing' alt='GitHub forks' class="no-zoom"></a></p>
<h2 id="特色功能" tabindex="-1"><a class="header-anchor" href="#特色功能" aria-hidden="true">#</a> 特色功能</h2>
<p>博客部分特色功能介绍</p>
<h4 id="一站式技术搜索" tabindex="-1"><a class="header-anchor" href="#一站式技术搜索" aria-hidden="true">#</a> 一站式技术搜索</h4>
<p>博客内容中包含部分技术教程，可以利用搜索框快速搜索到相关文档，即使博客中没有的，你还可以选择最下方的 <code v-pre>在XXX中搜索“xxx”</code> 快速到达你想要找的内容。</p>
<h4 id="深色模式与阅读模式" tabindex="-1"><a class="header-anchor" href="#深色模式与阅读模式" aria-hidden="true">#</a> 深色模式与阅读模式</h4>
<p>关爱程序员，保护视力，点击右下角的主题模式按钮试试吧~</p>
<h4 id="demo演示模块" tabindex="-1"><a class="header-anchor" href="#demo演示模块" aria-hidden="true">#</a> Demo演示模块</h4>
<p>为了更直观的展示一些代码的效果，博客添加了demo模块插件，可查看demo、源码，以及跳转到codepen在线编辑。<strong>示例</strong>：</p>
<p>::: demo [vanilla]</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>vanilla-box<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">var</span> box <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'vanilla-box'</span><span class="token punctuation">)</span>
  box<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token string">'Hello World! Welcome to EB'</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
<span class="token selector">#vanilla-box</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #11a8cd<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>
<h2 id="联系" tabindex="-1"><a class="header-anchor" href="#联系" aria-hidden="true">#</a> 📧 联系</h2>
<ul>
<li><strong>WeChat or QQ</strong>: <a href="tencent://message/?uin=894072666&Site=&Menu=yesUrl" class='qq'>894072666</a></li>
<li><strong>Email</strong>: <a href="mailto:894072666@qq.com">894072666@qq.com</a></li>
<li><strong>GitHub</strong>: <a href="https://github.com/xugaoyi" target="_blank" rel="noopener noreferrer">https://github.com/xugaoyi<ExternalLinkIcon/></a></li>
</ul>
</div></template>


