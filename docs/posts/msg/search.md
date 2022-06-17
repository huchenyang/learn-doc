--- 
date: 2022-06-16
---

# 搜索
> 多条件分页查询通知消息

## 请求地址
  请求方式：fegin远程调用
  请求地址：```org.springblade.notice.feign.searchNoticePage```

## 请求参数

| 名称           | 类型    |              是否  必填           | 描述                                                    |
| -------------- | ------- | -------------------- | ------------------- |
| current        | Integer | 是       | 当前页                                                  |
| size           | Integer | 是       | 每页的数量                                              |
| ascs           | String  | 否       | 升序字段（多个字段逗号间隔，建议传递一个字段，升序、降序不能同时传递） |
| descs          | String  | 否       | 降序字段（多个字段逗号间隔，建议传递一个字段，升序、降序不能同时传递）                 | 
| appSource      | String  | 是       | app数据来源 （见定义参数） |
| userId | String  | 是       | 公共平台-用户id|
| target | String  | 是       | 推送目的地址：如“xxxqq@.com” 、username等|
| actionType     | String  | 是       | 消息业务类型（见定义参数）                 |
| msgBizTypeItems  | String  | 是       | 多个自定义业务类型项 ，逗号间隔    |

## 返回结果
> 返回格式：```R<PageVo<ThpNoticeVO>>```

| 名称             | 类型    | 示例值     | 描述                    |
| --------------- | ------- | ------ | ----------------- |
| code     | Integer | 200 | 状态码 ，200：操作成功，400：业务异常 |
| success | Boolean | true   | 是否成功                |
| msg | String |    | 返回消息                |
| data | ```PageVo<ThpNoticeVO>``` | true   | 承载数据|
| └── total | long        |  100     | 总记录数 |
| └── size | long        |  10      | 每页显示条数，默认 10 |
| └── current | long        |  1       | 当前页 |
| └── pages | long        |  1       | 页数|
| └── records | ThpNoticeVO        |         | 查询数据列表|
|     ├──  target | String        |        | 推送目的地址： 如“xxxqq@.com” 、username等 |
|     ├──  userId | String        |        | 公共平台的用户id |
|     ├──  noticeMode | String        |        | 通知方式名（见定义参数） |
|     ├──  subject | String        |        | 主题                                                         |
|     ├──  msgContext | String        |        | 内容                                                         |
|     ├── extendData | String        |        | 用户自定义数据 业务功能自由扩展使用                   |
|     ├── msgType    | Integer |        | 消息类型： 1消息通知，2系统通知 |
|     ├──  appSource  | String        |        | app数据来源 （见定义参数） |
|     ├──  actionType    | String        |        | 动作类型 ,定义（见定义参数）                 |
|     ├──  msgBizTypeItem &emsp; &emsp; &emsp; &emsp;     | String        |        | 自定义业务类型项 ， 业务系统按自有业务类型，建议传递code值 |

## 示例
### 创建客户端
```java
@Autowired
private INoticeClient noticeClient;
```
### 构造信息并搜索

```java
 //构建搜索通知的请求
NoticeSearchRequest request = new NoticeSearchRequest();
request.setCurrent(1);
request.setSize(10);

//----- 按APP来源的维度查询（目前为必传）
request.setTarget("903486356@qq.com");

//----- 可按用户的维度查询
request.setUserId("111111111111111");

//----- 可按目标地址的维度查询
request.setTarget("903486356@qq.com");

//----- 可按动作类型的维度查询
//动作类型：待办：ACTION_TYPE_TODO、通知：ACTION_TYPE_NOTICE、提醒：ACTION_TYPE_REMIND、告警：ACTION_TYPE_WARN
request.setActionType(NoticeConstant.ACTION_TYPE_TODO);

//----- 可按自定义业务类型的维度查询
request.setMsgBizTypeItems("断电提醒,数据异常");//自定义业务类型，建议传递code值

R<PageVo<ThpNoticeVO>> result = noticeClient.searchNoticePage(request);
System.out.println(result.toString());
```
