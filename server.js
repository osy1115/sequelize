const express = require('express');
const {sequelize} = require('./models');
const app = express();
const {User} = require('./models');
const router = require('./routers/index');
const nunjucks = require('nunjucks');

app.set('view engine','html');
nunjucks.configure('views',{
    express:app,
})

sequelize.sync({force:false,})
.then(()=>{
    console.log('접속 성공')
})
.catch(()=>{
    console.log('접속 실패')
})



app.use('/',router);

   
app.listen(3000,()=>{
    console.log(`server start port 3000`)
})

