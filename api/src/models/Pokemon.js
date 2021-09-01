const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

// - [ ] Pokemon con las siguientes propiedades:
//   - ID (Número de Pokemon) * : No puede ser un ID de un pokemon ya existente en la API pokeapi
//   - Nombre *
//   - Vida
//   - Fuerza
//   - Defensa
//   - Velocidad
//   - Altura
//   - Peso

module.exports = (sequelize) => {
  
  sequelize.define('pokemon', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    attack: {
      type: DataTypes.INTEGER,
    },
    hp: {
      type: DataTypes.INTEGER,
    },
    defense: {
      type: DataTypes.INTEGER,
    },
    speed: {
      type: DataTypes.INTEGER,
    },
    height: {
      type: DataTypes.INTEGER,
    },
    weight: {
      type: DataTypes.INTEGER,
    },
    createdInDb:{ 
      type: DataTypes.BOOLEAN,
      defaultValue: true, 
      allowNull: false    
    }
  });
};


