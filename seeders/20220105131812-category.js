'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Categories', [
      {
          name: 'Pakaian',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
        name: 'Makanan',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Buku',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Sepatu',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Electronik',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      ], {});
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
