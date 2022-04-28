const axios = require('axios');
const jwt = require('../utils/jwt');
const userServices = require('../service/user.service');

const { APPID, APPSECRET } = require('../config/consts');

class LoginControler {
  async login(ctx, next) {
    // 1. 获取小程序提供的code
    const { code } = ctx.request.body;

    // 2.换取openid 和 session_key
    const result = await axios.get(
      `https://api.weixin.qq.com/sns/jscode2session?appid=${APPID}&secret=${APPSECRET}&js_code=${code}&grant_type=authorization_code`
    );
    const { session_key, openid } = result.data;

    // 如果没有之前没有登录过,将用户数据储存到数据库中
    let hasUser = await userServices.findOne(openid);

    if (!hasUser) {
      await userServices.save(openid, session_key);
    }

    // 3.自定义登录态
    const token = jwt.sign({ session_key, openid });

    // 返回值
    ctx.body = {
      message: '登录成功',
      token,
    };

    await next();
  }
}

module.exports = new LoginControler();
