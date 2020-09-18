// console.log(1);
// console.log(2);
// setTimeout(() => {
//     console.log('The callback function fired.')
// }, 2000);
// console.log(3);
// console.log(4);

// const req = new XMLHttpRequest();

// req.addEventListener('readystatechange', () => {
//     //console.log(req, req.readyState);
//     if(req.readyState === 4) {
//         console.log(req.responseText);
//     }
// })

// req.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
// req.send();

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(json => console.log(json))
// window.onload = function() {
    // let fruits = ['banana', 'apple', 'pear'];

    // function callback(val) {
    //     console.log(val);
    // }
    // fruits.forEach(callback);
    // console.log('done');

//     function handleError(jqXHR, textStatus, err) {
//         console.log(err);
//     }

//     $.ajax({
//         type: 'GET',
//         url: 'https://jsonplaceholder.typicode.com/todos/1',
//         success: callbackB,
//         error: handleError
//     });

//     function callbackB(data) {
//         console.log(data);
//         $.ajax({
//             type: 'GET',
//             url: 'https://jsonplaceholder.typicode.com/todos/2',
//             success: callbackC,
//             error: handleError
//         })
//     }

//     function callbackC(data) {
//         console.log(data);
//         $.ajax({
//             type: 'GET',
//             url: 'https://jsonplaceholder.typicode.com/todos/3',
//             success: (data) => { console.log(data); },
//             error: handleError
//         })
//     }
// }

window.onload = function() {

    function get(url) {
        return new Promise((res, rej) => {
            let xhttp = new XMLHttpRequest();
            xhttp.open('GET', url, true);
            xhttp.onload = function() {
                if(xhttp.status == 200) res(JSON.parse(xhttp.response));
                else rej(xhttp.statusText);
            };
            xhttp.onerror = function() {
                rej(xhttp.statusText);
            };
            xhttp.send();
        });
    }
    let promise = get('https://jsonplaceholder.typicode.com/todos/1');
    promise.then(function(data) {
        console.log(data);
        return get('https://jsonplaceholder.typicode.com/todos/2');
    }).then(function(data) {
        console.log(data);
        return get('https://jsonplaceholder.typicode.com/todos/3');
    }).then(function(data) {
        console.log(data);
    }).catch(function(error) {
        console.log(error);
    })
}

