'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class listing extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      listing.belongsTo(models.project, {
        foreignKey:"projectId",
        // Sequelize's onDelete option for 'cascading deletion'. Projects are deleted if a builder is deleted.
        onDelete: "CASCADE",
      })
    }
  }
  listing.init({
    modelName: DataTypes.STRING,
    unit: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    sqft: DataTypes.INTEGER,
    direction: DataTypes.STRING,
    bedrooms: DataTypes.INTEGER,
    washrooms: DataTypes.INTEGER,
    parking: DataTypes.INTEGER,
    locker: DataTypes.INTEGER,
    sold: DataTypes.BOOLEAN,
    public: DataTypes.BOOLEAN,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'listing',
  });
  return listing;
};