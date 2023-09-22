const express = require('express');
const conectDB = require('./conexion');
const app = express();

const rutausuario = require('./rutas/usuario');

const bodyParser = require('body-parser');




conectDB();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));

app.use('/api/usuario', rutausuario);

app.get('/', (req, res)=>{
    res.send('hola')
})

app.listen(4000, ()=>{
    console.log("El server esta conectado");
})

