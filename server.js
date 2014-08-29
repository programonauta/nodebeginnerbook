/*

*/

var http = require("http");
var url = require("url");

function start(route) {
	function onRequest(request, response) {
		var pathname=url.parse(request.url).pathname; // get pathname
		console.log("Request for "+pathname+" received.");

		route(pathname);

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
