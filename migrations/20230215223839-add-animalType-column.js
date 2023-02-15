'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Animals', 'animalType', { type: Sequelize.STRING })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Animals', 'animalType')
  }
};
