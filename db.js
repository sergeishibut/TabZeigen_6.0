const express = require('express'); //framework
const db = require('./db');
const app = express(); //obj server
const port = 3000;

app.use(express.static(__dirname)); //files aus direkt Ordner