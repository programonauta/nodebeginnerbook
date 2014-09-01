var http = require("http");
var url = require("url");

/*
Function start

Starts the server, and define the callback function 'on Request'
or createServer method.

Receive two parameters:
Method route (defined on module router.js) and the array handle
that links the slugs to the methods on requestHandlers module.

*/

function start(route, handle) {

	// onRequest is the callback function that responds request
	// sent by user when try to load a page on client side
	// See documentation about in
	// http://nodejs.org/api/http.html#http_event_request
	function onRequest(request, response) {

      //Parse the url to get the slug
		var pathname=url.parse(request.url).pathname; // get pathname
		console.log("Request for "+pathname+" received.");
      // Call the router with parameters:
      // handle: the array that link slug to method
      // pathname: the slug
      // response: object created by HTTP Server, see docs on
      // request
      // http://nodejs.org/api/http.html#http_class_http_serverresponse
      route(handle, pathname, response, request);
   }

	// Method to create a server and define the callback function
	// that answer the requests sent by users.
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
