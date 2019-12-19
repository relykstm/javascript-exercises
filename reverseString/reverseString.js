function reverseString(string){

var newArray = string.split('');

var newString = '';

for (i=newArray.length-1; i > -1; i--) {
    currentLetter = newArray[i];
    newString += currentLetter;
}

return newString;

}


module.exports = reverseString
