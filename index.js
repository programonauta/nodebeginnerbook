/*
  Third version of simple HTTP server
  -----------------------------------

  This file start the server, first calling a module named 'server'
  and starting it.

  Notice that this file just call the method start.
*/

var server = require("./server");

server.start();
