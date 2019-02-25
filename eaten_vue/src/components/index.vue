<template>
    <div>
        <div id="order">
            <div id="menus">
                <ul>
                    <li>
                        <div><p><a href="#"><span class="iconfont">&#xe61c;</span>热销</a></p></div>
                    </li>
                    <li>
                        <div><p><a href="#0">抄手系列</a></p></div>
                    </li>
                    <li>
                        <div><p><a href="#5">生抄手系列</a></p></div>
                    </li>
                    <li>
                        <div><p><a href="#10">面条系列</a></p></div>
                    </li>
                    <li>
                        <div><p><a href="#16">米线系列</a></p></div>
                    </li>
                    <li>
                        <div><p><a href="#20">砂锅米线系列</a></p></div>
                    </li>
                    <li>
                        <div><p><a href="#25">麻辣油碟</a></p></div>
                    </li>
                    <li>
                        <div><p><a href="#26">套饭系列</a></p></div>
                    </li>
                    <li>
                        <div><p><a href="#31">砂锅烩饭</a></p></div>
                    </li>
                    <li>
                        <div><p><a href="#36">加菜系列</a></p></div>
                    </li>
                    <li>
                        <div><p><a href="#41">炖汤系列</a></p></div>
                    </li>
                    <li>
                        <div><p><a href="#45">煎蛋</a></p></div>
                    </li>
                    <li>
                        <div><p><a href="#46">饮料系列</a></p></div>
                    </li>
                    <li>
                        <div><p><a href="#49">白饭</a></p></div>
                    </li>
                </ul>
            </div>

            <div id="order_1">
                <ul>
                    <li v-for="(item,i) of list" :key="i" :id="i">
                        <div>
                            <img :src="'http://127.0.0.1:3000/'+item.img" alt="">
                            <div>
                                <h4>{{item.enme}}</h4>
                                <p>月售{{item.quantity}}份 好评率94.7%</p>
                                <span>￥{{(item.price).toFixed(2)}}</span>
                                <div>
                                    <a href="javascript:;" class="iconfont" @click="reduce(i)">&#xe60c;</a>
                                    <span id="num">{{item.p}}</span>
                                    <a href="javascript:;" class="iconfont" @click="increase(i)">&#xe682;</a>
                                </div>

                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <footer>
                <div id="fhd" v-html="cart">
                    
                </div>
                <div :class="myCart">
                    <span class="iconfont">&#xe601;</span>
                    <div>
                        <p v-html="cartA"></p>
                        <p v-html="cartB"></p>
                    </div>
                    <div>
                        <h4 v-html="subBtn" @click="submit()"></h4>
                    </div>
                </div>
            </footer>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                list:[],
                cart:"",
                icart:[],
                myCart:"",
                subBtn:"￥15元起送",
                Pri:0,
                toPri:0,
                cartA:"未选购商品",
                cartB:"另需配送费3元",
                e:0
            }
        },
        methods:{
            productList(){
                var url="http://127.0.0.1:3000/order"
                this.axios.get(url).then(result=>{
                    for(var item of result.data){
                        item.p=0;
                    };
                    this.list=result.data;
                })
            },
            reduce(i){
                this.list[i].p--;
                this.cart="";
                if(this.list[i].p<0){
                    this.list[i].p=0;
                }
                for(var a=0;a<this.icart.length;a++){
                    if(this.icart[a].enme==this.list[i].enme){
                        if(this.icart[a].p==0){
                            this.icart.splice(a,1);
                        }else{
                            this.icart[a].p=this.list[i].p;
                        };
                    };    
                };
                this.toPri=0;
                for(var a=0;a<this.icart.length;a++){
                        this.Pri=this.icart[a].price*this.icart[a].p;
                        this.cart+=`<p>${this.icart[a].enme} 数量:${this.icart[a].p} 价格:${this.icart[a].price*this.icart[a].p}</p>`;
                        this.toPri=this.Pri;
                };
                this.e=this.$options.methods.off(this.toPri);
                if(this.toPri<15){
                    this.subBtn=`还差${15-this.toPri}元起送`;
                        this.cartA=`￥${this.toPri}`;
                }else{
                    this.subBtn=`去结算`;
                    if(this.e==this.toPri){
                        this.cartA=`￥${this.toPri}`;
                    }else{
                        this.cartA=`￥${this.e} <del>￥${(this.toPri).toFixed(2)}</del>`;
                    }
                }
                if(this.icart.length==0){
                    this.myCart="";
                    this.subBtn="￥15元起送";
                    this.cartA=`未选购商品`;
                }
                
            },
            increase(i){
                this.list[i].p++;
                this.cart="";
                if(this.list[i].p==1){
                   this.icart.push(this.list[i]);
                }
                this.toPri=0;
                for(var a=0;a<this.icart.length;a++){
                    this.Pri=this.icart[a].price*this.icart[a].p;
                    this.cart+=`<p>${this.icart[a].enme} 数量:${this.icart[a].p} 价格:${this.Pri.toFixed(2)}</p>`;
                    this.toPri+=this.Pri;
                }
                this.e=this.$options.methods.off(this.toPri);
                this.myCart="myCart";
                if(this.toPri<15){
                    this.subBtn=`还差${15-this.toPri}元起送`;
                        this.cartA=`￥${this.toPri}`;
                }else{
                    this.subBtn=`去结算`;
                    if(this.e==this.toPri){
                        this.cartA=`￥${this.toPri}`;
                    }else{
                        this.cartA=`￥${this.e} <del>￥${(this.toPri).toFixed(2)}</del>`;
                    }
                    
                }
                
            },
            off(e){
                if(e>30){
                    if(e>45){
                        e-=20;
                    }else{e-=15}
                };
                return e;
            },
            submit(){
                if(this.toPri<15){
                    alert("未满起送价格");
                }else{
                    alert("下单成功");
                    this.$router.push("/eva");
                }
            }
        },
        
        created(){
            this.productList()
        },
    }
