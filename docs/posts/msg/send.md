--- 
date: 2022-06-16 
---

# 平台推送
> 浏览器、邮箱、钉钉、短信等
> 通过传递公共平台用户id方式，由系统找到用户所属目的地地址发送。

## 请求地址：
请求方式：fegin远程调用
请求方法：```org.springblade.notice.feign.pushByUserIds```

## 请求参数：

| 名称 | 类型 | 是否必填 | 描述  |
| ---- | ---- | ----- | ------ |
| userList | ```List<String>``` | 否  | 用户id集合， 即公共平台的账户id  &emsp; &emsp; &emsp;&emsp; &emsp; &emsp; &emsp;&emsp; &emsp; &emsp; &emsp;&emsp;|
| noticeModes | String | 否  | 推送方式, 多个逗号间隔（见定义参数） |
| sendMessage | AbstractSendMessage| 是 | 消息体对象 ``` < DefaultSendMessage默认、SmsSendMessage短信 >```  |
| └── subject | String  | 是   | 主题   |
| └── msgContext | String  | 是 | 内容 |
| └── extendData | String  | 是  | 用户自定义数据， 业务功能自由扩展使用|
| └── msgType | Integer | 是   | 消息类型： 1消息通知，2系统通知（见说明） |
| └── appSource | String  | 是 | app数据来源 （见定义参数） |
| └── actionType | String   | 是 | 动作类型 ,定义 （见定义参数值）           |
| └── msgBizTypeItem &emsp; &emsp; &emsp;&emsp; | String | 是  | 自定义业务类型项 ，建议传递code值 |

## 说明


**消息通知（actionType）：**

>1 消息通知，场景举例：业务调用类、通知公告、发送指定消息
>2 系统通知：场景举例：系统维护、系统更新、系统异常等场景

**自定义业务类型**（msgBizTypeItem）

> 可参考设计为层级结构，为方便查询，只传递最小类目，比如：业务能够精确到“台式机类”，将对应code传入。

```
├── 营销告警类
├── 用电异常类
│   ├── 电量异常 
│   ├── 状态异常 
│   ├── 日核告警
└── 数据告警
```


## 定义参数

**appSource**应用来源 ：

> 目前采用传参形式，后期研究是否可以通过clientId找到系统标识等方式

| **#** | **参数值** | **说明**     | 
| ----- | ---------- | ------------ | 
| 1     | default    | 公共平台内部 |        
| 2     | app_zpyth  | 增配一体化   |       

**actionType** 动作类型 ：

| **#** |         **参数值**         | **说明** |
| ----- | --------- | -------- |
| 1     | action_type_todo | 待办 |
| 2     | action_type_notice | 通知 |
| 3     | action_type_remind | 提醒     |
| 4     | action_type_warn   | 告警     |

**noticeMode** 通知方式 ：

| **#** |         **参数值**         | **说明** |
| ----- | --------- | -------- |
| 1     | NoticeBrowser | 浏览器 |
| 2     | NoticeMail | 邮箱 |
| 3    | NoticeSms   | 短信     |
| 4     | NoticeDingTalk   | 钉钉     |
| 5     | NoticeWeChat | 微信     |

- ##### 返回结果

| 名称     | 类型    | 示例值 | 描述                    |
| -------- | ------- | ------ | ----------------------- |
| code     | Integer | 200 | 状态码 ，200：操作成功，400：业务异常 |
| success | Boolean | true   | 是否成功                |
| data | Boolean | true   | 承载数据|
| msg | String |    | 返回消息                |


## 示例

**创建客户端**

```java
@Autowired
private INoticeClient noticeClient;
```


**平台方式：构造信息并发送，示例：**

```java
//----------- 用户
List<String> userIds = new ArrayList<String>();
userIds.add("1123598821738675203");
userIds.add("1123598821738675201");

//----------- 构建构建短信消息体：短信
SmsSendMessage sendPhoneMessage = new SmsSendMessage();
sendPhoneMessage.setCode("code1111");
Map<String, String> map = new HashMap<String, String>();
map.put("nihao", "ok");
sendPhoneMessage.setParams(map);
sendPhoneMessage.setSubject("断电提示");
sendPhoneMessage.setMsgContext("【xxx有限公司】尊敬的xxx客户（户号2011xxx）：截止2021-01-15，您共欠费2.34元，即将停电。（如已缴费请忽略）");
sendPhoneMessage.setExtendData(null);
sendPhoneMessage.setAppSource(NoticeConstant.APP_SOURCE_LOCAL);
sendPhoneMessage.setActionType(NoticeConstant.ACTION_TYPE_TODO);
sendPhoneMessage.setMsgBizTypeItem("断电提示");

//----------- 构建构建默认消息：浏览器、钉钉、邮箱
DefaultSendMessage defaultSendMessage = new DefaultSendMessage();
defaultSendMessage.setSubject("断电提示");
defaultSendMessage.setMsgContext("【xxx有限公司】尊敬的xxx客户（户号2011xxx）：截止2021-01-15，您共欠费2.34元，即将停电。（如已缴费请忽略）");
defaultSendMessage.setExtendData(null);
defaultSendMessage.setAppSource(NoticeConstant.APP_SOURCE_LOCAL);
defaultSendMessage.setActionType(NoticeConstant.ACTION_TYPE_TODO);
defaultSendMessage.setMsgBizTypeItem("断电提示");


/** ############## 平台推送 ################## **/
//----------- 构建平台推送 - 邮箱 - 测试平台推送
NoticeSendUsersRequest usersRequest1 = new NoticeSendUsersRequest();
usersRequest1.setUserList(userIds);
usersRequest1.setNoticeMode(NoticeTypeEnum.MAIL.getName());
usersRequest1.setSendMessage(defaultSendMessage);
noticeClient.pushByUserIds(usersRequest1); 

//----------- 构建平台推送- 钉钉 - 测试平台推送
NoticeSendUsersRequest usersRequest2 = new NoticeSendUsersRequest();
usersRequest2.setUserList(userIds);
usersRequest2.setNoticeMode(NoticeTypeEnum.DINGTALK.getName());
usersRequest2.setSendMessage(defaultSendMessage);
noticeClient.pushByUserIds(usersRequest2); 

//----------- 构建平台推送- 浏览器 - 测试平台推送
NoticeSendUsersRequest usersRequest3 = new NoticeSendUsersRequest();
usersRequest3.setUserList(userIds);
usersRequest3.setNoticeMode(NoticeTypeEnum.BROWSER.getName());
usersRequest3.setSendMessage(defaultSendMessage);
noticeClient.pushByUserIds(usersRequest3); 

//----------- 构建平台推送- 短信 - 测试平台推送
NoticeSendUsersRequest usersRequest4 = new NoticeSendUsersRequest();
usersRequest4.setUserList(userIds);
usersRequest4.setNoticeMode(NoticeTypeEnum.SMS.getName());
usersRequest4.setSendMessage(defaultSendMessage);
noticeClient.pushByUserIds(usersRequest4); 

//----------- 构建平台推送-邮箱请求并发送 - 测试平台推送
NoticeSendUsersRequest usersRequest = new NoticeSendUsersRequest();
usersRequest.setUserList(userIds);
usersRequest.setNoticeMode(NoticeTypeEnum.MAIL.getName());
usersRequest.setSendMessage(defaultSendMessage);
noticeClient.pushByUserIds(usersRequest); 
```
