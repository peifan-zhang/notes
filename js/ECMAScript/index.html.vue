<template><div><h2 id="es7新特性" tabindex="-1"><a class="header-anchor" href="#es7新特性" aria-hidden="true">#</a> ES7新特性</h2>
<table>
<thead>
<tr>
<th>新特性</th>
<th>中文说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>Array.prototype.includes</td>
<td>用于快速查找数组中是否包含某个元素(包含NAN)</td>
</tr>
<tr>
<td>Exponentiation operator</td>
<td>指数函数的中缀表示法</td>
</tr>
</tbody>
</table>
<h3 id="includes" tabindex="-1"><a class="header-anchor" href="#includes" aria-hidden="true">#</a> includes</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
    <span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token constant">NAN</span><span class="token punctuation">]</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">//true</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">//false ,从下标2开始查找1</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">备注</p>
<p>使用 includes() 比较字符串和字符时是区分大小写的。</p>
</div>
<h3 id="求幂" tabindex="-1"><a class="header-anchor" href="#求幂" aria-hidden="true">#</a> 求幂</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">3</span> <span class="token operator">**</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// expected output: 81</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">10</span> <span class="token operator">**</span> <span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// expected output: 0.01</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">**</span> <span class="token number">3</span> <span class="token operator">**</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// expected output: 512</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">**</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token operator">**</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="es8新特性" tabindex="-1"><a class="header-anchor" href="#es8新特性" aria-hidden="true">#</a> ES8新特性</h2>
<table>
<thead>
<tr>
<th>新特性</th>
<th>中文说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>Object.values / Object.entries</td>
<td></td>
</tr>
<tr>
<td>String padding</td>
<td>字符串追加</td>
</tr>
<tr>
<td>Object.getOwnPropertyDescriptors</td>
<td></td>
</tr>
<tr>
<td>Trailing commas in function parameter lists and calls</td>
<td>结尾允许逗号</td>
</tr>
<tr>
<td>Async functions</td>
<td>异步函数</td>
</tr>
<tr>
<td>Shared memory and atomics</td>
<td>共享内存和 Atomics 对象</td>
</tr>
</tbody>
</table>
<h3 id="object-values" tabindex="-1"><a class="header-anchor" href="#object-values" aria-hidden="true">#</a> Object.values()</h3>
<p><code v-pre>Object.values()</code>返回一个数组，其元素是在对象上找到的可枚举属性值。属性的顺序与通过手动循环对象的属性值所给出的顺序相同（区别在于 for-in 循环枚举原型链中的属性）</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token string">'xxx'</span><span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
Object<span class="token punctuation">.</span><span class="token function">values</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// ['xxx', 1]</span>

<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'e'</span><span class="token punctuation">,</span> <span class="token string">'s'</span><span class="token punctuation">,</span> <span class="token string">'8'</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 等同于 { 0: 'e', 1: 's', 2: '8' };</span>
Object<span class="token punctuation">.</span><span class="token function">values</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// ['e', 's', '8']</span>

<span class="token comment">//当把数字当做对象的键的时候，返回的数组以键的值升序排序</span>
<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token number">10</span><span class="token operator">:</span> <span class="token string">'xxx'</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token operator">:</span> <span class="token string">'yyy'</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token operator">:</span> <span class="token string">'zzz'</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
Object<span class="token punctuation">.</span><span class="token function">values</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// ['yyy', 'zzz', 'xxx']</span>
Object<span class="token punctuation">.</span><span class="token function">values</span><span class="token punctuation">(</span><span class="token string">'es8'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// ['e', 's', '8']</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="object-entries" tabindex="-1"><a class="header-anchor" href="#object-entries" aria-hidden="true">#</a> Object.entries</h3>
<p><code v-pre>Object.entries()</code>返回一个数组，其元素是与直接在object上找到的可枚举属性键值对相对应的数组。属性的顺序与通过手动循环对象的属性值所给出的顺序相同。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token string">'xxx'</span><span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
Object<span class="token punctuation">.</span><span class="token function">entries</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [['x', 'xxx'], ['y', 1]]</span>

<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'e'</span><span class="token punctuation">,</span> <span class="token string">'s'</span><span class="token punctuation">,</span> <span class="token string">'8'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
Object<span class="token punctuation">.</span><span class="token function">entries</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [['0', 'e'], ['1', 's'], ['2', '8']]</span>

<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token number">10</span><span class="token operator">:</span> <span class="token string">'xxx'</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token operator">:</span> <span class="token string">'yyy'</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token operator">:</span> <span class="token string">'zzz'</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
Object<span class="token punctuation">.</span><span class="token function">entries</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [['1', 'yyy'], ['3', 'zzz'], ['10', 'xxx']]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


