var express =require('express')
var path = require('path');
var app=express()
var host ='127.0.0.1'
var port=3000;
app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'));
app.get('/',function (req,res){
    res.render('index',{title:'welcome to EJS Page!'});
})
app.listen(port,host, () => {
    console.log(`server is running on http://${host}:${port} `);
});