const express = require('express');
const bodyParser = require('body-parser');
const Cors = require('cors')
const app = express()
const port = 3001
const User = require('./Routes/User')
const Login = require('./Routes/Login')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(Cors());

app.use('/User', User )
app.use('/Login', Login)

app.listen(port, ()=>{console.log(`Back rodando na porta ${port}`)})