const sequelize = require('../database/index');

const { DataTypes, Model } = require('sequelize');

class User extends Model {}

User.init(
  {
    // 在这里定义模型属性
    openid: {
      type: DataTypes.CHAR,
      allowNull: false,
      primaryKey: true,
    },
    sessionKey: {
      type: DataTypes.CHAR,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.TIME,
      defaultValue: true,
    },
    updatedAt: {
      type: DataTypes.TIME,
      defaultValue: true,
    },
  },
  {
    // 这是其他模型参数
    sequelize, // 我们需要传递连接实例
    modelName: 'User', // 我们需要选择模型名称
  }
);

User.sync({ alter: true });

module.exports = User;
