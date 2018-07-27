const one = 3421;
const two = 3456;
const three = 34;

function KaprekarsConstant (num) {
    // Number is mutated into a string and split by individual digit.
    numArr = ('' + num).split('');
    // If the length of the array is 4 or less, a zero is appended to the array to fill in the gaps.
    if (numArr.length < 4) {
        let zeroNum = (4 - numArr.length);
        for (let i = 0; i < zeroNum; i++) {
            numArr.push('0');
        }
    }
    // The array is saved into two variables: one in ascending order and one in descending order.
    const ascArr = numArr.sort();
    const descArr = numArr.slice().reverse();

    const asc = ascArr.join('');
    console.log(+asc);
    // Subtract smaller number from bigger number. Then repeat until 6174.
    const kc = 6174;



    
    // while (retNum !== kc) {
    //     newNum = desc - asc;
    //     console.log(newNum);
    //     retNum = newNum;
    // }

    // Keep track of number of times above step is repeated. Return that number.
}

KaprekarsConstant(three);

// KaprekarsConstant(two);