/*
  4th version of simple HTTP server
  -----------------------------------

  Creating a route.

  "Making different HTTP requests point at different parts of our code"

  There are two modules:
    server: receive the main request, parse it and call router to deal the
            request.
    router: the file that directs the request

*/

var server = require("./server");
var router = require("./router");

server.start(router.route);
