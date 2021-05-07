let main = (req,res)=>{
    console.log(req.session.uid);
    res.render('index.html',{
        userid:req.session.uid,
        isLogin:req.session.isLogin
    })
}

module.exports.main = main;