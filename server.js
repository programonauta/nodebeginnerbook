/*
	Third version of simple HTTP server
	-----------------------------------
	Now was created another file (index.js) to start the server.
	This file was transformed in a module.
*/

var http = require("http");

/*
	The callback function is defined as a
	parameter of createServer method.
*/

/* 	To run the server:
	Please check index.js file
*/

function start() {
	function onRequest(request, response) {
		console.log("Request received.");
		response.writeHead(200, {"Content-Type": "text/plain"});
		response.write("Hello World!");
		response.end();
	}

	http.createServer(onRequest).listen(8888);
	console.log("Server has started.");
}

exports.start = start;

/*
	This line export the function start as an object that works as
	a method of module.

	i.e. on the other file that call this method:

	var server = require("./server");

	server.start();
*/
