const { datatypes, Model } = require("sequelize");
const sequelize = require("../db");

class Post extends Model {}

Post.init(
  {
    title: {
      type: datatypes.string,
      allowNull: false,
    },
    body: {
      type: datatypes.string,
      allowNull: false,
    },
  },
  { sequelize, modelName: "post" }
);
