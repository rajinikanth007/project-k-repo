var http = require('http');
var handleRequest = function(request, response) {
  response.writeHead(200);
  response.end("<h1>Technical Guftgu Welcomes You Using Google App Engine Standard</h1>");
}
var www = http.createServer(handleRequest);
www.listen(8080);
