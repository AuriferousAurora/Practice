humanReadable(0);
humanReadable(5);
humanReadable(121);
humanReadable(86399);
humanReadable(359999);

function humanReadable(n) {
    let ss = 00;
    let mm = 00;
    let hh = 00;

    const format = () => {
        if (ss < 10) ss = '0' + ss;
        if (mm < 10) mm = '0' + mm;
        if (hh < 10) hh = '0' + hh;

        return hh + ':' + mm + ':' + ss;
    }

    if (n < 60) { 
        ss = n;
    } else if (n >= 60 && n < 60 * 24) {
        mm = Math.floor(n / 60);
        ss = n % 60;
    } else {
        hh = Math.floor(n / (60 * 60));
        mm = Math.floor((n - (hh * 60 * 60)) / 60);
        ss = n % 60; 
    }
    return format();
}