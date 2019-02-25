const express=require('express');
const bodyParser=require('body-parser');
const order=require('./routes/order.route');
const eva=require('./routes/eva.route');
const cors=require('cors');
var app=express();
app.use(express.static('public'));
var server=app.listen(3000);
app.use(cors({
    origin:["http://127.0.0.1:8080","http://localhost:8080"],
    credentials:true
}))
app.use(bodyParser.urlencoded({extended:false}));
app.use('/order',order);
app.use('/eva',eva);
