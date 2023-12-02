// Sequelize model looks for table w plural form of model name

'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class builder extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      builder.hasMany(models.project, {
        // create a foreignKey
        foreignKey: "builderId",
        // as: "builders",
      })
    }
  }
  builder.init({
    username: DataTypes.STRING,
    email: DataTypes.STRING,
  },
    {
      sequelize,
      modelName: 'builder',
    });
  return builder;
};