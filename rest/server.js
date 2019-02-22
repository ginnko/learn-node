const express = require('express');
const app = express();
const fs = require('fs');
const url = require('url');

// app.get('/listUsers', function(req, res) {
//   fs.readFile(__dirname + '/' + 'user.json', 'utf8', function(err, data) {
//     console.log(__dirname);
//     console.log(data);
//     res.end(data);
//   });
// });


// const user = {
//   "user4" : {
//     "name" : "mohit",
//     "password" : "password4",
//     "profession" : "teacher",
//     "id": 4
//   }
// };

// app.get('/addUser', function(req, res) {
//   fs.readFile(__dirname+'/'+'user.json', 'utf8', function(err, data) {
//     data = JSON.parse(data);
//     data['user4'] = user['user4'];
//     console.log(data);
//     res.end(JSON.stringify(data));
//   });
// });

// 删除用户

const id = 2;

app.get('/deleteUser', function (req, res) {
  // First read existing users.
  fs.readFile( __dirname + "/" + "user.json", 'utf8', function (err, data) {
      data = JSON.parse( data );
      delete data["user" + id];
      console.log('data:', data);
      res.end( JSON.stringify(data));
  });
});

const server = app.listen(8000, function() {
  const host = server.address().address;
  const port = server.address().port;
  console.log("应用实例， 访问地址为： http://%s:%s", host, port);
});


// 显示用户详细信息

app.get('/:id', function(req, res) {
  fs.readFile(__dirname+'/'+'user.json', 'utf8', function(err, data) {
    data = JSON.parse(data);
    const user = data['user' + req.params.id];
    console.log(user);
    res.end(JSON.stringify(user));
  });
});