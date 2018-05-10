const request = require('request');

const URL = 'http://api.openweathermap.org/data/2.5/weather?appid=01cc37655736835b0b75f2b395737694&units=metric&q=Tokyo';

request(URL, { json: true }, (error, response, body) => {
    console.log(body.main.temp);
});
