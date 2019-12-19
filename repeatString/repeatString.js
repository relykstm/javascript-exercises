function repeatString(string, number) {
        if (number < 0){
            return "ERROR";
        }    

        var newString = '';

        for (i=0; i<number; i++){
            newString += string;
        }

        return newString;
    
    }

module.exports = repeatString
