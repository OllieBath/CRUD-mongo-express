const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({ extended: true }))
app.set("view engine", "ejs");

const PORT = 3000;
const connectDB = require('./database/connection')
connectDB();

app.use('/', require('./routes/router'))

// listen on localhost
app.listen(3000,()=>{console.log(`server is running on http://localhost:${PORT}`)});