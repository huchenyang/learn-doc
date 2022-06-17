<template><div><h1 id="平台推送" tabindex="-1"><a class="header-anchor" href="#平台推送" aria-hidden="true">#</a> 平台推送</h1>
<blockquote>
<p>浏览器、邮箱、钉钉、短信等
通过传递公共平台用户id方式，由系统找到用户所属目的地地址发送。</p>
</blockquote>
<h2 id="请求地址" tabindex="-1"><a class="header-anchor" href="#请求地址" aria-hidden="true">#</a> 请求地址：</h2>
<p>请求方式：fegin远程调用
请求方法：<code v-pre>org.springblade.notice.feign.pushByUserIds</code></p>
<h2 id="请求参数" tabindex="-1"><a class="header-anchor" href="#请求参数" aria-hidden="true">#</a> 请求参数：</h2>
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
<td>userList</td>
<td><code v-pre>List&lt;String&gt;</code></td>
<td>否</td>
<td>用户id集合， 即公共平台的账户id                      </td>
</tr>
<tr>
<td>noticeModes</td>
<td>String</td>
<td>否</td>
<td>推送方式, 多个逗号间隔（见定义参数）</td>
</tr>
<tr>
<td>sendMessage</td>
<td>AbstractSendMessage</td>
<td>是</td>
<td>消息体对象 <code v-pre> &lt; DefaultSendMessage默认、SmsSendMessage短信 &gt;</code></td>
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
<td>用户自定义数据， 业务功能自由扩展使用</td>
</tr>
<tr>
<td>└── msgType</td>
<td>Integer</td>
<td>是</td>
<td>消息类型： 1消息通知，2系统通知（见说明）</td>
</tr>
<tr>
<td>└── appSource</td>
<td>String</td>
<td>是</td>
<td>app数据来源 （见定义参数）</td>
</tr>
<tr>
<td>└── actionType</td>
<td>String</td>
<td>是</td>
<td>动作类型 ,定义 （见定义参数值）</td>
</tr>
<tr>
<td>└── msgBizTypeItem       </td>
<td>String</td>
<td>是</td>
<td>自定义业务类型项 ，建议传递code值</td>
</tr>
</tbody>
</table>
<h2 id="说明" tabindex="-1"><a class="header-anchor" href="#说明" aria-hidden="true">#</a> 说明</h2>
<p><strong>消息通知（actionType）：</strong></p>
<blockquote>
<p>1 消息通知，场景举例：业务调用类、通知公告、发送指定消息
2 系统通知：场景举例：系统维护、系统更新、系统异常等场景</p>
</blockquote>
<p><strong>自定义业务类型</strong>（msgBizTypeItem）</p>
<blockquote>
<p>可参考设计为层级结构，为方便查询，只传递最小类目，比如：业务能够精确到“台式机类”，将对应code传入。</p>
</blockquote>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>├── 营销告警类
├── 用电异常类
│   ├── 电量异常 
│   ├── 状态异常 
│   ├── 日核告警
└── 数据告警
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="定义参数" tabindex="-1"><a class="header-anchor" href="#定义参数" aria-hidden="true">#</a> 定义参数</h2>
<p><strong>appSource</strong>应用来源 ：</p>
<blockquote>
<p>目前采用传参形式，后期研究是否可以通过clientId找到系统标识等方式</p>
</blockquote>
<table>
<thead>
<tr>
<th><strong>#</strong></th>
<th><strong>参数值</strong></th>
<th><strong>说明</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>default</td>
<td>公共平台内部</td>
</tr>
<tr>
<td>2</td>
<td>app_zpyth</td>
<td>增配一体化</td>
</tr>
</tbody>
</table>
<p><strong>actionType</strong> 动作类型 ：</p>
<table>
<thead>
<tr>
<th><strong>#</strong></th>
<th><strong>参数值</strong></th>
<th><strong>说明</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>action_type_todo</td>
<td>待办</td>
</tr>
<tr>
<td>2</td>
<td>action_type_notice</td>
<td>通知</td>
</tr>
<tr>
<td>3</td>
<td>action_type_remind</td>
<td>提醒</td>
</tr>
<tr>
<td>4</td>
<td>action_type_warn</td>
<td>告警</td>
</tr>
</tbody>
</table>
<p><strong>noticeMode</strong> 通知方式 ：</p>
<table>
<thead>
<tr>
<th><strong>#</strong></th>
<th><strong>参数值</strong></th>
<th><strong>说明</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>NoticeBrowser</td>
<td>浏览器</td>
</tr>
<tr>
<td>2</td>
<td>NoticeMail</td>
<td>邮箱</td>
</tr>
<tr>
<td>3</td>
<td>NoticeSms</td>
<td>短信</td>
</tr>
<tr>
<td>4</td>
<td>NoticeDingTalk</td>
<td>钉钉</td>
</tr>
<tr>
<td>5</td>
<td>NoticeWeChat</td>
<td>微信</td>
</tr>
</tbody>
</table>
<ul>
<li>
<h5 id="返回结果" tabindex="-1"><a class="header-anchor" href="#返回结果" aria-hidden="true">#</a> 返回结果</h5>
</li>
</ul>
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
<p><strong>创建客户端</strong></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Autowired</span>
<span class="token keyword">private</span> <span class="token class-name">INoticeClient</span> noticeClient<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>平台方式：构造信息并发送，示例：</strong></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">//----------- 用户</span>
<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> userIds <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
userIds<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">"1123598821738675203"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
userIds<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">"1123598821738675201"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//----------- 构建构建短信消息体：短信</span>
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

