function removeChar(str){
    if (typeof(str) !== 'string' || str.length < 3) return 'Invalid argument';
    return str.slice(1, -1);
   };
   
   
console.log(removeChar('d_hello_f'));
   