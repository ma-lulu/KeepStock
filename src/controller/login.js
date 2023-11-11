const express = require("express");
const path = require("path");

const spawnSync = require('child_process');

const router = express.Router();
// const conexao = require('../dao/db');
// const usuario = require('../models/usuario')

router.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname, "../../clients/sign-up", "index.html"))
})

//Padrão singleton
module.exports = router;