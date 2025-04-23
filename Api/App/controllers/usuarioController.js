'use strict';

const { result } = require('lodash');
// Importa la configuración de la base de datos y el modelo de usuario.
const db = require('../config/db');
const user = db.user;
const sequelize = require('sequelize')



/**
 * Obtiene todos los usuarios de la base de datos.
 */


async function getUser(req, res) {
    try {
        // Busca todos los usuarios en la base de datos.
        const users = await user.findAll();
        // Responde con un código de estado 200 (OK) y la lista de usuarios en formato JSON.
        res.status(200).json(users);
    } catch (error) {
        // Si ocurre un error, responde con un código de estado 500 (Error interno del servidor) y un mensaje de error.
        res.status(500).json({ message: error.message || "Sucedió un error inesperado" });
    }
}


// Exporta las funciones para que puedan ser utilizadas en otras partes de la aplicación.
module.exports = {
    getUser
};
