'use strict';

// Importa el módulo express para crear el enrutador.
const express = require('express');
// Importa el controlador de usuarios que contiene la lógica de las rutas.
const userController = require('../controllers/usuarioController');
// Crea una nueva instancia de enrutador de express.
const apiRoutes = express.Router();


apiRoutes.get('/getUser', async (req, res) => await userController.getUser(req, res));



// Exporta el enrutador para que pueda ser utilizado en otras partes de la aplicación.
module.exports = apiRoutes;
