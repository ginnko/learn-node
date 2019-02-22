# 处理get/post请求

1. node默认没有提供处理post请求体数据的方法，要手动处理：

```js
  req.on('data', function (chunk) {
    body += chunk;
  });
```

2. 设置`Content-Type`时要指定字符集，否则会出现乱码

```js
res.writeHead(200, {
    'Content-Type': 'text/plain;charset=utf8'
  });
```