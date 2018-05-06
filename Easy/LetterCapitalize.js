string = 'i am an important sentence and thus have need for every word to be capitalized';

function LetterCapitalize (str) {
    let words = str.split(' ');
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].substring(0,1).toUpperCase() + words[i].substring(1);
    }
    return words.join(' ');
}

function LetterCapitalizeTwo (str) {
    return str.replace(/\b[a-z]/gi, (i) => {
        return i.toUpperCase();
    });
}

console.log(LetterCapitalize(string));
console.log(LetterCapitalizeTwo(string));