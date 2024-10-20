
const express=require('express');
const app=express();
const router=express.Router();

const restApi=require('../app/restApi');

router.route('/restApi',restApi);

module.exports=router;