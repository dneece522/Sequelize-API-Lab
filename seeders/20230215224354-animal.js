'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const date = new Date()

    await queryInterface.bulkInsert('Animals', [{
      animal: 'Pig',
      name: 'Buster',
      age: 15,
      animalType: 'Food',
      createdAt: date,
      updatedAt: date
    }])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Animals', null, {})
  }
};
