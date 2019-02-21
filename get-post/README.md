# 处理get/post请求

node默认没有提供处理post请求体数据的方法，要手动处理：

```js
  req.on('data', function (chunk) {
    body += chunk;
  });
```