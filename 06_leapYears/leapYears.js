/*determine if a year is a leap year*/
const leapYears = function(year) {
    return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0); //

    //This solution is fine and also mine
    /*if (!Number.isInteger(year)) return "ERROR";
    if (year % 400 === 0) return true;
    if (year % 4 === 0 && year % 100 !== 0) return true;
    return false;*/
};

// Do not edit below this line
module.exports = leapYears;
