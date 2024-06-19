'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Materia extends Model {
    static associate(models) {
      Materia.belongsTo(models.Carrera, { foreignKey: 'carreraId', as: 'carrera' }); 
    }
  }
  Materia.init({
    nombre: DataTypes.STRING,
    cuatrimestral: DataTypes.NUMBER,
    anio: DataTypes.NUMBER,
    carreraId: DataTypes.NUMBER
  }, {sequelize,
      modelName: 'Materia',
      timestamps: false
  });
  return Materia;
}
