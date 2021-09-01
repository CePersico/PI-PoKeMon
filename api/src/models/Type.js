//const {v4: uuid} = require('uuid');

// - [ ] Tipo con las siguientes propiedades:
//   - ID
//   - Nombre

const { DataTypes, UUID } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  
  sequelize.define('type', {
    name: {
        type: DataTypes.STRING,
        primaryKey: true,
        unique: true,        
        allowNull: false,
      },
    id: {
        type: DataTypes.UUID,
    }
    });
  };