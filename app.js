const express = require('express')
var app = express()
const body_parser = require('body-parser');
const cors = require('cors');

app.use(body_parser.json())
app.use(body_parser.urlencoded({ extended: true }));

app.use(cors());

app.listen(process.env.PORT || 8000)
console.log('servidor', process.env.PORT || 8000)