'use strict';
const bcrypt = require('bcryptjs');

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

      return queryInterface.bulkInsert('Users', [
        {
          email: 'demo@user.io',
          firstName: "Demo",
          lastName: "User",
          username: 'Demo-lition',
          about: 'This brand is about...',
          hashedPassword: bcrypt.hashSync('password')
        },
        {
          email: 'user1@user.io',
          firstName: "Demo",
          lastName: "User",
          username: 'FakeUser1',
          hashedPassword: bcrypt.hashSync('password2')
        },
        {
          email: 'user2@user.io',
          firstName: "Demo",
          lastName: "User",
          username: 'FakeUser2',
          about: 'This brand is about...',
          hashedPassword: bcrypt.hashSync('password3')
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
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['Demo-lition', 'FakeUser1', 'FakeUser2'] }
    }, {});
  }
};
