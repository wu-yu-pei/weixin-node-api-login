const fs = require('fs');
const path = require('path');
const jwt = require('jsonwebtoken');

const PRIVATEKEY = fs.readFileSync(path.resolve(__dirname, '../config/key/private.key'));
const PUBLICKEY = fs.readFileSync(path.resolve(__dirname, '../config/key/public.key'));

class Jwt {
  sign(data) {
    return jwt.sign(data, PRIVATEKEY, { expiresIn: 60 * 60 * 24, algorithm: 'RS256' });
  }

  verify(token, ctx = null) {
    let date;
    jwt.verify(token, PUBLICKEY, function (err, result) {
      if (err) {
        console.log(err, '|====================================================|');
      } else {
        date = result;
      }
    });
    return date;
  }
}

module.exports = new Jwt();
