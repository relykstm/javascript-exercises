const palindromes = function(string) {
    var array = string.split('');
    var newArray = [];
    for (var i=array.length-1; i>-1; i--) {
        if (array[i].toUpperCase() != array[i].toLowerCase()) {
            newArray.push(array[i].toLowerCase());
        } else {
            continue;
        }
    }

    var arrayLower = [];

    for (var i=0; i < array.length; i++) {
        if (array[i].toUpperCase() != array[i].toLowerCase()) {
            arrayLower.push(array[i].toLowerCase());
        } else {
            continue;
        }
    }

    if (arrayLower.join('') == newArray.join('')){
        return true;
    } else {
        return false;
    }

//     var sameLength = arrayLower.length === newArray.length;
// //do they have the same values
//     var sameValues = true;
//         for (var i = 0; i < arrayLower.length; i++){
//             if (arrayLower[i] !== newArray[i]){
//             sameValues = false;
//             break;
//             }
//         }

//     if (sameValues && sameLength){
//     return true;
//     }

//     else {
//     return false;
}

module.exports = palindromes


