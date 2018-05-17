var express = require ('express');
var app = express();
var mangoose = require('mangoose');


app.get('/', function(request, response) {

response.Send('API working ');

});

app.listen(8000);
// Print URL for accessing server
console.log('API is running on port 8000');
