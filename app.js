
const express=require('express');
const app=express();
const route=express.Router();
const path=require('./utils/path/root_path');
// console.log(path.rootDir);
const morgan=require('morgan');
require('dotenv').config();
const router=require('./router/restApi');

const port=process.env.PORT || 8080;

//use morgan to log request
app.use(morgan('dev'));


app.use('/eduTrackPro',router);

// app.use('/',(req,res)=>{
//     res.status(200).json({
//         msg:"Logged succussfully...!"
//     })
// });

app.use((req,res,next)=>{
    res.status(404).json({
        msg:"Page Not Found...!",
        error:"URL Issue",
        description:"Enter correct URL"
    })
});

app.listen(port,()=>{
    console.log(`Server running at port ${port}`);
})