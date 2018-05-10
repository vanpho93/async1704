const request = require('request');

function cong(a, b) {
    return new Promise((resolve, reject) => {
        const URL = `http://async1704.herokuapp.com/tinh/CONG/${a}/${b}`;
        if (isNaN(a) || isNaN(b)) return reject(new Error('Type error'));
        request(URL, (error, response, total) => {
            if (error) return reject(error);
            resolve(total);
        });
    });
}

function nhan(a, b) {
    return new Promise((resolve, reject) => {
        const URL = `http://async1704.herokuapp.com/tinh/NHAN/${a}/${b}`;
        if (isNaN(a) || isNaN(b)) return reject(new Error('Type error'));
        request(URL, (error, response, total) => {
            if (error) return reject(error);
            resolve(total);
        });
    });
}

function chia(a, b) {
    return new Promise((resolve, reject) => {
        const URL = `http://async1704.herokuapp.com/tinh/CHIA/${a}/${b}`;
        if (isNaN(a) || isNaN(b)) return reject(new Error('Type error'));
        request(URL, (error, response, total) => {
            if (error) return reject(error);
            resolve(total);
        });
    });
}

cong(4, 'x')
.then(result => console.log(result))
.catch(error => console.log(error.message));
