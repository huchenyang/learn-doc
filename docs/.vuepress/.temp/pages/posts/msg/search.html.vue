<template><div><h1 id="搜索" tabindex="-1"><a class="header-anchor" href="#搜索" aria-hidden="true">#</a> 搜索</h1>
<blockquote>
<p>多条件分页查询通知消息</p>
</blockquote>
<h2 id="请求地址" tabindex="-1"><a class="header-anchor" href="#请求地址" aria-hidden="true">#</a> 请求地址</h2>
<p>请求方式：fegin远程调用
请求地址：<code v-pre>org.springblade.notice.feign.searchNoticePage</code></p>
<h2 id="请求参数" tabindex="-1"><a class="header-anchor" href="#请求参数" aria-hidden="true">#</a> 请求参数</h2>
<table>
<thead>
<tr>
<th>名称</th>
<th>类型</th>
<th>是否  必填</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>current</td>
<td>Integer</td>
<td>是</td>
<td>当前页</td>
</tr>
<tr>
<td>size</td>
<td>Integer</td>
<td>是</td>
<td>每页的数量</td>
</tr>
<tr>
<td>ascs</td>
<td>String</td>
<td>否</td>
<td>升序字段（多个字段逗号间隔，建议传递一个字段，升序、降序不能同时传递）</td>
</tr>
<tr>
<td>descs</td>
<td>String</td>
<td>否</td>
<td>降序字段（多个字段逗号间隔，建议传递一个字段，升序、降序不能同时传递）</td>
</tr>
<tr>
<td>appSource</td>
<td>String</td>
<td>是</td>
<td>app数据来源 （见定义参数）</td>
</tr>
<tr>
<td>userId</td>
<td>String</td>
<td>是</td>
<td>公共平台-用户id</td>
</tr>
<tr>
<td>target</td>
<td>String</td>
<td>是</td>
<td>推送目的地址：如“xxxqq@.com” 、username等</td>
</tr>
<tr>
<td>actionType</td>
<td>String</td>
<td>是</td>
<td>消息业务类型（见定义参数）</td>
</tr>
<tr>
<td>msgBizTypeItems</td>
<td>String</td>
<td>是</td>
<td>多个自定义业务类型项 ，逗号间隔</td>
</tr>
</tbody>
</table>
<h2 id="返回结果" tabindex="-1"><a class="header-anchor" href="#返回结果" aria-hidden="true">#</a> 返回结果</h2>
<blockquote>
<p>返回格式：<code v-pre>R&lt;PageVo&lt;ThpNoticeVO&gt;&gt;</code></p>
</blockquote>
<table>
<thead>
<tr>
<th>名称</th>
<th>类型</th>
<th>示例值</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>code</td>
<td>Integer</td>
<td>200</td>
<td>状态码 ，200：操作成功，400：业务异常</td>
</tr>
<tr>
<td>success</td>
<td>Boolean</td>
<td>true</td>
<td>是否成功</td>
</tr>
<tr>
<td>msg</td>
<td>String</td>
<td></td>
<td>返回消息</td>
</tr>
<tr>
<td>data</td>
<td><code v-pre>PageVo&lt;ThpNoticeVO&gt;</code></td>
<td>true</td>
<td>承载数据</td>
</tr>
<tr>
<td>└── total</td>
<td>long</td>
<td>100</td>
<td>总记录数</td>
</tr>
<tr>
<td>└── size</td>
<td>long</td>
<td>10</td>
<td>每页显示条数，默认 10</td>
</tr>
<tr>
<td>└── current</td>
<td>long</td>
<td>1</td>
<td>当前页</td>
</tr>
<tr>
<td>└── pages</td>
<td>long</td>
<td>1</td>
<td>页数</td>
</tr>
<tr>
<td>└── records</td>
<td>ThpNoticeVO</td>
<td></td>
<td>查询数据列表</td>
</tr>
<tr>
<td>├──  target</td>
<td>String</td>
<td></td>
<td>推送目的地址： 如“xxxqq@.com” 、username等</td>
</tr>
<tr>
<td>├──  userId</td>
<td>String</td>
<td></td>
<td>公共平台的用户id</td>
</tr>
<tr>
<td>├──  noticeMode</td>
<td>String</td>
<td></td>
<td>通知方式名（见定义参数）</td>
</tr>
<tr>
<td>├──  subject</td>
<td>String</td>
<td></td>
<td>主题</td>
</tr>
<tr>
<td>├──  msgContext</td>
<td>String</td>
<td></td>
<td>内容</td>
</tr>
<tr>
<td>├── extendData</td>
<td>String</td>
<td></td>
<td>用户自定义数据 业务功能自由扩展使用</td>
</tr>
<tr>
<td>├── msgType</td>
<td>Integer</td>
<td></td>
<td>消息类型： 1消息通知，2系统通知</td>
</tr>
<tr>
<td>├──  appSource</td>
<td>String</td>
<td></td>
<td>app数据来源 （见定义参数）</td>
</tr>
<tr>
<td>├──  actionType</td>
<td>String</td>
<td></td>
<td>动作类型 ,定义（见定义参数）</td>
</tr>
<tr>
<td>├──  msgBizTypeItem        </td>
<td>String</td>
<td></td>
<td>自定义业务类型项 ， 业务系统按自有业务类型，建议传递code值</td>
</tr>
</tbody>
</table>
<h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2>
<h3 id="创建客户端" tabindex="-1"><a class="header-anchor" href="#创建客户端" aria-hidden="true">#</a> 创建客户端</h3>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Autowired</span>
<span class="token keyword">private</span> <span class="token class-name">INoticeClient</span> noticeClient<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="构造信息并搜索" tabindex="-1"><a class="header-anchor" href="#构造信息并搜索" aria-hidden="true">#</a> 构造信息并搜索</h3>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code> <span class="token comment">//构建搜索通知的请求</span>
<span class="token class-name">NoticeSearchRequest</span> request <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">NoticeSearchRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
request<span class="token punctuation">.</span><span class="token function">setCurrent</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
request<span class="token punctuation">.</span><span class="token function">setSize</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//----- 按APP来源的维度查询（目前为必传）</span>
request<span class="token punctuation">.</span><span class="token function">setTarget</span><span class="token punctuation">(</span><span class="token string">"903486356@qq.com"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//----- 可按用户的维度查询</span>
request<span class="token punctuation">.</span><span class="token function">setUserId</span><span class="token punctuation">(</span><span class="token string">"111111111111111"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//----- 可按目标地址的维度查询</span>
request<span class="token punctuation">.</span><span class="token function">setTarget</span><span class="token punctuation">(</span><span class="token string">"903486356@qq.com"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//----- 可按动作类型的维度查询</span>
<span class="token comment">//动作类型：待办：ACTION_TYPE_TODO、通知：ACTION_TYPE_NOTICE、提醒：ACTION_TYPE_REMIND、告警：ACTION_TYPE_WARN</span>
request<span class="token punctuation">.</span><span class="token function">setActionType</span><span class="token punctuation">(</span><span class="token class-name">NoticeConstant</span><span class="token punctuation">.</span>ACTION_TYPE_TODO<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//----- 可按自定义业务类型的维度查询</span>
request<span class="token punctuation">.</span><span class="token function">setMsgBizTypeItems</span><span class="token punctuation">(</span><span class="token string">"断电提醒,数据异常"</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//自定义业务类型，建议传递code值</span>

<span class="token class-name">R</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">PageVo</span><span class="token punctuation">&lt;</span><span class="token class-name">ThpNoticeVO</span><span class="token punctuation">></span><span class="token punctuation">></span></span> result <span class="token operator">=</span> noticeClient<span class="token punctuation">.</span><span class="token function">searchNoticePage</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>result<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
