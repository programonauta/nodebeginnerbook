/*
  7th version of simple HTTP server
  -----------------------------------

   Now the version with upload file

*/

var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

// Create an array to define the methods to handle each request
var handle = {};

handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;
handle["/show"] = requestHandlers.show;

// Call the method to start server, passing route method as well the handle array
server.start(router.route, handle);
