
const {User} = require('../../models/index')

let join = (req,res) => {
    res.render('./user/join.html')
}

let login = (req,res) => {
    let flag = req.query.flag;
    res.render('./user/login.html',{ flag })
}

let info = async (req,res) => {
    let userlist = await User.findAll({});


    res.render('./user/info.html',{
        userlist:userlist,
    })
}

let logout = (req,res) =>{
    delete req.session.isLogin;
    delete req.session.uid;

    req.session.save(()=>{
        res.redirect('/');
    })
}

let join_success = async (req,res) =>{
    let userid = req.body.userid;
    let userpw = req.body.userpw;
    let username = req.body.username;
    let gender = req.body.gender;
    let userimage = req.file == undefined ? '' : req.file.path;

    try{
    let rst = await User.create({userid,userpw,username,gender, userimage})
} catch (e) {
    console.log(e);
}
    res.render('./user/join_success.html',{userid,username});
}

let login_check = async (req,res) =>{
    let userid = req.body.userid;
    let userpw = req.body.userpw;
    
    let result = await User.findOne({
        where:{ userid, userpw }
    })

    if(result == null){
        res.redirect('/user/login?flag=0')
    } else {
        req.session.uid = userid;
        req.session.isLogin = true;

    req.session.save(()=>{
        res.redirect('/');
     })
    }
}

module.exports = {
    join:join,
    login:login,
    info:info,
    join_success:join_success,
    login_check:login_check,
    logout:logout
}


