
var passwordHash = require('bcrypt-nodejs');


exports.generatePasswordHash = function (password) {
    return passwordHash.hashSync(password, passwordHash.genSaltSync(10), null);
};
