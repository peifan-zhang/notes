<template><div><h2 id="📚blog" tabindex="-1"><a class="header-anchor" href="#📚blog" aria-hidden="true">#</a> 📚Blog</h2>
<p>这是一个兼具博客文章、知识管理、文档查找的个人网站，主要内容是Web前端技术。 ( •̀ ω •́ )✧</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>文章内容仅是我个人的小总结，资历尚浅，如有误还请指正。</p>
</div>
<!-- 小熊猫 -->
<img src="/img/panda-waving.png" class="panda no-zoom" style="width: 130px;height: 115px;opacity: 0.8;margin-bottom: -4px;padding-bottom:0;position: fixed;bottom: 0;left: 0.5rem;z-index: 1;">
<h2 id="🐼me" tabindex="-1"><a class="header-anchor" href="#🐼me" aria-hidden="true">#</a> 🐼Me</h2>
<p>web前端小学生 <Badge type="warning" text="菜鸡" vertical="middle"/>
🎉</p>
<h3 id="技能" tabindex="-1"><a class="header-anchor" href="#技能" aria-hidden="true">#</a> 技能</h3>
<ul>
<li>熟悉 JavaScript、HTML、CSS、Vue 的拼写</li>
<li>了解 Linux、windows、macOS 的开关机方式</li>
<li>精通 Git 的 pull 和 push，并注册了 GitHub 帐号</li>
<li>熟练使用以下代码</li>
</ul>
<details class="custom-container details"><summary>点击查看代码</summary>
<CodeGroup>
  <CodeGroupItem title="YARN">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code><span class="token function">yarn</span>
</code></pre></div>  </CodeGroupItem>
  <CodeGroupItem title="NPM" active>
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span>
</code></pre></div>  </CodeGroupItem>
</CodeGroup>
</details>
<!-- 本人↓↓↓

<img src='https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200103123203.jpg' alt='本人照片' style="width:106px;"> -->
<h2 id="联系" tabindex="-1"><a class="header-anchor" href="#联系" aria-hidden="true">#</a> 📧 联系</h2>
<ul>
<li>WeChat or QQ: <a :href="qqUrl" class='qq'>{{ QQ }}</a></li>
<li>Email:  <a href="mailto:1915756154@qq.com">1915756154@qq.com</a></li>
<li>GitHub: <a href="https://github.com/zhangpeifan" target="_blank" rel="noopener noreferrer">https://github.com/zhangpeifan<ExternalLinkIcon/></a></li>
</ul>
</div></template>


<script setup>
  import {ref,onMounted} from 'vue'
  const QQ = ref('15650053242')
  let qqUrl  = ref(`tencent://message/?uin=${QQ.value}&Site=&Menu=yes`)
  onMounted(()=>{
    console.log(QQ)
     const flag =  navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);
     if(flag){
      qqUrl = `mqqwpa://im/chat?chat_type=wpa&uin=${QQ.value}&version=1&src_type=web&web_src=oicqzone.com`
     }
  })
</script>