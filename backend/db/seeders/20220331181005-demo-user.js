'use strict';
const bcrypt = require('bcryptjs');

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    options.tableName = 'Users';  
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
          email: 'brandymelville@user.io',
          firstName: "Brandy",
          lastName: "Melville",
          username: 'brandymelville',
          about: 'We started around the early 80\'s in Europe specifically, Italy. Our aesthetic would be described as beachy and trendy but also simple.',
          bannerUrl:'https://res.cloudinary.com/dnmimxgbu/image/upload/v1677137244/Screen-Shot-2022-01-10-at-4.43.03-PM_leonl6.png',
          profileUrl:'https://res.cloudinary.com/dnmimxgbu/image/upload/v1677137121/IMG_4872_fdqrjs.jpg',
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
          email: 'huyennguyen@user.io',
          firstName: "Huyen",
          lastName: "Nguyen",
          username: 'huyennguuyen',
          about: 'Hello! I am the creator of this website and what inspired me to create this would be my admiration of fashion. I grew up watching my mom mend clothes which provided me the knowledge to be able to express myself through making and altering my own clothes. Fashion to me not only serves as a way to express myself, but most importantly, a way to feel good. Nothing beats a good outfit as a confidence booster, and I hope you can see my passion for clothes through this website. Thank you for tuning in!',
          bannerUrl:'https://res.cloudinary.com/dnmimxgbu/image/upload/v1677137397/rebecca-matthews-iJ9hyzW7YRo-unsplash_ibex0c.jpg',
          profileUrl:'https://res.cloudinary.com/dnmimxgbu/image/upload/v1677137374/281926635_549008403599747_3992259512991183714_n_phzogb.jpg',
          hashedPassword: bcrypt.hashSync('password3')
        },
        {
          email: 'miumiu@user.io',
          firstName: "Miu",
          lastName: "Miu",
          username: 'miumiu',
          about: 'Welcome! We have been established since 1992 by Miuccia Prada. Miu Miu is a high fashion women\'s clothing brand that started in Paris, France.',
          bannerUrl:'https://res.cloudinary.com/dnmimxgbu/image/upload/v1677138024/600a9f8dae20e31835ded144_Miu_Miu_SS21_Adv_Campaign-HEAD_hzvjan.jpg',
          profileUrl:'https://res.cloudinary.com/dnmimxgbu/image/upload/v1677137540/Miu-Miu-768x1024_xqiw8h.jpg',
          hashedPassword: bcrypt.hashSync('password3')
        },
        {
          email: 'frankiesbikini@user.io',
          firstName: "Frankies",
          lastName: "Bikinis",
          username: 'huyennguuyen',
          about: 'In 2012, Francesca Aiello started this brand as way to create quality bikinis. The aesthetic is described as girly, sporty-chic which includes floral prints and athletic shapes.',
          bannerUrl:'https://res.cloudinary.com/dnmimxgbu/image/upload/v1677138833/yana332-475_vkmnpq.jpg',
          profileUrl:'https://res.cloudinary.com/dnmimxgbu/image/upload/v1677138118/O0fxv0qJ_400x400_myei4d.png',
          hashedPassword: bcrypt.hashSync('password3')
        },
        {
          email: 'jeanpaulgaultier@user.io',
          firstName: "Jean",
          lastName: "Paul Gaultier",
          username: 'jeanpaulgaultier',
          about: 'A unisex brand that exemplifies London and Paris street fashion with unique pieces started in 1976 by Jean Paul Gaultier.',
          bannerUrl:'https://res.cloudinary.com/dnmimxgbu/image/upload/v1677139770/Screen_Shot_2023-02-23_at_12.09.04_AM_masot2.png',
          profileUrl:'https://res.cloudinary.com/dnmimxgbu/image/upload/v1677138900/download_yll7k0.png',
          hashedPassword: bcrypt.hashSync('password3')
        },
        {
          email: 'viviennewestwood',
          firstName: "Vivienne",
          lastName: "Westwood",
          username: 'viviennewestwood',
          about: 'Launched in 1999, Vivienne Westwood became a brand with a modern punk aestheic with inspirations from ballet.',
          bannerUrl:'https://res.cloudinary.com/dnmimxgbu/image/upload/v1677141037/00001-Vivienne-Westwood-Spring-22-RTW-London-credit-brand_p7ibbu.jpg',
          profileUrl:'https://res.cloudinary.com/dnmimxgbu/image/upload/v1677141074/vivienne-westwood-logo_hblpuj.jpg',
          hashedPassword: bcrypt.hashSync('password3')
        },

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
    options.tableName = 'Users';  
    return queryInterface.bulkDelete(options, {
      username: { [Op.in]: ['Demo-lition', 'FakeUser1', 'FakeUser2'] }
    }, {});
  }
};
