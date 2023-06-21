const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
    Id: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false
    },
    image: {
      type: DataTypes.STRING,
      defaultValue: 'https://m.media-amazon.com/images/I/41gk1hzeG6L._AC_UF1000,1000_QL80_.jpg',
    },
    life: {
      type: DataTypes.STRING,
      defaultValue: 100,
    },
    attack: {
      type: DataTypes.INTEGER,
      defaultValue: 50,
    },
    defense: {
      type: DataTypes.INTEGER,
      defaultValue: 50
    },
    speed: {
      type: DataTypes.INTEGER,
      defaultValue: 50
    },
    height: {
      type: DataTypes.INTEGER,
      defaultValue: 10
    },
    weight: {
      type: DataTypes.INTEGER,
      defaultValue: 100
    }
  });
};
