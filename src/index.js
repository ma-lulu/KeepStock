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

//configurações do CSS
const paginasPath = path.join(__dirname, '../', 'clients');
app.use('/clients', express.static(paginasPath,{
    setHeaders: (res, path) => {
        if (path.endsWith('.css')){
            res.setHeader('Content-Type', 'text/css');
        }
    },
}));