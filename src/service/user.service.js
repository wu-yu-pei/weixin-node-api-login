const User = require('../model/user.model');
class UserServices {
  async save(openid, session_key) {
    let { dataValues } = await User.create({ openid, sessionKey: session_key });
    return dataValues;
  }
  async findOne(openid) {
    let result = await User.findOne({
      where: {
        openid,
      },
    });
    return result;
  }
}

module.exports = new UserServices();
