'use strict';

/** @type {import('sequelize-cli').Migration} */
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
    await queryInterface.bulkInsert("listings", [
      {
        modelName: "Alpha",
        unit: 101,
        price: 800000,
        sqft: 800,
        direction: "N",
        bedrooms: 1,
        washrooms: 1,
        parking: 1,
        locker: 1,
        sold: false,
        public: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        projectId: 1,
      },
      {
        modelName: "Bravo",
        unit: 102,
        price: 800000,
        sqft: 800,
        direction: "S",
        bedrooms: 1,
        washrooms: 1,
        parking: 1,
        locker: 1,
        sold: false,
        public: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        projectId: 1,
      },
      {
        modelName: "Charlie",
        unit: 103,
        price: 800000,
        sqft: 800,
        direction: "E",
        bedrooms: 1,
        washrooms: 1,
        parking: 1,
        locker: 1,
        sold: false,
        public: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        projectId: 1,
      },
      {
        modelName: "Delta",
        unit: 104,
        price: 800000,
        sqft: 800,
        direction: "W",
        bedrooms: 1,
        washrooms: 1,
        parking: 1,
        locker: 1,
        sold: false,
        public: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        projectId: 1,
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
    await queryInterface.bulkDelete("listings", null, {})
  }
};
