# RESTful

[一篇](http://www.runoob.com/w3cnote/restful-architecture.html)介绍RESTful的文章。REST会涉及：

1. 资源与URI
2. 统一资源接口
3. 资源的表述
4. 资源的链接(感觉这一条不好理解诶，待续)
5. 状态的转移(这一条也不咋好懂，待续)


发现一个问题：

如果把`app.get('/:id', func)`放在`app.get('/deleteUser', func)`的前面会导致监控不到`/deleteUser`。