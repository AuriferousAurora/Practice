// These work when n is 1, but I'll need to ensure that the returned object is what is used for subsequent iterations. Thus restructuring is in order.
let str = "This is a test!";

function encrypt(text, n) {
    let count = n;
    let arr = text.split('');
    let odds = [];
    let evens = [];
    for(let i = 0; i< arr.length; i++) {
        if(i % 2 == 0) evens.push(arr[i])
        else odds.push(arr[i]);
    }
    return odds.join('') + evens.join('');
}
  
function decrypt(encryptedText, n) {
    let count = n;
    let arr = encryptedText.split('')
    let first = [];
    let div;

    if(arr.length % 2 == 0) div = arr.length / 2;
    else div = arr.length / 2 + 0.5;
    
    first = arr.splice(0, div);
    second = arr.splice(div, arr.length);

    return first.join('') + arr.join('');
}

console.log(encrypt(str, 1));
console.log(decrypt(str, 1));