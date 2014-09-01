/*
  Call the right method to deal with request sent by user
  and uses response object to write the page

*/

function route(handle, pathname, response, postData) {
  console.log("About to route a request for "+pathname);

  //Test if the method defined on array handle is really a method.
  //If yes call it and send response object as a parameter
  //Otherwise return a 404 error 
  if (typeof handle[pathname] === 'function') {
    handle[pathname](response, postData);
  }
  else {
    console.log("No request handler found for "+pathname);
    response.writeHead(404, {"Content-type": "text/plain"});
    response.write("404 Page not found");
    response.end();
  }

}

exports.route = route;
