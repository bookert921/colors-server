'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class color extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  color.init({
    color_name: DataTypes.STRING,
    hex_value: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'color',
  });
  return color;
};