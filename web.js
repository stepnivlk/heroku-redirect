var express = require('express');
var app = express();

var newBaseURL = process.env.NEW_BASE_URL || 'http://example.com';
var port = process.env.PORT || 5000;

function addHeaders(request, response) {
  var headers = request.headers;

  Object.keys(headers).forEach(key => {
    var value = headers[key]
    response.header(key, value)
  });
};

app.get('*', function(request, response) {
  addHeaders(request, response)
  response.redirect(newBaseURL + request.url);
});

app.post('*', function(request, response) {
  addHeaders(request, response)
  response.redirect(newBaseURL + request.url);
});

app.patch('*', function(request, response) {
  addHeaders(request, response)
  response.redirect(newBaseURL + request.url);
});

app.put('*', function(request, response) {
  addHeaders(request, response)
  response.redirect(newBaseURL + request.url);
});

app.delete('*', function(request, response) {
  addHeaders(request, response)
  response.redirect(newBaseURL + request.url);
});

app.listen(port, function() {
  console.log("Listening on " + port);
});
