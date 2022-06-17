<template><div><h1 id="直接发送" tabindex="-1"><a class="header-anchor" href="#直接发送" aria-hidden="true">#</a> 直接发送</h1>
<blockquote>
<p>浏览器、邮箱、钉钉、短信等</p>
</blockquote>
<p>目的地收信格式：</p>
<blockquote>
<p>浏览器：公共平台-用户名，如：manager
邮箱方式：邮箱地址，如：903433333@qq.com
钉钉方式：手机号，如：18310111111
短信：手机号，如：18310111111
微信：目前暂定手机号（未实现）</p>
</blockquote>
<h2 id="请求地址" tabindex="-1"><a class="header-anchor" href="#请求地址" aria-hidden="true">#</a> 请求地址</h2>
<p>请求方式：fegin远程调用
请求方法：<code v-pre>org.springblade.notice.feign.pushByTargets</code></p>
<h2 id="请求参数" tabindex="-1"><a class="header-anchor" href="#请求参数" aria-hidden="true">#</a> 请求参数</h2>
<table>
<thead>
<tr>
<th>名称</th>
<th>类型</th>
<th>是否必填</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>targetList</td>
<td><code v-pre>List&lt;String&gt;</code></td>
<td>否</td>
<td>目的地地址集合</td>
</tr>
<tr>
<td>noticeModes</td>
<td>String</td>
<td>否</td>
<td>推送方式,多个逗号间隔（见定义参数）同上</td>
</tr>
<tr>
<td>sendMessage</td>
<td>AbstractSendMessage</td>
<td>是</td>
<td>消息体对象    <code v-pre>&lt;DefaultSendMessage默认、SmsSendMessage短信&gt; </code></td>
</tr>
<tr>
<td>└── subject</td>
<td>String</td>
<td>是</td>
<td>主题</td>
</tr>
<tr>
<td>└── msgContext</td>
<td>String</td>
<td>是</td>
<td>内容</td>
</tr>
<tr>
<td>└── extendData</td>
<td>String</td>
<td>是</td>
<td>用户自定义数据，业务功能自由扩展使用</td>
</tr>
<tr>
<td>└── msgType</td>
<td>Integer</td>
<td>是</td>
<td>消息类型：1消息通知，2系统通知（见说明）同上</td>
</tr>
<tr>
<td>└── appSource</td>
<td>String</td>
<td>是</td>
<td>app数据来源 （见定义参数）同上</td>
</tr>
<tr>
<td>└── actionType</td>
<td>String</td>
<td>是</td>
<td>动作类型 , 定义（见定义参数）同上</td>
</tr>
<tr>
<td>└── msgBizTypeItem        </td>
<td>String</td>
<td>是</td>
<td>自定义业务类型项， 建议传递code值</td>
</tr>
</tbody>
</table>
<h2 id="返回结果" tabindex="-1"><a class="header-anchor" href="#返回结果" aria-hidden="true">#</a> 返回结果</h2>
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
<td>data</td>
<td>Boolean</td>
<td>true</td>
<td>承载数据</td>
</tr>
<tr>
<td>msg</td>
<td>String</td>
<td></td>
<td>返回消息</td>
</tr>
</tbody>
</table>
<h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2>
<h3 id="创建客户端" tabindex="-1"><a class="header-anchor" href="#创建客户端" aria-hidden="true">#</a> 创建客户端</h3>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Autowired</span>
<span class="token keyword">private</span> <span class="token class-name">INoticeClient</span> noticeClient<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="发送" tabindex="-1"><a class="header-anchor" href="#发送" aria-hidden="true">#</a> 发送</h3>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">//----------- 构建手机消息体</span>
<span class="token class-name">SmsSendMessage</span> sendPhoneMessage <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SmsSendMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
sendPhoneMessage<span class="token punctuation">.</span><span class="token function">setCode</span><span class="token punctuation">(</span><span class="token string">"code1111"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">></span></span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"nihao"</span><span class="token punctuation">,</span> <span class="token string">"ok"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
sendPhoneMessage<span class="token punctuation">.</span><span class="token function">setParams</span><span class="token punctuation">(</span>map<span class="token punctuation">)</span><span class="token punctuation">;</span>
sendPhoneMessage<span class="token punctuation">.</span><span class="token function">setSubject</span><span class="token punctuation">(</span><span class="token string">"断电提示"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
sendPhoneMessage<span class="token punctuation">.</span><span class="token function">setMsgContext</span><span class="token punctuation">(</span><span class="token string">"【xxx有限公司】尊敬的xxx客户（户号2011xxx）：截止2021-01-15，您共欠费2.34元，即将停电。（如已缴费请忽略）"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
sendPhoneMessage<span class="token punctuation">.</span><span class="token function">setExtendData</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
sendPhoneMessage<span class="token punctuation">.</span><span class="token function">setAppSource</span><span class="token punctuation">(</span><span class="token class-name">NoticeConstant</span><span class="token punctuation">.</span>APP_SOURCE_LOCAL<span class="token punctuation">)</span><span class="token punctuation">;</span>
sendPhoneMessage<span class="token punctuation">.</span><span class="token function">setActionType</span><span class="token punctuation">(</span><span class="token class-name">NoticeConstant</span><span class="token punctuation">.</span>ACTION_TYPE_TODO<span class="token punctuation">)</span><span class="token punctuation">;</span>
sendPhoneMessage<span class="token punctuation">.</span><span class="token function">setMsgBizTypeItem</span><span class="token punctuation">(</span><span class="token string">"断电提示"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//----------- 构建默认消息格式：浏览器、钉钉、邮箱</span>
<span class="token class-name">DefaultSendMessage</span> defaultSendMessage <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DefaultSendMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
defaultSendMessage<span class="token punctuation">.</span><span class="token function">setSubject</span><span class="token punctuation">(</span><span class="token string">"断电提示"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
defaultSendMessage<span class="token punctuation">.</span><span class="token function">setMsgContext</span><span class="token punctuation">(</span><span class="token string">"【xxx有限公司】尊敬的xxx客户（户号2011xxx）：截止2021-01-15，您共欠费2.34元，即将停电。（如已缴费请忽略）"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
defaultSendMessage<span class="token punctuation">.</span><span class="token function">setExtendData</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
defaultSendMessage<span class="token punctuation">.</span><span class="token function">setAppSource</span><span class="token punctuation">(</span><span class="token class-name">NoticeConstant</span><span class="token punctuation">.</span>APP_SOURCE_LOCAL<span class="token punctuation">)</span><span class="token punctuation">;</span>
defaultSendMessage<span class="token punctuation">.</span><span class="token function">setActionType</span><span class="token punctuation">(</span><span class="token class-name">NoticeConstant</span><span class="token punctuation">.</span>ACTION_TYPE_TODO<span class="token punctuation">)</span><span class="token punctuation">;</span>
defaultSendMessage<span class="token punctuation">.</span><span class="token function">setMsgBizTypeItem</span><span class="token punctuation">(</span><span class="token string">"断电提示"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token doc-comment comment">/** ############## 直接推送 ################## **/</span>
<span class="token comment">//----------- 构建直接推送 - 邮箱 - 测试直接推送</span>
<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> targetIds <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
targetIds<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">"903486356@qq.com"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
targetIds<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">"huchenyang@126.com"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">NoticeSendTargetsRequest</span> targetsRequest1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">NoticeSendTargetsRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
targetsRequest1<span class="token punctuation">.</span><span class="token function">setTargetList</span><span class="token punctuation">(</span>targetIds<span class="token punctuation">)</span><span class="token punctuation">;</span>
targetsRequest1<span class="token punctuation">.</span><span class="token function">setSendMessage</span><span class="token punctuation">(</span>defaultSendMessage<span class="token punctuation">)</span><span class="token punctuation">;</span>
targetsRequest1<span class="token punctuation">.</span><span class="token function">setNoticeMode</span><span class="token punctuation">(</span><span class="token class-name">NoticeTypeEnum</span><span class="token punctuation">.</span>MAIL<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
noticeClient<span class="token punctuation">.</span><span class="token function">pushByTargets</span><span class="token punctuation">(</span>targetsRequest1<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//直接推送</span>

<span class="token comment">//----------- 构建直接推送 - 钉钉 - 测试直接推送</span>
<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> targetIds <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
targetIds<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">"18311111111"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
targetIds<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">"13111111111"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">NoticeSendTargetsRequest</span> targetsRequest2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">NoticeSendTargetsRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
targetsRequest2<span class="token punctuation">.</span><span class="token function">setTargetList</span><span class="token punctuation">(</span>targetIds<span class="token punctuation">)</span><span class="token punctuation">;</span>
targetsRequest2<span class="token punctuation">.</span><span class="token function">setSendMessage</span><span class="token punctuation">(</span>defaultSendMessage<span class="token punctuation">)</span><span class="token punctuation">;</span>
targetsRequest2<span class="token punctuation">.</span><span class="token function">setNoticeMode</span><span class="token punctuation">(</span><span class="token class-name">NoticeTypeEnum</span><span class="token punctuation">.</span>DINGTALK<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
noticeClient<span class="token punctuation">.</span><span class="token function">pushByTargets</span><span class="token punctuation">(</span>targetsRequest2<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//直接推送</span>

<span class="token comment">//----------- 构建直接推送 - 浏览器 - 测试直接推送</span>
<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> targetIds <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
targetIds<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">"admin"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
targetIds<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">"manager"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">NoticeSendTargetsRequest</span> targetsRequest3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">NoticeSendTargetsRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
targetsRequest3<span class="token punctuation">.</span><span class="token function">setTargetList</span><span class="token punctuation">(</span>targetIds<span class="token punctuation">)</span><span class="token punctuation">;</span>
targetsRequest3<span class="token punctuation">.</span><span class="token function">setSendMessage</span><span class="token punctuation">(</span>defaultSendMessage<span class="token punctuation">)</span><span class="token punctuation">;</span>
targetsRequest3<span class="token punctuation">.</span><span class="token function">setNoticeMode</span><span class="token punctuation">(</span><span class="token class-name">NoticeTypeEnum</span><span class="token punctuation">.</span>BROWSER<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
noticeClient<span class="token punctuation">.</span><span class="token function">pushByTargets</span><span class="token punctuation">(</span>targetsRequest3<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//直接推送</span>

<span class="token comment">//----------- 构建直接推送 - 短信 - 测试直接推送</span>
<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> targetIds <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
targetIds<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">"18311111111"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
targetIds<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">"13111111111"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">NoticeSendTargetsRequest</span> targetsRequest4 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">NoticeSendTargetsRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
targetsRequest4<span class="token punctuation">.</span><span class="token function">setTargetList</span><span class="token punctuation">(</span>targetIds<span class="token punctuation">)</span><span class="token punctuation">;</span>
targetsRequest4<span class="token punctuation">.</span><span class="token function">setSendMessage</span><span class="token punctuation">(</span>sendPhoneMessage<span class="token punctuation">)</span><span class="token punctuation">;</span>
targetsRequest4<span class="token punctuation">.</span><span class="token function">setNoticeMode</span><span class="token punctuation">(</span><span class="token class-name">NoticeTypeEnum</span><span class="token punctuation">.</span>SMS<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
noticeClient<span class="token punctuation">.</span><span class="token function">pushByTargets</span><span class="token punctuation">(</span>targetsRequest4<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//直接推送</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
