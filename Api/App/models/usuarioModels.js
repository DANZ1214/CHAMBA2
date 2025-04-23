'use strict';

const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
    const attributes = {
        
        userId: {
            type: DataTypes.STRING(13),
            primaryKey: true,
            allowNull: false
        },
        
        contraseña: {
            type: DataTypes.STRING(15),
            allowNull: false
        },
        
        email: {
            type: DataTypes.STRING(50),
            allowNull: false
        },

        nombre: {
            type: DataTypes.STRING(50),
            allowNull: false
        },

        telefono: {
            type: DataTypes.STRING(9),
            allowNull: false
        },
        
    };

    const options = {
        defaultScope: {
            attributes: { exclude: ['createdAt', 'updatedAt'] }
        },
        tableName: 'Usuario',
        timestamps: false,
    };

   
    return sequelize.define('Usuario', attributes, options);
};
