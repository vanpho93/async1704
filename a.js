const fs = require('fs');

fs.readFile('a.txt', 'utf8', (error, data) => {
    if (error) return console.log(error.message);
    console.log(data);
});

const data = fs.readFileSync('a.txt', 'utf8');
console.log(data);
