function convert(number){
    number = number.toString();
    return "$" + number + ".00 \n";
}

module.exports = convert;
