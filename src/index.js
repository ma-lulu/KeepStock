const express = require("express");
const router = express.Router();
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
const db = require('./dao/db');
// const Usuario = require('./models/usuario');
const usuarioController = require('./controller/login')

app.use(express.json());
app.use(bodyParser.urlencoded({extend:true}));
app.use(usuarioController);

app.listen(3030, ()=>{
    console.log("servidor rodando")
});