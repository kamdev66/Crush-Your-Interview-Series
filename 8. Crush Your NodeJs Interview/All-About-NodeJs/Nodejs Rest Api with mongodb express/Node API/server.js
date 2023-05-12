const express=require('express')
const dotEnv=require('dotenv')
const cors=require('cors')
const dbConnection=require('./database/connection')

dotEnv.config() //once you call the .config() method,it will basically look for file in your folder.isme agr koi v file hai to wo process.env ko available krdeta h
const app=express()
const PORT=process.env.port || 3000;

/*const myMiddleware=(req,res,next)=>{
    console.log('hey world');
    next()  //next() krne se hi aage jayega aur Hello show krega .It is function which calls the next middleware
}
app.use(myMiddleware) //everytime the req comes to the server ,this middleware is goingto run bcoz it is defined in the root object(app)
*/

//db connection
dbConnection();

//enabled cors
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/',(req,res)=>{
   res.send('Hello')
})

//api
app.use('/api/v1/product',require('./routes/productRoutes'))



app.listen(PORT,()=>{
    console.log(`Servr listening on port ${PORT}`);
})