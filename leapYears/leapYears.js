const leapYears = function(year) {
    //is a leap year?
    
        if (year % 4 === 0){
            if (year % 100 === 0){
                if (year % 400 === 0){
                    return true;
                } else {
                    return false;
                }
            }
          return true;
        } else {
            return false;
        }
    
    }

module.exports = leapYears
