'use strict';
module.exports = (sequelize, DataTypes) => {
  const Album = sequelize.define('Album', {
    title: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {});
  Album.associate = function(models) {
    // associations can be defined here
    Album.belongsTo(models.User, {foreignKey: 'userId'})
    const columnMapping = {
      through: 'PhotoInAlbum', 
      otherKey: 'imageId',
      foreignKey: 'albumId'
    }
    Album.belongsToMany(models.Photo, columnMapping);

  };
  return Album;
};