</script>
<style>
    #order>div#menus{
        float: left;
        height:60%;
        overflow: auto;
        /*overflow-y:visible;*/
        position: fixed;
    }
    #order>div#order_1{
        /* margin-left:6rem; */
        height: 100%;
        width: 100%;
        z-index: -1;
        overflow: auto;
        /* position: relative; */
        /*overflow-y:visible;*/
        position: fixed;
    }
    #order>div#menus>ul>li:first-child>div>p>a>span{
        color:red;
        font-size: 1.1rem;
        margin-right: 0.2rem;
    }
    #order>div#menus>ul>li>div>p>a:hover{
        background: #fff;
    }
    #order>div#menus>ul>li>div>p{
        text-align: center;
    }
    #order>div#menus>ul>li>div>p>a{
        display: block;
        font-size: 0.5rem;
        line-height: 3rem;
        color:#888;
        text-decoration: none;
        background: #eee;
        width: 6rem;
    }
    #order>div#order_1>ul{
        list-style: none;

    }
    #order>div#order_1>ul>li>div>img{
        width: 6rem;
        height: 6rem;
        margin-left: 4rem;
    }
    #order>div#order_1>ul>li>div{
        padding: 0.6rem;
        padding-left: 3rem;
        display: flex;
        justify-content: space-between;
        /*margin-left: 6rem;*/
    }
    #order>div#order_1>ul>li>div>div{
        display: inline-block;
        float: right;
        margin-right: 1rem;
    }
    #order>div#order_1>ul>li>div>div>p{
        font-size: 0.6rem;
        color: #888;
    }
    #order>div#order_1>ul>li>div>div>span:nth-child(3){
        color: #ff2a00;
        float: left;
        margin-top: 2rem;
    }
    #order>div#order_1>ul>li>div>div>div{
        float: right;
        margin-top: 2rem;
    }
    #order>div#order_1>ul>li>div>div>div>a{
        color: dodgerblue;
        font-size: 1.2rem;
        text-decoration: none;
    }
    #order>div#order_1>ul>li>div>div>div>span:nth-child(5){
        color: black;
        width: 50px;
    }
    /* ------------------添加商品后底部购物车样式------------------------ */
    #order>footer>div.myCart{
        background: #eee;
    }
    #order>footer>div.myCart>div>p{
        color: #333;
    }
    #order>footer>div.myCart>span.iconfont{
        background:dodgerblue;
        border:5px solid white;
        color: #eee;
    }
    #order>footer>div.myCart>div:last-child{
        background: #00c78c;
        color: #eee;
    }
    /* --------------购物车隐藏页------------------ */
    #order>footer>div#fhd{
        height:90%;
        background: dodgerblue;
        color: white;
        border-radius: 5px;
        /* z-index: 1; */
        position: fixed;
        margin-top:-75px;
        transition: all 0.5s;
        font-size: 16px;
        padding-top: 20px;
    }
    #order>footer>div#fhd:hover{
        top:20%;
    }
    /*----------------------------底部购物车--------------------------- */

    #order>footer>div{
        width: 100%;
        height: 60px;
        background: #666;
        top:100%;
        margin-top: -60px;
        position: fixed;
    }
    #order>footer>div>span.iconfont{
        position: relative;
        top:-1rem;
        display: inline-block;
        background: #333;
        padding: 0.8rem;
        float: left;
        border: 5px solid #666;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        border-radius: 50%;
        color: #999999;
        font-size: 2rem;
    }
    
    #order>footer>div>div{
        display: inline-block;
    }
    #order>footer>div>div>p:first-child{
        font-size: 0.9rem;
    }
    #order>footer>div>div>p{
        font-size: 0.6rem;
        color:#aaa;
    }
    #order>footer>div>div:last-child{
        background: #888;
        color: white;
        width: 100px;
        float: right;
        line-height:60px;
        height: 100%;
    }
</style>