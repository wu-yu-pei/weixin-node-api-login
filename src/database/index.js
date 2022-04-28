const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('wxlogin', 'root', '123456', {
  host: 'localhost',
  dialect: 'mysql',
});

(async function () {
  try {
    await sequelize.authenticate();
    console.log('数据库链接成功....');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

module.exports = sequelize;
