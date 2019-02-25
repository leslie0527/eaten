<template>
  <div id="app">
    <header>
      <div id="header"></div>
      <div id="bodies">
        <div></div>
        <h2>嗨抄手<span class="iconfont">&#xe783;</span></h2>
        <p>评价4.7 月售0单 专送约30分钟</p>
        <p><span class="iconfont">&#xe62a;</span>满30减15，满45减20<span class="iconfont">&#xe600;</span></p>
        <p>公告:用餐高峰期，请提前下单</p>
      </div>
      <div id="footer">
        <ul>
          <li><router-link to="/index">点餐</router-link></li>
          <li><a href="/eva">评价</a></li>
          <li><a href="/business">商家</a></li>
        </ul>
      </div>
    </header>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
*{
  margin: 0;
  padding: 0;
}
@font-face {
  font-family: 'iconfont';
  src: url('../public/font/iconfont.eot');
  src: url('../public/font/iconfont.eot?#iefix') format('embedded-opentype'),
  url('../public/font/iconfont.woff2') format('woff2'),
  url('../public/font/iconfont.woff') format('woff'),
  url('../public/font/iconfont.ttf') format('truetype'),
  url('../public/font/iconfont.svg#iconfont') format('svg');
  /*url('../public/font/manjian.svg#iconfont') format('svg');*/
}
.iconfont {
  font-family: "iconfont" !important;
  font-size: 1.2rem;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.iconfont{
  margin-left: 0.3rem;
}
header>div#header{
    background: url("http://127.0.0.1:3000/img/header_bg.jpg");
    width: 100%;
    height:100px;
  }

  header>div#bodies{
    text-align: center;
    position: relative;
    margin-top: 1.6rem;
  }
  header>div#bodies>p{
    font-size: 0.5rem;
    line-height: 1.3rem;
  }
  header>div#bodies>div{
    background: url("http://127.0.0.1:3000/img/hai_icon.webp.jpg");
    background-size: 100%;
    width: 5rem;
    height: 5rem;
    position: absolute;
    left: 50%;
    margin-left: -40px;
    top:-5rem;
    border-radius: 5px;
  }
  header>div#bodies>p>span{
    font-size: 0.8rem;
  }
  header>div#bodies>p>span:first-child{
    color:red;
    margin-right: 5px;
  }
  header>div#bodies>p:last-child{
    color:grey;
  }
  header>div#footer>ul{
    list-style: none;
    width: 100%;
    display: inline-flex;
    justify-content: space-around;
    padding-bottom: 5px;
    border-bottom:1px solid #ccc;
  }
  header>div#footer>ul>li>a{
    text-decoration:none;
    color: black;
  }
</style>
