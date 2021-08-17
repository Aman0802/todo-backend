"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    queryInterface.bulkInsert("Todos", [
      {
        id: "fad43481-61b3-4a25-82e0-aa4d2463a1f2",
        name: "Task 1",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "31219076-6978-47e3-b24e-9a148730fc31",
        name: "Task 2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
