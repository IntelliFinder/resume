var http        = require('http');
var url         = require('url');
var querystring = require('querystring');
var fs          = require('fs');

http.createServer(function (req, res) {
  var filename = url.parse(req.url, true).pathname;
  fs.readFile(__dirname + filename, function(err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      console.log(err);
      return res.end("404 Not Found");
    }  
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    console.log(filename);
    return res.end();
  });
}).listen(8080);