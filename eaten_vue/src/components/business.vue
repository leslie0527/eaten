<template>
     <div id="business">
            <div id="information">
                <p>商家信息</p>
                <ul>
                    <li><img src="http://127.0.0.1:3000/img/business/a.jpg" alt=""></li>
                    <li><img src="http://127.0.0.1:3000/img/business/b.jpg" alt=""></li>
                    <li><img src="http://127.0.0.1:3000/img/business/c.jpg" alt=""></li>
                    <li><img src="http://127.0.0.1:3000/img/business/d.jpg" alt=""></li>
                </ul>
                <p>主要经营面食，砂锅系列，蹄花等</p>
            </div>
            <div id="introduction">
                <ul>
                    <li><span>商家名称</span><span>嗨抄手</span></li>
                    <li><span>商家品类</span><span>米粉面馆/饺子馄饨</span></li>
                    <li><span>商家地址</span><span>重庆市渝北区大竹林</span></li>
                    <li><span>商家电话</span><span><a href="tel:15523302994">15523302994 ></a></span></li>
                    <li><span>营业时间</span><span>7:30-14:30 17:-20:40</span></li>
                </ul>
            </div>
            <input type="button" value="举报商家">
    </div>
</template>
<style>
    #business{
        background: #ddd;
        overflow: auto;
        height: 65%;
        position: fixed;
    }
    #business>#information{
            margin-bottom:0.6rem; 
            padding-left:1rem; 
        }
        #business>#information>p{
            padding: 10px 0;
        }
        #business>#information>p:first-child{
            font-weight: bold;
        }
        #business>#information>p:last-child{
            color: #666;
            font-size: 0.6rem;
        }
        #business>#information>ul{
            list-style: none;
            display: flex;
            justify-content:space-around;
        }
        #business>#information>ul>li{
            width: 23%;
        }
        #business>#information>ul>li>img{
            width: 100%;
            height: 100%;
        }
        #business>#introduction,#business>#information{
            background: white;
        }
        #business>#introduction>ul>li{
            height: 2.5rem;
            line-height: 2.5rem;
            margin-left:1rem;   
            list-style: none;
            border-bottom: 1px solid #ddd;
        }
        #business>#introduction>ul>li>span:first-child{
            float: left;
        }
        #business>#introduction>ul>li>span:last-child{
            font-size: 0.8rem;
            float: right;
            margin-right: 1rem;
        }
        #business>#introduction>ul>li>span>a{
            text-decoration: none;
            color:black;
        }
        #business>input{
            width: 80%;
            line-height: 2.5rem;
            height: 2.5rem;
            background: white;
            border: 0;
            margin: 0.6rem 0;
            font-size: 1rem;
            font-weight: bold;
        }
</style>
