// app.js

const express = require('express');

const app = express();

app.get('/', (req, res) => {

  res.send('Hello denim! , Good morning Today :)!');

});

module.exports = app;
