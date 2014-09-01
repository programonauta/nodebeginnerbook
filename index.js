/*
  6th version of simple HTTP server
  -----------------------------------

  Explain about blocking and non-blocking
  
  Create an array to help the handler

*/

var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

// Create an array to define the methods to handle each request
var handle = {};

handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;


server.start(router.route, handle);
