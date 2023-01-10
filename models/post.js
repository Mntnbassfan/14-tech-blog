const { DataTypes, Model } = require('sequelize')
const sequelize = require ('../config/connection')


class Post extends Model {}

Post.init(
  {
    id: {
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      },
    },
    sequelize,
);

module.exports = Post;
