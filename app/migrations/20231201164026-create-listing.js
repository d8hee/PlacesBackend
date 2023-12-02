'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('listings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      modelName: {
        type: Sequelize.STRING
      },
      unit: {
        type: Sequelize.INTEGER
      },
      price: {
        type: Sequelize.INTEGER
      },
      sqft: {
        type: Sequelize.INTEGER
      },
      direction: {
        type: Sequelize.STRING
      },
      bedrooms: {
        type: Sequelize.INTEGER
      },
      washrooms: {
        type: Sequelize.INTEGER
      },
      parking: {
        type: Sequelize.INTEGER
      },
      locker: {
        type: Sequelize.INTEGER
      },
      sold: {
        type: Sequelize.BOOLEAN
      },
      public: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      // add a belongsTo() association
      // creating projectID column, and setting reference
      // need hasMany() in the referenced model file.
      projectId: {
        type: Sequelize.INTEGER,
        references: {
          // match table name
          model: "projects",
          key: "id",
          as: "projectId"
          //prev mistyped as 'projectID'
        }
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('listings');
  }
};