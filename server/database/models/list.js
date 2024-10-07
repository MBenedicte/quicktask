"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class List extends Model {
    static associate(models) {
      List.belongsTo(models.User, { foreignKey: "user_id" });
      List.hasMany(models.Task, { foreignKey: "list_id" });
    }
  }
  List.init(
    {
      list_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      list_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      updated_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      sequelize,
      modelName: "List",
      tableName: "lists",
      timestamps: false,
    }
  );
  return List;
};
