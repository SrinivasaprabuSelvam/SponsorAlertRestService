var http = require('http');
 
var PORT = 8089;
 
var server = http.createServer(function (request, response) {
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  response.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  response.setHeader('Access-Control-Allow-Credentials', true);
 
var requestBody = '';
  request.on('data', function (data) {
    requestBody += data;
  });
  request.on('end', function () {
    handleRequest(request, response, requestBody);
  });
});
 
function handleRequest(request, response, requestBody) {
  console.log(request.method + ":" + request.url + ' >>' + requestBody);
 
    if (request.method == 'POST') {
                  //dummy implementation
      response.end('post not supported');
    } else {
      response.end('{\"actionItem\":[\"There are 18 participant transaction requests that require your action\",  \"A document is ready for your Signature\", \"You have custom portfolio recommendations to approve\"], \"Messages\" : [\"TIAA Department of Labour Testimony on Proposed Fiduciary Rule\", \"Supreme Court confirms ERISA Plan Proposed Fiduciary\'s duty to monitor investments\", \"Test Message3.....\"]}');
    }
 
}
 
server.listen(PORT, function () {
  console.log('Server running...');
});