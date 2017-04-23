var convert = require('./m2.js');
var randomNumber = require('./m3.js');

var someNum = 0;
var newString;
var min = 100;
var max = 1000000;

function textNumberReturn(){
  someNum = randomNumber(min,max);
  newString = convert(someNum);
  return newString;
}

function headingReturn(){
  return "Account Balance: \n";
}

module.exports = {
  "textNumberReturn" : textNumberReturn,
  "headingReturn" : headingReturn
};
