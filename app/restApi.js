
const express=require('express');
const app=express();
const router=express.Router();
const util=require('util');
const mysqlConnection=require('../utils/db_con/dbCon')

router.route('/createUser').post(async (req,res)=>{
   let query1=`insert into eduTrackProUsers (name,email,phone_number,registration_type,Profession,school_name,school_code,state,district,area,pincode) values ('Kalaivendhan','vendhank88@gmail.com','9659263394','school','hm','GHSS','100','Tamilnadu','Ariyalur','KVC','612901')`;
   
   mysqlConnection.execute(query1,(err,data)=>{
    if(err){
        res.status(500).json({
            msg:'please check query or db connection'
        })
    }else{
        res.status(200).json({
            msg:"data update succussfully...!",
            data:data
        })
    }
   })

})

module.exports=router;