<span class="token comment">//----------- 构建构建默认消息：浏览器、钉钉、邮箱</span>
<span class="token class-name">DefaultSendMessage</span> defaultSendMessage <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DefaultSendMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
defaultSendMessage<span class="token punctuation">.</span><span class="token function">setSubject</span><span class="token punctuation">(</span><span class="token string">"断电提示"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
defaultSendMessage<span class="token punctuation">.</span><span class="token function">setMsgContext</span><span class="token punctuation">(</span><span class="token string">"【xxx有限公司】尊敬的xxx客户（户号2011xxx）：截止2021-01-15，您共欠费2.34元，即将停电。（如已缴费请忽略）"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
defaultSendMessage<span class="token punctuation">.</span><span class="token function">setExtendData</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
defaultSendMessage<span class="token punctuation">.</span><span class="token function">setAppSource</span><span class="token punctuation">(</span><span class="token class-name">NoticeConstant</span><span class="token punctuation">.</span>APP_SOURCE_LOCAL<span class="token punctuation">)</span><span class="token punctuation">;</span>
defaultSendMessage<span class="token punctuation">.</span><span class="token function">setActionType</span><span class="token punctuation">(</span><span class="token class-name">NoticeConstant</span><span class="token punctuation">.</span>ACTION_TYPE_TODO<span class="token punctuation">)</span><span class="token punctuation">;</span>
defaultSendMessage<span class="token punctuation">.</span><span class="token function">setMsgBizTypeItem</span><span class="token punctuation">(</span><span class="token string">"断电提示"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token doc-comment comment">/** ############## 平台推送 ################## **/</span>
<span class="token comment">//----------- 构建平台推送 - 邮箱 - 测试平台推送</span>
<span class="token class-name">NoticeSendUsersRequest</span> usersRequest1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">NoticeSendUsersRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
usersRequest1<span class="token punctuation">.</span><span class="token function">setUserList</span><span class="token punctuation">(</span>userIds<span class="token punctuation">)</span><span class="token punctuation">;</span>
usersRequest1<span class="token punctuation">.</span><span class="token function">setNoticeMode</span><span class="token punctuation">(</span><span class="token class-name">NoticeTypeEnum</span><span class="token punctuation">.</span>MAIL<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
usersRequest1<span class="token punctuation">.</span><span class="token function">setSendMessage</span><span class="token punctuation">(</span>defaultSendMessage<span class="token punctuation">)</span><span class="token punctuation">;</span>
noticeClient<span class="token punctuation">.</span><span class="token function">pushByUserIds</span><span class="token punctuation">(</span>usersRequest1<span class="token punctuation">)</span><span class="token punctuation">;</span> 

<span class="token comment">//----------- 构建平台推送- 钉钉 - 测试平台推送</span>
<span class="token class-name">NoticeSendUsersRequest</span> usersRequest2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">NoticeSendUsersRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
usersRequest2<span class="token punctuation">.</span><span class="token function">setUserList</span><span class="token punctuation">(</span>userIds<span class="token punctuation">)</span><span class="token punctuation">;</span>
usersRequest2<span class="token punctuation">.</span><span class="token function">setNoticeMode</span><span class="token punctuation">(</span><span class="token class-name">NoticeTypeEnum</span><span class="token punctuation">.</span>DINGTALK<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
usersRequest2<span class="token punctuation">.</span><span class="token function">setSendMessage</span><span class="token punctuation">(</span>defaultSendMessage<span class="token punctuation">)</span><span class="token punctuation">;</span>
noticeClient<span class="token punctuation">.</span><span class="token function">pushByUserIds</span><span class="token punctuation">(</span>usersRequest2<span class="token punctuation">)</span><span class="token punctuation">;</span> 

<span class="token comment">//----------- 构建平台推送- 浏览器 - 测试平台推送</span>
<span class="token class-name">NoticeSendUsersRequest</span> usersRequest3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">NoticeSendUsersRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
usersRequest3<span class="token punctuation">.</span><span class="token function">setUserList</span><span class="token punctuation">(</span>userIds<span class="token punctuation">)</span><span class="token punctuation">;</span>
usersRequest3<span class="token punctuation">.</span><span class="token function">setNoticeMode</span><span class="token punctuation">(</span><span class="token class-name">NoticeTypeEnum</span><span class="token punctuation">.</span>BROWSER<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
usersRequest3<span class="token punctuation">.</span><span class="token function">setSendMessage</span><span class="token punctuation">(</span>defaultSendMessage<span class="token punctuation">)</span><span class="token punctuation">;</span>
noticeClient<span class="token punctuation">.</span><span class="token function">pushByUserIds</span><span class="token punctuation">(</span>usersRequest3<span class="token punctuation">)</span><span class="token punctuation">;</span> 

<span class="token comment">//----------- 构建平台推送- 短信 - 测试平台推送</span>
<span class="token class-name">NoticeSendUsersRequest</span> usersRequest4 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">NoticeSendUsersRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
usersRequest4<span class="token punctuation">.</span><span class="token function">setUserList</span><span class="token punctuation">(</span>userIds<span class="token punctuation">)</span><span class="token punctuation">;</span>
usersRequest4<span class="token punctuation">.</span><span class="token function">setNoticeMode</span><span class="token punctuation">(</span><span class="token class-name">NoticeTypeEnum</span><span class="token punctuation">.</span>SMS<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
usersRequest4<span class="token punctuation">.</span><span class="token function">setSendMessage</span><span class="token punctuation">(</span>defaultSendMessage<span class="token punctuation">)</span><span class="token punctuation">;</span>
noticeClient<span class="token punctuation">.</span><span class="token function">pushByUserIds</span><span class="token punctuation">(</span>usersRequest4<span class="token punctuation">)</span><span class="token punctuation">;</span> 

<span class="token comment">//----------- 构建平台推送-邮箱请求并发送 - 测试平台推送</span>
<span class="token class-name">NoticeSendUsersRequest</span> usersRequest <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">NoticeSendUsersRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
usersRequest<span class="token punctuation">.</span><span class="token function">setUserList</span><span class="token punctuation">(</span>userIds<span class="token punctuation">)</span><span class="token punctuation">;</span>
usersRequest<span class="token punctuation">.</span><span class="token function">setNoticeMode</span><span class="token punctuation">(</span><span class="token class-name">NoticeTypeEnum</span><span class="token punctuation">.</span>MAIL<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
usersRequest<span class="token punctuation">.</span><span class="token function">setSendMessage</span><span class="token punctuation">(</span>defaultSendMessage<span class="token punctuation">)</span><span class="token punctuation">;</span>
noticeClient<span class="token punctuation">.</span><span class="token function">pushByUserIds</span><span class="token punctuation">(</span>usersRequest<span class="token punctuation">)</span><span class="token punctuation">;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
