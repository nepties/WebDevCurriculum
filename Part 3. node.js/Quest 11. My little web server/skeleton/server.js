var http = require('http');

http.createServer(function(req, res) {
	// TODO: 이 곳을 채워넣으세요..!
  res.setHeader("Contenet-Type", "text/html");
  res.writeHead(200);
  res.write('<html><head><title>Simple HTTP Server</title></head>');
  res.write('<body>');
  res.write('\n<h1>Hello, World' + '</h1>');
  res.end('\n<body></html>');

}).listen(8080);
