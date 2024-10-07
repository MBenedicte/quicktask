"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Analytics extends Model {
    static associate(models) {
      Analytics.belongsTo(models.User, { foreignKey: "user_id" });
    }
  }
  Analytics.init(
    {
      analytics_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      tasks_created: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      tasks_completed: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      productivity_score: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "Analytics",
      tableName: "analytics",
      timestamps: false,
    }
  );
  return Analytics;
};
