const request = require('request');

function getTemp(cityName, fn) {
    const url = 'http://api.openweathermap.org/data/2.5/weather?appid=01cc37655736835b0b75f2b395737694&units=metric&q=' + cityName;
    request(url, { json: true }, (error, response, body) => {
        if (error) return fn(error, null);
        if (!body.main) return fn(new Error('Cannot find city'), null);
        fn(null, body.main.temp);
    });
}

// getTemp('1823478173843', temp => console.log(temp));
getTemp('Hanoi', (error, temp) => {
    if (error) return console.log(error.message);
    console.log('Temp =', temp);
});
