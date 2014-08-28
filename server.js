/* 
	First version of simple HTTP server
*/

var http = require("http");

// The callback function is defined as a parameter of createServer method.

/* 	To run the server:
	$>node server.js

	You'll see no output on the terminal
	On the browser: http://localhost:8888
	You'll see a Hello World! as a response from your server
*/

http.createServer(function(request, response) {
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("Hello World!");
	response.end();
}).listen(8888);