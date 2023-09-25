const express = require('express');

const router = express.Router();

const mongoose = require('mongoose');

const eschema = mongoose.Schema;


const eschemausuario = new eschema({
  nombre: String,
  email: String,
  telefono: String,
  idusuario: String
});

const ModeloUsuario = mongoose.model('usuarios', eschemausuario);

module.exports = router


router.post('/agregarusuario', (req, res) => {
  const nuevousuario = new ModeloUsuario({
    nombre: req.body.nombre,
    email: req.body.email,
    telefono: req.body.telefono,
    idusuario: req.body.idusuario
  })

  nuevousuario.save()
    .then(() => {
      res.send('Usuario agregado correctamente');
    })
    .catch((err) => {
      res.status(500).send(err); // Puedes personalizar el manejo de errores aquí
    });
})



//obtenerusuarios
router.get('/obtenerusuarios', (req, res) => {
  ModeloUsuario.find({}).then((docs) => {
    res.send(docs)
  }).catch((err) => {
    res.send(err);
  });
});





router.post('/obtenerdatausuario', (req, res) => {
  ModeloUsuario.find({ idusuario: req.body.idusuario }).then((docs) => {
    res.send(docs)
  }).catch((err) => {
    res.send(err);
  });
})


//actualizausuario

router.post('/actualizausuario', (req, res) => {
 
  ModeloUsuario.findOneAndUpdate({ idusuario: req.body.idusuario }, {
    nombre: req.body.nombre,
    email: req.body.email,
    telefono: req.body.telefono
  }).then((docs) => {
    res.send(docs)
  }).catch((err) => {
    res.send(err);
  });
})

//borrarusuario

router.post('/borrarusuario', (req, res) => {
  ModeloUsuario.findOneAndDelete({ idusuario: req.body.idusuario }).then((docs) => {
    res.send(docs)
  }).catch((err) => {
    res.send(err);
  });
})









