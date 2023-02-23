'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    options.tableName = 'Comments';  
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
      return queryInterface.bulkInsert(options, [
        {
          userId: 2,
          imageId: 1,
          comment: 'nice sketch!!',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          imageId: 2,
          comment: 'so cute!',
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
      return queryInterface.bulkDelete('People', null, {});
    */
      options.tableName = 'Comments';  
      return queryInterface.bulkDelete(options, null, {});
  }
};
