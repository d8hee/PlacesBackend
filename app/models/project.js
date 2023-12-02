'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class project extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      project.belongsTo(models.builder, {
        foreignKey:"builderId",
        // Sequelize's onDelete option for 'cascading deletion'. Projects are deleted if a builder is deleted.
        onDelete: "CASCADE",
      }),
      // another association for a project to have many listings
      project.hasMany(models.listing, {
        foreignKey: "projectId",
        // as: "projects",
      })
    }
  }
  project.init({
    name: DataTypes.STRING,
    city: DataTypes.STRING,
    launch: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'project',
  });
  return project;
};