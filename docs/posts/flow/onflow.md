---
date: 2022-06-16
---

# 引入sdk
```xml
<dependency>
    <groupId>org.springblade</groupId>
    <artifactId>thpower-core-boot</artifactId>
    <version>3.0.12-SNAPSHOT</version>
    <exclusions>
        <exclusion>
            <groupId>org.springframework.cloud</groupId>
            <artifactId>spring-cloud-stream</artifactId>
        </exclusion>
    </exclusions>
</dependency>
<dependency>
<groupId>org.springblade</groupId>
<artifactId>thpower-notice-api</artifactId>
<version>4.0.7-SNAPSHOT</version>
</dependency>
```

## 点击下载
[参考示例代码：下载地址](https://git.thpyun.com/thpower-bladex/thpower-platform-examples)
消息中心模块名：thpower-notice-demo