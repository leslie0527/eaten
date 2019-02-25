<template>
    <div id="eva">
        <div id="all">
            <ul>
                <li>全部</li>
                <li>好评</li>
                <li>中评</li>
                <li>差评</li>
            </ul>
        </div>
        <div id="allEva">
            <ul>
                <li v-for="(item,i) in list" :key="i">
                    <p class="un"><span>{{item.id}}楼</span><span>{{item.date | dateFilter}}</span></p>
                    <p class="iconfont">{{
                        item.star==5?"&#xe7a3;&#xe7a3;&#xe7a3;&#xe7a3;&#xe7a3;":
                        item.star==4?"&#xe7a3;&#xe7a3;&#xe7a3;&#xe7a3;&#xe616;":
                        item.star==3?"&#xe7a3;&#xe7a3;&#xe7a3;&#xe616;&#xe616;":
                        item.star==2?"&#xe7a3;&#xe7a3;&#xe616;&#xe616;&#xe616;":
                        "&#xe7a3;&#xe616;&#xe616;&#xe616;&#xe616;"
                        }}</p>
                    <p>{{item.word}}</p>
                    <!-- <img src="{{item.img}}" alt=""> -->
                </li> 
            </ul> 
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            list:[],
            star:"",
        }
    },
    methods: {
        evaList(){
                var url="http://127.0.0.1:3000/eva"
                this.axios.get(url).then(result=>{
                    this.list=result.data;
                    console.log(this.list);
                })
            },
    },
    created() {
        this.evaList();
    },
}
</script>
<style>
    #eva{
        overflow: auto;
        position: fixed;
        height: 100%;
        width: 100%;
    }
    #eva ul{
        list-style: none;
    }
    #eva>#all>ul>li{
        display:inline-block;
        width: 3rem;
        background:#f0ffff;
        color: #666;
        text-align: center;
        height: 1.8rem;
        line-height: 1.8rem;
        margin: 1rem;
    }
    #eva li{
        border-bottom: 1px solid #ddd;
    }
    #eva>#allEva li{
        padding: 1rem;
    }
    #eva>#allEva .un>span:first-child{
        float: left;
    }
    #eva>#allEva .un>span:last-child{
        float: right;
        font-size: 0.6rem;
        color: #666;
    }
    #eva .iconfont{
        font-size: 0.6rem;
        letter-spacing:0.3rem;
        clear: both;
        text-align:start;
        line-height: 1rem;
        color: crimson;
    }
</style>

