one = '+d+=3=+s+';
two = 'f++d+';

function SimpleSymbols (str) {
    // If the first letter of the string is not a alphabetical character...
    if (/[a-z]/gi.test(str[0]) === false) {
        // Run a loop for the length of the input string that stops on every alphabetical character.
        for (let i = 0; i < str.length; i++){
            // If that character is preceded and followed by a '+', return true.
            if (/[a-z]/gi.test(str[i]) === true) {
                if (str[i - 1] === String.fromCharCode(43) && str[i + 1] === String.fromCharCode(43)) {
                    return true;
                } else {
                    return false;
                }
            } 
        }
    } else {
        return false;
    }
}

console.log(SimpleSymbols(one));
console.log(SimpleSymbols(two));