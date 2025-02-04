const express=require('express');
const connectDB = require('./src/Database/db');
const userRouter = require('./src/Controllers/user');
const productrouter = require('./src/Controllers/Product');

const app=express();

require('dotenv').config({
    path:'./src/config/.env'
});

const PORT=process.env.port || 5000;
const url=process.env.db_url;

app.get('/',(req,res)=>{
    res.send('Hello World');
})


app.use('/auth', userRouter);
app.listen(PORT,async()=>{
app.use("/product",productrouter);

    try {
        await connectDB(url);
        console.log(`Server is running on port ${PORT}`);
    }
    catch(err){
        console.log(err);
    }
});