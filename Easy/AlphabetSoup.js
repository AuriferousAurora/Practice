one = 'coderbyte';
two = 'hooplah';

function AlphabetSoup (str) {
    stringArray = str.split('');
    sortedArray = stringArray.sort();
    return sortedArray.join('');
}

AlphabetSoup(one);