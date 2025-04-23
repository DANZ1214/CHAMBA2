'use strict';

const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const App = express();

// CORS
App.use(cors({ origin: '*' }));

// Body parsers
App.use(express.json({ limit: '10mb' }));
App.use(express.urlencoded({ extended: false }));



// Rutas API
const userRoutes = require('./routes/usuarioRoutes');

App.use('/api/unicah/user', userRoutes);

module.exports = App;
