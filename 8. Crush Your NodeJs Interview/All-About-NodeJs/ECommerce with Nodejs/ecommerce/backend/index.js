const express = require('express');
const dotenv=require('dotenv');
const mongoose=require('mongoose');
const morgan=require('morgan');


//import routes
const authRoutes=require('./routes/auth');
const categoryRoutes=require('./routes/category');
const productRoutes=require('./routes/ProductRoute');


dotenv.config();


const app = express()

//db
mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log('DB Connected Successfully'))
.catch(err=>console.log(err));


//middlewares
app.use(morgan('dev'));
app.use(express.json());


//router middleware
app.use('/api',authRoutes);
app.use('/api',categoryRoutes);
app.use('/api',productRoutes);


const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Ecommerce app listening on port ${port}!`))