'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
      return queryInterface.bulkInsert('Albums', [
        {
          userId: 2,
          title: 'Fall 2022',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          title: 'Spring 2022',
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
     
     return queryInterface.bulkDelete('Albums', null, {});
  }
};
