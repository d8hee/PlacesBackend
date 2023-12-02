'use strict';

/** @type {import('sequelize-cli').Migration} */
// these 2 exports alter the database
// up: changes database
// down: drops changes if/when needed
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert("projects", [
      {
        name: "Four By Four",
        city: "Toronto",
        launch: "2080-01-01",
        createdAt: new Date(),
        updatedAt: new Date(),
        builderId: 1,
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("projects", null, {})

  }
};
