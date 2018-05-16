var express = require ('express');
var app = express();

app.get('/', function(request, response) {

response.Send('Working Perfetcly');

});

app.listen(8000);



// Print URL for accessing server
console.log('API is running on port 8000');
