const bcrypt = require('bcryptjs')

function hashingPassword(password) { //
    let salt = bcrypt.genSaltSync(10);
    let hash = bcrypt.hashSync(password, salt);
    return hash
}

function comparePassword(passwordBeforeHashing, passwordAfterHasing){
    return bcrypt.compareSync(passwordBeforeHashing, passwordAfterHasing)
}


module.exports = {
    hashingPassword,
    comparePassword
}