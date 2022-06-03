const date = new Date("2022/04/07");
console.log(date.toLocaleString());
date.setDate(date.getUTCDate() - 7);
console.log(date.toLocaleString());

const array1 = [1,2,3,4,5,6];
const array2 = ["umar","misba","show pain"];

const app = require('express')
app.get('/api1', (req, res) => {
    req.send(array1);
});
app.get('/api2', (req, res) => {
    req.send(array2);
});
module.exports = app;