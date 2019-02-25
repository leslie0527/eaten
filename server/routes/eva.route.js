const express=require('express');
const router=express.Router();
const pool=require('../pool');
router.get("/",(req,res)=>{
    var sql=`select * from eva`;
    pool.query(sql,[],(err,result)=>{
        if(err)throw err;
        res.write(JSON.stringify(result))
        res.end();
    })
})
module.exports=router;