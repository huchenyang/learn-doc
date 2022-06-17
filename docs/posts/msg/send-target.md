--- 
date: 2022-06-16
---
# 直接发送
> 浏览器、邮箱、钉钉、短信等 

目的地收信格式：
>浏览器：公共平台-用户名，如：manager
>邮箱方式：邮箱地址，如：903433333@qq.com
>钉钉方式：手机号，如：18310111111
>短信：手机号，如：18310111111
>微信：目前暂定手机号（未实现）

## 请求地址
请求方式：fegin远程调用
请求方法：```org.springblade.notice.feign.pushByTargets```

## 请求参数

| 名称 | 类型 | 是否必填 | 描述 |
| -----| ---- | --------| ---- |
| targetList   | ```List<String>``` | 否        | 目的地地址集合 |
| noticeModes | String | 否      | 推送方式,多个逗号间隔（见定义参数）同上 |
| sendMessage | AbstractSendMessage | 是     | 消息体对象    ```<DefaultSendMessage默认、SmsSendMessage短信> ```   |
| └── subject | String        | 是       | 主题                                                         |
| └── msgContext | String        | 是       | 内容                                                         |
| └── extendData | String        | 是       | 用户自定义数据，业务功能自由扩展使用                   |
| └── msgType | Integer | 是       | 消息类型：1消息通知，2系统通知（见说明）同上 |
| └── appSource | String        | 是       | app数据来源 （见定义参数）同上 |
| └── actionType | String        | 是       | 动作类型 , 定义（见定义参数）同上         |
| └── msgBizTypeItem &emsp; &emsp; &emsp; &emsp;     | String        | 是       | 自定义业务类型项， 建议传递code值 |


## 返回结果

| 名称     | 类型    | 示例值 | 描述                    |
| -------- | ------- | ------ | ----------------------- |
| code     | Integer | 200 | 状态码 ，200：操作成功，400：业务异常 |
| success | Boolean | true   | 是否成功                |
| data | Boolean | true   | 承载数据|
| msg | String |    | 返回消息                |


## 示例
### 创建客户端 

```java
@Autowired
private INoticeClient noticeClient;
```

### 发送 

```java
//----------- 构建手机消息体
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

//----------- 构建默认消息格式：浏览器、钉钉、邮箱
DefaultSendMessage defaultSendMessage = new DefaultSendMessage();
defaultSendMessage.setSubject("断电提示");
defaultSendMessage.setMsgContext("【xxx有限公司】尊敬的xxx客户（户号2011xxx）：截止2021-01-15，您共欠费2.34元，即将停电。（如已缴费请忽略）");
defaultSendMessage.setExtendData(null);
defaultSendMessage.setAppSource(NoticeConstant.APP_SOURCE_LOCAL);
defaultSendMessage.setActionType(NoticeConstant.ACTION_TYPE_TODO);
defaultSendMessage.setMsgBizTypeItem("断电提示");


/** ############## 直接推送 ################## **/
//----------- 构建直接推送 - 邮箱 - 测试直接推送
List<String> targetIds = new ArrayList<String>();
targetIds.add("903486356@qq.com");
targetIds.add("huchenyang@126.com");
NoticeSendTargetsRequest targetsRequest1 = new NoticeSendTargetsRequest();
targetsRequest1.setTargetList(targetIds);
targetsRequest1.setSendMessage(defaultSendMessage);
targetsRequest1.setNoticeMode(NoticeTypeEnum.MAIL.getName());
noticeClient.pushByTargets(targetsRequest1);//直接推送

//----------- 构建直接推送 - 钉钉 - 测试直接推送
List<String> targetIds = new ArrayList<String>();
targetIds.add("18311111111");
targetIds.add("13111111111");
NoticeSendTargetsRequest targetsRequest2 = new NoticeSendTargetsRequest();
targetsRequest2.setTargetList(targetIds);
targetsRequest2.setSendMessage(defaultSendMessage);
targetsRequest2.setNoticeMode(NoticeTypeEnum.DINGTALK.getName());
noticeClient.pushByTargets(targetsRequest2);//直接推送

//----------- 构建直接推送 - 浏览器 - 测试直接推送
List<String> targetIds = new ArrayList<String>();
targetIds.add("admin");
targetIds.add("manager");
NoticeSendTargetsRequest targetsRequest3 = new NoticeSendTargetsRequest();
targetsRequest3.setTargetList(targetIds);
targetsRequest3.setSendMessage(defaultSendMessage);
targetsRequest3.setNoticeMode(NoticeTypeEnum.BROWSER.getName());
noticeClient.pushByTargets(targetsRequest3);//直接推送

//----------- 构建直接推送 - 短信 - 测试直接推送
List<String> targetIds = new ArrayList<String>();
targetIds.add("18311111111");
targetIds.add("13111111111");
NoticeSendTargetsRequest targetsRequest4 = new NoticeSendTargetsRequest();
targetsRequest4.setTargetList(targetIds);
targetsRequest4.setSendMessage(sendPhoneMessage);
targetsRequest4.setNoticeMode(NoticeTypeEnum.SMS.getName());
noticeClient.pushByTargets(targetsRequest4);//直接推送
```


