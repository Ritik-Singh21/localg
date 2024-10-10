// app.js

const express = require('express');

const app = express();

app.get('/', (req, res) => {

  res.send('Hello denim! , Good morning Today :)! Ritik');
  res.send ("Let's talk about the world familiar tings which are happening currently");

});

module.exports = app;
