const express = require('express')
require('dotenv').config()  
const app = express()
const morgan=require('morgan')
const cookieParser=require('cookie-parser')
const fileUpload=require('express-fileupload')


//for swagger documentation
const swaggerUi=require('swagger-ui-express');
const YAML=require('yamljs');
const swaggerDocument=YAML.load("./swagger.yaml");
app.use('/api-docs',swaggerUi.serve,swaggerUi.setup(swaggerDocument));

//our regular middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//cookies and file middleware
app.use(cookieParser())
app.use(fileUpload({
    useTempFiles:true,
    tempFileDir:"/tmp/"
}))


//morgan middleware
app.use(morgan("tiny"))  //ye hame console me jo v route hit hua a wo de dega

//import all routes
const home = require('./routes/home')
const user=require('./routes/user')


//router middleware
app.use('/api/v1',home)
app.use('/api/v1',user) //jab koi api/v1/signup krega tab ye api hit hoga

module.exports=app;