'use strict';
module.exports = (sequelize, DataTypes) => {
  const Photo = sequelize.define('Photo', {
    userId: DataTypes.INTEGER,
    albumId: DataTypes.INTEGER,
    imageUrl: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {});
  Photo.associate = function(models) {
    // associations can be defined here
    Photo.belongsTo(models.Album, {foreignKey: 'albumId'});
    Photo.belongsTo(models.User, {foreignKey: 'userId'})
  };
  return Photo;
};