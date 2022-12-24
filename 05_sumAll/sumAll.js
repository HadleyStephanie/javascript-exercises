const sumAll = function(startNum, endNum) {
    let finalSum = 0; 

    if (startNum < 0 || !Number.isInteger(startNum) || !Number.isInteger(endNum)){
        return "ERROR";
    }

    if (startNum > endNum) {
        for (let i = startNum; i >= endNum; i--){
            finalSum += i;
        }
    } else {
        for (let i = startNum; i <= endNum; i++){
            finalSum += i; 
        }
    }
    return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
