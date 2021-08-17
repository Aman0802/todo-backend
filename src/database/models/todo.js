"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  const Todo = sequelize.define(
    "todo",
    {
      id: DataTypes.UUID,
      name: DataTypes.STRING,
    },
    {}
  );
  Todo.associate = function (models) {
    // associations can be defined here
    // Todo.hasMany(models.Post, {
    //   foreignKey: 'userId',
    //   as: 'posts',
    //   onDelete: 'CASCADE',
    // });
    // Todo.hasMany(models.Comment, {
    //   foreignKey: 'userId',
    //   as: 'comments',
    //   onDelete: 'CASCADE',
    // });
  };
  return Todo;
};
