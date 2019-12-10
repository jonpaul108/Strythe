const express = require('express');
const path = require('path');

const app = express();
const port = '3030';

app.use('/', express.static(path.join(__dirname, '../public/dist')));

app.get('/home', (req, res) => {
    res.send('Hello World');
});

app.listen(port, (err) => {
    if (err) {
        console.log('err: ', err);
    }
});