/*
	Second version of simple HTTP server
	With console messages
*/

var http = require("http");

/*
	The callback function is defined as a
	parameter of createServer method.
*/

/* 	To run the server:
	$>node server.js

	You'll see no output on the terminal
	On the browser: http://localhost:8888
	You'll see a Hello World! as a response from your server

	In this version, you'll see a message on the terminal saying
	the server had started.
	This is to show that the call back function will be called only
	when a request arrvied on the server.

*/

function onRequest(request, response) {
	console.log("Request received.");
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("Hello World!");
	response.end();
}

http.createServer(onRequest).listen(8888);
console.log("Server has started.");
