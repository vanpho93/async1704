const request = require('request');

function cong(a, b, cb) {
    const URL = `http://async1704.herokuapp.com/tinh/CONG/${a}/${b}`;
    if (isNaN(a) || isNaN(b)) return cb(new Error('Type error'));
    request(URL, (error, response, total) => {
        if (error) return cb(error);
        cb(null, total);
    });
}

function nhan(a, b, cb) {
    const URL = `http://async1704.herokuapp.com/tinh/NHAN/${a}/${b}`;
    if (isNaN(a) || isNaN(b)) return cb(new Error('Type error'));
    request(URL, (error, response, total) => {
        if (error) return cb(error);
        cb(null, total);
    });
}

function chia(a, b, cb) {
    const URL = `http://async1704.herokuapp.com/tinh/CHIA/${a}/${b}`;
    if (isNaN(a) || isNaN(b)) return cb(new Error('Type error'));
    request(URL, (error, response, total) => {
        if (error) return cb(error);
        cb(null, total);
    });
}

// (4 + 5) * 6 / 2
// cong(4, 5, (errorCong, resultCong) => {
//     if (errorCong) return console.log(errorCong);
//     nhan(resultCong, 6, (errorNhan, resultNhan) => {
//         if (errorNhan) return console.log(errorNhan);
//         chia(resultNhan, 2, (errorChia, resultChia) => {
//             if (errorChia) return console.log(errorChia);
//             console.log('KQ =', resultChia);        
//         })
//     });
// });

function tinhDienTichHinhThang(a, b, h, cb) {
    cong(a, b, (errorCong, resultCong) => {
        if (errorCong) return cb(errorCong);
        nhan(resultCong, h, (errorNhan, resultNhan) => {
            if (errorNhan) return cb(errorNhan);
            chia(resultNhan, 2, (errorChia, resultChia) => {
                if (errorChia) return cb(errorChia);
                cb(null, resultChia);        
            });
        });
    });
}

tinhDienTichHinhThang(4, 5, 6, (error, result) => console.log(error || result));
