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
          userId: 13,
          description: 'sketching a top!',
          imageUrl: "https://res.cloudinary.com/dnmimxgbu/image/upload/v1677135917/1655958030581_qaxofd.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 11,
          description: 'Mckenna ribbed eyelet crop top',
          imageUrl: "https://res.cloudinary.com/dnmimxgbu/image/upload/v1677136001/MW994A-1501S16200P_0_750x_pdytbm.webp",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 11,
          description: 'Lidia pants',
          imageUrl: "https://res.cloudinary.com/dnmimxgbu/image/upload/v1677136482/MH510-Z260S1620000_0_dc24dab0-4605-493c-a127-7f1e3883076b_750x_qqaoqm.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 17,
          description: 'Glossa Corset Top',
          imageUrl: "https://res.cloudinary.com/dnmimxgbu/image/upload/v1677141515/Screen_Shot_2023-02-23_at_12.38.23_AM_q0c7pz.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 13,
          description: 'matching with one of my best friends',
          imageUrl: "https://res.cloudinary.com/dnmimxgbu/image/upload/v1677141276/287109557_1983878461999843_97746195330229316_n_uup7pl.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),   
        },
        {
          userId: 14,
          description: 'Denim top',
          imageUrl: "https://res.cloudinary.com/dnmimxgbu/image/upload/v1677141833/Screen_Shot_2023-02-23_at_12.43.47_AM_mjdjew.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 15,
          description: 'Venice cheeky bikini',
          imageUrl: "https://res.cloudinary.com/dnmimxgbu/image/upload/v1677141707/Screen_Shot_2023-02-23_at_12.41.39_AM_juy8gq.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 11,
          description: 'Beverly cargo skirt',
          imageUrl: "https://res.cloudinary.com/dnmimxgbu/image/upload/v1677141911/Screen_Shot_2023-02-23_at_12.45.04_AM_o5d2ub.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 16,
          description: 'the brick red biker sweater',
          imageUrl: "https://res.cloudinary.com/dnmimxgbu/image/upload/v1677142026/Screen_Shot_2023-02-23_at_12.46.58_AM_ujoktg.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 16,
          description: 'the gaultier brooch',
          imageUrl: "https://res.cloudinary.com/dnmimxgbu/image/upload/v1677142184/Screen_Shot_2023-02-23_at_12.48.18_AM_onigin.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 13,
          description: 'dress: Morgan Lane, shirt: Burberry, shoes: Doc Martens',
          imageUrl: "https://res.cloudinary.com/dnmimxgbu/image/upload/v1677142255/287918322_1409055496279301_2550335233624023258_n_o7i8lu.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 14,
          description: 'Light wool skirt',
          imageUrl: "https://res.cloudinary.com/dnmimxgbu/image/upload/v1677142521/Screen_Shot_2023-02-23_at_12.55.16_AM_n3tvxu.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 14,
          description: 'Sailor poplin top',
          imageUrl: "https://res.cloudinary.com/dnmimxgbu/image/upload/v1677142741/Screen_Shot_2023-02-23_at_12.58.56_AM_oxqmlq.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 13,
          description: 'dress: Zara, cardigan: Urban Outfitters',
          imageUrl: "https://res.cloudinary.com/dnmimxgbu/image/upload/v1677142798/285150805_515167147065092_4182686071767733061_n_bfk35a.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 17,
          description: 'Runway Blue Rose Corset',
          imageUrl: "https://res.cloudinary.com/dnmimxgbu/image/upload/v1677144494/Screen_Shot_2023-02-23_at_1.28.06_AM_ouw9ct.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 17,
          description: 'Anglomania Ruben Top',
          imageUrl: "https://res.cloudinary.com/dnmimxgbu/image/upload/v1677143721/Screen_Shot_2023-02-23_at_1.15.15_AM_bn6kdm.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 15,
          description: 'Collette Crochette Mini Dress',
          imageUrl: "https://res.cloudinary.com/dnmimxgbu/image/upload/v1677143217/Screen_Shot_2023-02-23_at_1.06.49_AM_skfo4x.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 11,
          description: 'Millie stripe top',
          imageUrl: "https://res.cloudinary.com/dnmimxgbu/image/upload/v1677143297/Screen_Shot_2023-02-23_at_1.08.10_AM_povrtt.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 16,
          description: 'the statue print dress',
          imageUrl: "https://res.cloudinary.com/dnmimxgbu/image/upload/v1677143418/Screen_Shot_2023-02-23_at_1.10.14_AM_lciizh.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 12,
          description: 'white shirt',
          imageUrl: "https://res.cloudinary.com/dnmimxgbu/image/upload/v1677143847/Screen_Shot_2023-02-23_at_1.17.22_AM_zvmhfr.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 12,
          description: 'jeans',
          imageUrl: "https://res.cloudinary.com/dnmimxgbu/image/upload/v1677144010/Screen_Shot_2023-02-23_at_1.20.03_AM_yltmsp.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 15,
          description: 'Barre Racerback Sports Bra',
          imageUrl: "https://res.cloudinary.com/dnmimxgbu/image/upload/v1677144107/Screen_Shot_2023-02-23_at_1.21.37_AM_jd5nu3.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 15,
          description: 'Camilla Eyelet Shine Bikini Top',
          imageUrl: "https://res.cloudinary.com/dnmimxgbu/image/upload/v1677144249/Screen_Shot_2023-02-23_at_1.24.01_AM_dkfy0c.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 17,
          description: 'Orange Plaid Alpava Beret',
          imageUrl: "https://res.cloudinary.com/dnmimxgbu/image/upload/v1677144615/Screen_Shot_2023-02-23_at_1.30.09_AM_i989wq.png",
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
