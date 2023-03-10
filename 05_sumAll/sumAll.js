const sumAll = function(a, b) {
    if (a < 0 || b < 0) return "ERROR";
    if (!Number.isInteger(a) || !Number.isInteger(b)) return "ERROR";

    let total = 0;
    //I want to put this in a separate function 
    let start, end;
    if (a < b){
        start = a;
        end = b;
    } else {
        start = b;
        end = a;
    }

    for (let i = start; i <= end; i++){
        total += i;
    }
    return total;
};
// Do not edit below this line
module.exports = sumAll;
