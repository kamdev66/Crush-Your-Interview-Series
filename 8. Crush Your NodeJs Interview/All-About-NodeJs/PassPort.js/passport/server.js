const express = require('express')
const app = express()
const port = 5000
const {connectMongoose,User} =require('./database')
const ejs=require('ejs')
const passport=require('passport') //step1
const { initializingPassport } = require('./passportConfig')
const expressSession=require('express-session')  //step5:- npm i express-session

connectMongoose();

initializingPassport(passport)  //step2 //iske liye hamne ek file bnaya h passportConfig.js


app.use(expressSession({secret:'mysecretkey',resave:false,saveUninitialized:false}))  //step6
app.use(passport.initialize()) //step3 
app.use(passport.session())   //step4 
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.set('view engine','ejs')

app.get('/', (req, res) => res.render("index"))

app.get('/register',(req,res)=>{
    res.render('register')
})

app.get('/login',(req,res)=>{   
    res.render('login')
})

app.post('/register',async(req,res)=>{
    const user=await User.findOne({username:req.body.username})
    if(user) return res.status(400).send('User already exists')
    const newUser=await User.create(req.body);
    res.status(201).send(newUser);
})

app.post('/login',passport.authenticate('local',{failureRedirect:"/register",successRedirect:"/"}),async(req,res)=>{  //step7:-use passport.authenticate here

})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))