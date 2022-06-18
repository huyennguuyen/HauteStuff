'use strict';
module.exports = (sequelize, DataTypes) => {
  const PhotoInAlbum = sequelize.define('PhotoInAlbum', {
    imageId: DataTypes.INTEGER,
    albumId: DataTypes.INTEGER
  }, {});
  PhotoInAlbum.associate = function(models) {
    // associations can be defined here
  };
  return PhotoInAlbum;
};