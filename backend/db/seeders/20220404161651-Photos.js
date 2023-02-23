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
          description: 'Glossa Corset Top',
          imageUrl: "https://res.cloudinary.com/dnmimxgbu/image/upload/v1677141515/Screen_Shot_2023-02-23_at_12.38.23_AM_q0c7pz.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          description: 'matching with one of my best friends',
          imageUrl: "https://res.cloudinary.com/dnmimxgbu/image/upload/v1677141276/287109557_1983878461999843_97746195330229316_n_uup7pl.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),   
        },
        {
          userId: 4,
          description: 'denim top',
          imageUrl: "https://res.cloudinary.com/dnmimxgbu/image/upload/v1677141833/Screen_Shot_2023-02-23_at_12.43.47_AM_mjdjew.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 5,
          description: 'Venice cheeky bikini',
          imageUrl: "https://res.cloudinary.com/dnmimxgbu/image/upload/v1677141707/Screen_Shot_2023-02-23_at_12.41.39_AM_juy8gq.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          description: 'Beverly cargo skirt',
          imageUrl: "https://res.cloudinary.com/dnmimxgbu/image/upload/v1677141911/Screen_Shot_2023-02-23_at_12.45.04_AM_o5d2ub.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 6,
          description: 'the brick red biker sweater',
          imageUrl: "https://res.cloudinary.com/dnmimxgbu/image/upload/v1677142026/Screen_Shot_2023-02-23_at_12.46.58_AM_ujoktg.png",
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
