var express = require('express');
var fs = require('fs');
//var buffer = new Buffer(27);

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    var lectura = new Buffer(fs.readFileSync('index.html'), "utf-8");
    response.send(lectura.toString("utf-8",0,27));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
