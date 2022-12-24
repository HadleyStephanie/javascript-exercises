const repeatString = function(str, num) {
    if (num < 0) {
        return "ERROR";
    }

    let myStr = "";

    for (i=0; i<num; i++){
        myStr += str;
    }
    
    return myStr;
};

// Do not edit below this line
module.exports = repeatString;
