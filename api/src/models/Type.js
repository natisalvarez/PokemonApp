const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
    sequelize.define('type', {
        Id: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false
        }
    });
};