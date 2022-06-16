'use strict';
module.exports = (sequelize, DataTypes) => {
  const PhotoInAlbum = sequelize.define('PhotoInAlbum', {
    imageId: DataTypes.INTEGER,
    albumId: DataTypes.INTEGER
  }, {});
  PhotoInAlbum.associate = function(models) {
    // associations can be defined here
    const columnMapping = {
      through: 'StudentLesson', 
      otherKey: 'lessonId',
      foreignKey: 'studentId'
    }
  Student.belongsToMany(models.Lesson, columnMapping);
  };
  return PhotoInAlbum;
};