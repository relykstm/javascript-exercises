const sumAll = function(a,b) {


    if (a < 0){
        return "ERROR";
    }
    if (b < 0){
        return "ERROR";
    }

    if (typeof a != 'number') {
        return "ERROR";
    }

    if (typeof b != 'number') {
        return "ERROR";
    }


    var low = a;
    var high = b;

    if (a>b){
        low = b;
        high = a;
    }

    var sum = 0;

    for (i=low; i < high+1; i++){
        sum += i;
    }

    return sum;
}

module.exports = sumAll
