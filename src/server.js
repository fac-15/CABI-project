const express = require('express');
const app = express();
// const fs = require("fs");
const port = process.env.PORT || 5000;
const Api = require('./api')

//console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));


app.get("/riskres", (req, res) => {
  Api().then(result => {
    res.send(result);
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:1234');})
    .catch(err => console.log(err))
});


//create a GET route
app.get('/express_backend', (req, res) => {
    res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

app.get('*', (req, res) => {
    res.sendFile(path.resolve('public', 'index.html'));
});

app.get('/crop', (req, res, next) => {
    res.send(factsheet);
});
