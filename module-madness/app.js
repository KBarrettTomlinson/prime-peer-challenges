var http = require('http');
var heading = require('./modules/m1.js');
// var dollarAmount = require('./modules/m1.js');
// var min = 100;
// var max = 1000000;

http.createServer(function(request,response){
  var someHeading = heading.headingReturn();
  var someDollarAmount = heading.textNumberReturn();
  response.writeHead(200);
  response.write(someHeading + someDollarAmount);
  // response.write(someDollarAmount);
  response.end();
}).listen(3000);

console.log("I'm listening on your behalf");
