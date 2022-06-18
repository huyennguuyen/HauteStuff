'use strict';
module.exports = (sequelize, DataTypes) => {
  const Photo = sequelize.define('Photo', {
    userId: DataTypes.INTEGER,
    imageUrl: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {});
  Photo.associate = function(models) {
    // associations can be defined here
    Photo.belongsTo(models.User, {foreignKey: 'userId'})
    Photo.hasMany(models.Comment, {foreignKey:'imageId', onDelete: 'CASCADE', hooks: true})
    const columnMapping = {
      through: 'PhotoInAlbum', 
      otherKey: 'albumId',
      foreignKey: 'imageId'
    }
    Photo.belongsToMany(models.Album, columnMapping);
    // Photo.hasMany(models.Comment, {foreignKey:'imageId'})
  };
  return Photo;
};