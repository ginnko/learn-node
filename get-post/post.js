const http = require('http');
const querystring = require('querystring');

const postHTML =
  `<html><head><meta charset='utf-8'><title>菜鸟教程Node.js实例</title></head>
  <body>
    <form method="post">
      网站名： <input name="name"><br>
      网站url： <input name="url"><br>
      <input type="submit">
    </form>
  </body>
  </html>`;

  http.createServer(function(req, res) {
    let body = '';
    req.on('data', function(chunk) {
      body += chunk;
    });
    req.on('end', function() {
      body = querystring.parse(body);
      res.writeHead(200, {'Content-Type': 'text/html; charset=utf8'});
      if (body.name && body.url) {
        res.write("网站名：" + body.name);
        res.write("网站URL：" + body.url);
      } else {
        res.write(postHTML);
      }
      res.end();
    });
  }).listen(3000, function(){
    console.log('starting server on port 3000');
  });