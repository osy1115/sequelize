const {user, User} = require('../../models')

let join = (req,res) => {
    res.render('./user/join.html')
}

let login = (req,res) => {
    res.render('./user/login.html')
}

let info = async (req,res) => {
    let userlist = await User.findAll({});
    console.log(userlist)
    res.render('./user/info.html',{
        userlist:userlist,
    })
}

module.exports = {
    join:join,
    login:login,
    info:info,
}