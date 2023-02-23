'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    options.tableName = 'Photos';  
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
          userId: 3,
          description: 'sketching a top!',
          imageUrl: "https://res.cloudinary.com/dnmimxgbu/image/upload/v1677135917/1655958030581_qaxofd.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          description: 'Mckenna ribbed eyelet crop top',
          imageUrl: "https://res.cloudinary.com/dnmimxgbu/image/upload/v1677136001/MW994A-1501S16200P_0_750x_pdytbm.webp",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          description: 'Lidia pants',
          imageUrl: "https://res.cloudinary.com/dnmimxgbu/image/upload/v1677136482/MH510-Z260S1620000_0_dc24dab0-4605-493c-a127-7f1e3883076b_750x_qqaoqm.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 7,
          description: '1992 Runway Blue Rose Corset',
          imageUrl: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          description: 'sketching a top!',
          imageUrl: "https://res.cloudinary.com/dnmimxgbu/image/upload/v1677135917/1655958030581_qaxofd.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          description: 'sketching a top!',
          imageUrl: "https://res.cloudinary.com/dnmimxgbu/image/upload/v1677135917/1655958030581_qaxofd.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          description: 'sketching a top!',
          imageUrl: "https://res.cloudinary.com/dnmimxgbu/image/upload/v1677135917/1655958030581_qaxofd.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          description: 'sketching a top!',
          imageUrl: "https://res.cloudinary.com/dnmimxgbu/image/upload/v1677135917/1655958030581_qaxofd.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          description: 'sketching a top!',
          imageUrl: "https://res.cloudinary.com/dnmimxgbu/image/upload/v1677135917/1655958030581_qaxofd.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          description: 'sketching a top!',
          imageUrl: "https://res.cloudinary.com/dnmimxgbu/image/upload/v1677135917/1655958030581_qaxofd.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          description: 'sketching a top!',
          imageUrl: "https://res.cloudinary.com/dnmimxgbu/image/upload/v1677135917/1655958030581_qaxofd.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          description: 'sketching a top!',
          imageUrl: "https://res.cloudinary.com/dnmimxgbu/image/upload/v1677135917/1655958030581_qaxofd.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          description: 'sketching a top!',
          imageUrl: "https://res.cloudinary.com/dnmimxgbu/image/upload/v1677135917/1655958030581_qaxofd.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          description: 'sketching a top!',
          imageUrl: "https://res.cloudinary.com/dnmimxgbu/image/upload/v1677135917/1655958030581_qaxofd.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          description: 'sketching a top!',
          imageUrl: "https://res.cloudinary.com/dnmimxgbu/image/upload/v1677135917/1655958030581_qaxofd.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          description: 'sketching a top!',
          imageUrl: "https://res.cloudinary.com/dnmimxgbu/image/upload/v1677135917/1655958030581_qaxofd.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          description: 'sketching a top!',
          imageUrl: "https://res.cloudinary.com/dnmimxgbu/image/upload/v1677135917/1655958030581_qaxofd.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          description: 'sketching a top!',
          imageUrl: "https://res.cloudinary.com/dnmimxgbu/image/upload/v1677135917/1655958030581_qaxofd.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          description: 'sketching a top!',
          imageUrl: "https://res.cloudinary.com/dnmimxgbu/image/upload/v1677135917/1655958030581_qaxofd.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          description: 'sketching a top!',
          imageUrl: "https://res.cloudinary.com/dnmimxgbu/image/upload/v1677135917/1655958030581_qaxofd.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          description: 'sketching a top!',
          imageUrl: "https://res.cloudinary.com/dnmimxgbu/image/upload/v1677135917/1655958030581_qaxofd.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          description: 'sketching a top!',
          imageUrl: "https://res.cloudinary.com/dnmimxgbu/image/upload/v1677135917/1655958030581_qaxofd.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          description: 'sketching a top!',
          imageUrl: "https://res.cloudinary.com/dnmimxgbu/image/upload/v1677135917/1655958030581_qaxofd.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          description: 'sketching a top!',
          imageUrl: "https://res.cloudinary.com/dnmimxgbu/image/upload/v1677135917/1655958030581_qaxofd.jpg",
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
  options.tableName = 'Photos';  

   return queryInterface.bulkDelete(options, null, {});
  }
};
