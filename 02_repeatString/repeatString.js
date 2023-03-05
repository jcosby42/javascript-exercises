const repeatString = function(string, repeat) {
    if (repeat < 0) return 'ERROR';
    let total ='';
    for (let i = 0; i < repeat; i++){
        total += string;
    }
    return total;
};

// Do not edit below this line
module.exports = repeatString;
