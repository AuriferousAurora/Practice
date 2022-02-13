function solution(number) {
    let n = number;
    let r = '';
    while (n >= 1000) {
        r += 'M';
        n -= 1000; 
    }
    while (n >= 500) {
        r += 'D';
        n -= 500;
    }
    while (n >= 100) {
        r += 'C';
        n -= 100;
    }
    while (n >= 50) {
        r += 'L';
        n -= 50;
    }
    while (n >= 10) {
        r += 'X';
        n -= 10;
    }
    let i = n % 5;
    if ( i > 3) {
        if (n == 9) r += 'IX';
        if (n == 4) r += 'IV';
    } else {
        let is = 'I'.repeat(i);
        if (n >= 5) r += 'V' + is;
        if (n <= 3 && n > 0) r+= is;
    }
    console.log(r);
    return r;
}

function solution2(number) {
    const chars = 'MDCLXVII';
    const nums = [1000, 500, 100, 50, 10, 5, 1];

    let n = number;
    let r = '';
    for (let i = 0; i < 7; i++) {
        while (n >= nums[i]) {

            y = nums[i - 1] - 1;
            console.log(y);
            if (n == y) {
                r += chars [i + 1] + chars[i - 1];
                n -= y;
                break;
            } else {
                r += chars[i];
                n -= nums[i];
            }
        }
    }
    console.log(r);
    return r;
}
// solution2(9)
// solution2(8);
// solution2(7);
// solution2(6);
// solution2(5);
solution2(4);
solution2(9);
solution2(49);
// solution2(3);

function romanize(num) {
    var lookup = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1},roman = '',i;
    for ( i in lookup ) {
      while ( num >= lookup[i] ) {
        roman += i;
        num -= lookup[i];
      }
    }
    return roman;
  }

// in base 5, if a value is x - 1 (e.g. 4), a character of x - 1 should be appended to the front of x. else just x or x and 3(x-1) 