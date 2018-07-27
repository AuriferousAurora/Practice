function TimeConvert (num) {
    let hours = Math.floor(num / 60);
    let minutes = (num % 60);
    return (hours + ':' + minutes).toString();
}

console.log(TimeConvert(45));