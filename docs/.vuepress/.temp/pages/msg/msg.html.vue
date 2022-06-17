<template><div><h2 id="_1-消息中心接入" tabindex="-1"><a class="header-anchor" href="#_1-消息中心接入" aria-hidden="true">#</a> 1. 消息中心接入</h2>
<h3 id="_1-1-客户端sdk" tabindex="-1"><a class="header-anchor" href="#_1-1-客户端sdk" aria-hidden="true">#</a> 1.1 客户端sdk</h3>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.springblade<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>thpower-core-boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>3.0.12-SNAPSHOT<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>exclusions</span><span class="token punctuation">></span></span>
       <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>exclusion</span><span class="token punctuation">></span></span>
           <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.springframework.cloud<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
           <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>spring-cloud-stream<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>exclusion</span><span class="token punctuation">></span></span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>exclusions</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.springblade<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>thpower-notice-api<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>4.0.7-SNAPSHOT<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="https://git.thpyun.com/thpower-bladex/thpower-platform-examples" target="_blank" rel="noopener noreferrer">参考示例代码：下载地址<ExternalLinkIcon/></a>
消息中心模块名：thpower-notice-demo</p>
<h3 id="_1-2-发送消息通知" tabindex="-1"><a class="header-anchor" href="#_1-2-发送消息通知" aria-hidden="true">#</a> 1.2 发送消息通知</h3>
<h4 id="_1-2-1-平台推送-浏览器、邮箱、钉钉、短信等" tabindex="-1"><a class="header-anchor" href="#_1-2-1-平台推送-浏览器、邮箱、钉钉、短信等" aria-hidden="true">#</a> 1.2.1 平台推送（浏览器、邮箱、钉钉、短信等）</h4>
<blockquote>
<p>通过传递公共平台用户id方式，由系统找到用户所属目的地地址发送。</p>
</blockquote>
<ul>
<li>
<h5 id="请求地址" tabindex="-1"><a class="header-anchor" href="#请求地址" aria-hidden="true">#</a> 请求地址：</h5>
</li>
</ul>
<p>请求方式：fegin远程调用
请求方法：<code v-pre>org.springblade.notice.feign.pushByUserIds</code></p>
<ul>
<li>
<h5 id="请求参数" tabindex="-1"><a class="header-anchor" href="#请求参数" aria-hidden="true">#</a> 请求参数：</h5>
</li>
</ul>
<table>
<thead>
<tr>
<th>名称</th>
<th>类型</th>
<th>是否 必填</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>userList</td>
<td>List <String></td>
<td>否</td>
<td>用户id集合，即公共平台的账户id</td>
</tr>
<tr>
<td>noticeModes</td>
<td>String</td>
<td>否</td>
<td>推送方式,多个逗号间隔（见<a href="">定义参数</a>）</td>
</tr>
<tr>
<td>sendMessage</td>
<td>AbstractSendMessage（ <br />DefaultSendMessage、SmsSendMessage）</td>
<td>是</td>
<td>消息体对象</td>
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
<td>消息类型：<br />1消息通知，2系统通知（见<a href="">说明</a>）</td>
</tr>
<tr>
<td>└── appSource</td>
<td>String</td>
<td>是</td>
<td>app数据来源 （见<a href="">定义参数</a>）</td>
</tr>
<tr>
<td>└── actionType</td>
<td>String</td>
<td>是</td>
<td>动作类型 ,定义（见[定义参数值](）</td>
</tr>
<tr>
<td>└── msgBizTypeItem</td>
<td>String</td>
<td>是</td>
<td>自定义业务类型项 ，建议传递code值</td>
</tr>
</tbody>
</table>
<ul>
<li>
<h5 id="说明" tabindex="-1"><a class="header-anchor" href="#说明" aria-hidden="true">#</a> 说明</h5>
</li>
</ul>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<h5 id="定义参数" tabindex="-1"><a class="header-anchor" href="#定义参数" aria-hidden="true">#</a> 定义参数</h5>
<p>appSource</p>
<p>应用来源 ： 目前采用传参形式，后期研究是否可以通过clientId找到系统标识等方式</p>
</li>
</ul>
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
<p>​       actionType 动作类型 ：</p>
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
<p>​        noticeMode 通知方式 ：</p>
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
<ul>
<li>
<h5 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h5>
</li>
</ul>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-2-1-直接发送-浏览器、邮箱、钉钉、短信等" tabindex="-1"><a class="header-anchor" href="#_1-2-1-直接发送-浏览器、邮箱、钉钉、短信等" aria-hidden="true">#</a> 1.2.1 直接发送（浏览器、邮箱、钉钉、短信等）</h4>
<p>目的地收信格式：</p>
<blockquote>
<p>浏览器：公共平台-用户名，如：manager</p>
<p>邮箱方式：邮箱地址，如：903433333@qq.com</p>
<p>钉钉方式：手机号，如：18310111111</p>
<p>短信：手机号，如：18310111111</p>
<p>微信：目前暂定手机号（未实现）</p>
</blockquote>
<ul>
<li>
<h5 id="请求地址-1" tabindex="-1"><a class="header-anchor" href="#请求地址-1" aria-hidden="true">#</a> 请求地址：</h5>
</li>
</ul>
<p>请求方式：fegin远程调用
请求方法：<code v-pre>org.springblade.notice.feign.pushByTargets</code></p>
<ul>
<li>
<h5 id="请求参数-1" tabindex="-1"><a class="header-anchor" href="#请求参数-1" aria-hidden="true">#</a> 请求参数：</h5>
</li>
</ul>
<table>
<thead>
<tr>
<th>名称</th>
<th>类型</th>
<th>是 否必填</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>targetList</td>
<td>List <String></td>
<td>否</td>
<td>目的地地址集合</td>
</tr>
<tr>
<td>noticeModes</td>
<td>String</td>
<td>否</td>
<td>推送方式,多个逗号间隔（见<a href="">定义参数</a>）同上</td>
</tr>
<tr>
<td>sendMessage</td>
<td>AbstractSendMessage（<br />DefaultSendMessage 默认、<br /> SmsSendMessage 短信）</td>
<td>是</td>
<td>消息体对象</td>
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
<td>消息类型：1消息通知，2系统通知（见<a href="">说明</a>）同上</td>
</tr>
<tr>
<td>└── appSource</td>
<td>String</td>
<td>是</td>
<td>app数据来源 （见<a href="">定义参数</a>）同上</td>
</tr>
<tr>
<td>└── actionType</td>
<td>String</td>
<td>是</td>
<td>动作类型 ,定义（见<a href="">定义参数</a>）同上</td>
</tr>
<tr>
<td>└── msgBizTypeItem</td>
<td>String</td>
<td>是</td>
<td>自定义业务类型项，建议传递code值</td>
</tr>
</tbody>
</table>
<ul>
<li>
<h5 id="返回结果-1" tabindex="-1"><a class="header-anchor" href="#返回结果-1" aria-hidden="true">#</a> 返回结果</h5>
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
<ul>
<li>
<h5 id="示例-1" tabindex="-1"><a class="header-anchor" href="#示例-1" aria-hidden="true">#</a> 示例</h5>
</li>
</ul>
<p><strong>创建客户端</strong></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Autowired</span>
<span class="token keyword">private</span> <span class="token class-name">INoticeClient</span> noticeClient<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>平台方式：构造信息并发送，示例：</strong></p>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-3-搜索-多条件分页查询通知消息" tabindex="-1"><a class="header-anchor" href="#_1-3-搜索-多条件分页查询通知消息" aria-hidden="true">#</a> 1.3 搜索（多条件分页查询通知消息)</h3>
<ul>
<li>
<h5 id="请求地址-2" tabindex="-1"><a class="header-anchor" href="#请求地址-2" aria-hidden="true">#</a> 请求地址：</h5>
<p>请求方式：fegin远程调用
请求地址：<code v-pre>org.springblade.notice.feign.searchNoticePage</code></p>
</li>
<li>
<h5 id="请求参数-2" tabindex="-1"><a class="header-anchor" href="#请求参数-2" aria-hidden="true">#</a> 请求参数：</h5>
</li>
</ul>
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
<td>app数据来源 （见<a href="">定义参数值</a>）</td>
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
<td>消息业务类型（见<a href="">定义参数值</a>）</td>
</tr>
<tr>
<td>msgBizTypeItems</td>
<td>String</td>
<td>是</td>
<td>多个自定义业务类型项 ，逗号间隔</td>
</tr>
</tbody>
</table>
<ul>
<li>
<h5 id="返回结果-2" tabindex="-1"><a class="header-anchor" href="#返回结果-2" aria-hidden="true">#</a> 返回结果</h5>
<p>返回格式：R&lt;PageVo<ThpNoticeVO>&gt;</p>
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
<td>msg</td>
<td>String</td>
<td></td>
<td>返回消息</td>
</tr>
<tr>
<td>data</td>
<td>PageVo<ThpNoticeVO></td>
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
<td>#        ├──  target</td>
<td>String</td>
<td></td>
<td>推送目的地址：如“xxxqq@.com” 、username等</td>
</tr>
<tr>
<td>#        ├──  userId</td>
<td>String</td>
<td></td>
<td>公共平台的用户id</td>
</tr>
<tr>
<td>#        ├──  noticeMode</td>
<td>String</td>
<td></td>
<td>通知方式名（见<a href="">定义参数值</a>）</td>
</tr>
<tr>
<td>#        ├──  subject</td>
<td>String</td>
<td></td>
<td>主题</td>
</tr>
<tr>
<td>#        ├──  msgContext</td>
<td>String</td>
<td></td>
<td>内容</td>
</tr>
<tr>
<td>#        ├── extendData</td>
<td>String</td>
<td></td>
<td>用户自定义数据，业务功能自由扩展使用</td>
</tr>
<tr>
<td>#        ├── msgType</td>
<td>Integer</td>
<td></td>
<td>消息类型：1消息通知，2系统通知</td>
</tr>
<tr>
<td>#        ├──  appSource</td>
<td>String</td>
<td></td>
<td>app数据来源 （见<a href="">定义参数值</a>）</td>
</tr>
<tr>
<td>#        ├──  actionType</td>
<td>String</td>
<td></td>
<td>动作类型 ,定义（见<a href="">定义参数值</a>）</td>
</tr>
<tr>
<td>#        ├──  msgBizTypeItem</td>
<td>String</td>
<td></td>
<td>自定义业务类型项 ，业务系统按自有业务类型，建议传递code值</td>
</tr>
</tbody>
</table>
<ul>
<li>
<h5 id="示例-2" tabindex="-1"><a class="header-anchor" href="#示例-2" aria-hidden="true">#</a> 示例</h5>
</li>
</ul>
<p>创建客户端</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Autowired</span>
<span class="token keyword">private</span> <span class="token class-name">INoticeClient</span> noticeClient<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>构造信息并搜索</p>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​</p>
</div></template>
