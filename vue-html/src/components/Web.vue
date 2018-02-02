<template>
<div id="web-wrap">
  <div id="web">
    <p class="title">WEB DESIGN</p>
    <p class="desc">本网站设计风格仿照站酷的设计，代码均本人用vue进行重构</p>
    <p class="line"></p>
    <ul class="list">
      <li v-for="item in items">
        <router-link to="" class="clearfix">
          <img :src="item.img" alt="">
          <div class="content">
            <p class="list-title">
                {{item.title}}
            </p>
            <p class="list-desc">
                {{item.desc}}
            </p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
  <div class="footer">
    <p class="footer-text">
      © made by wushenggang
    </p>
  </div>
</div>
</template>

<script>
    export default {
        name: "web",
      data(){
          return {
            items:[]
          }
      },
      methods:{
          loadNews(){
            this.axios.get("../../static/data/web.json").then((response)=>{
              this.items=response.data.webNews;
            })
          }
      },
      mounted(){
          this.$nextTick(function(){
            this.loadNews();
          })
      }
    }
</script>

<style scoped>
  #web{
    margin: 0 auto;
    padding-left: 160px;
    width: 80%;
    max-width: 1440px;
    min-width: 900px;
  }
.title{
  font-size: 55px;
  text-align: right;
  padding-top: 150px;
  opacity: 0.8;
  margin-right: 1.5%;
  margin-left: 1.5%;
  letter-spacing: 2px;
  font-family: customFont;
  -webkit-animation: opacityChanged 2s;
  -o-animation: opacityChanged 2s;
  animation: opacityChanged 2s;
  -webkit-animation-fill-mode: forwards;
  -moz-animation-fill-mode: forwards;
  -o-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
}
  .desc{
    text-align: right;
    opacity: 0.7;
    margin: 1.5%;
    padding-top: 10px;
    font-size: 15px;
    letter-spacing: 1px;
    -webkit-animation: opacityChanged 2s;
    -o-animation: opacityChanged 2s;
    animation: opacityChanged 2s;
    -webkit-animation-delay: 1s;
    -moz-animation-delay: 1s;
    -o-animation-delay: 1s;
    animation-delay: 1s;
    -webkit-animation-fill-mode: forwards;
    -moz-animation-fill-mode: forwards;
    -o-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
    opacity: 0;
  }
  .line{
    position: relative;
    left: 31%;
    margin-bottom: 80px;
    opacity: 0.5;
    margin-top: 20px;
    margin-left: 1.5%;
    width: 66%;
    height: 1px;
    background: black;
    -webkit-animation: opacityChanged 2s;
    -o-animation: opacityChanged 2s;
    animation: opacityChanged 2s;
    -webkit-animation-delay: 2s;
    -moz-animation-delay: 2s;
    -o-animation-delay: 2s;
    animation-delay: 2s;
    animation-fill-mode: forwards;
    opacity: 0;
  }
  .list{
    -webkit-animation: opacityToMost 2s;
    -o-animation: opacityToMost 2s;
    animation: opacityToMost 2s;
    -webkit-animation-delay: 3s;
    -moz-animation-delay: 3s;
    -o-animation-delay: 3s;
    animation-delay: 3s;
    -webkit-animation-fill-mode: forwards;
    -moz-animation-fill-mode: forwards;
    -o-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
    opacity: 0;
  }
  .list a{
    display: block;
    margin: 30px 1.5% 0;
    height: 320px;
    min-width: 1000px;
    background: #fff;
    -webkit-box-shadow: 0 0 10px #ddd;
    -moz-box-shadow: 0 0 10px #ddd;
    box-shadow: 0 0 10px #ddd;
    cursor: pointer;
    -webkit-transition: box-shadow 1s;
    -moz-transition: box-shadow 1s;
    -ms-transition: box-shadow 1s;
    -o-transition: box-shadow 1s;
    transition: box-shadow 1s;
  }
  .list a img{
    width: 80%;
    height: 320px;
    background: #f2f2f2;
    letter-spacing: 1px;
  }
  .list a .content{
    float: right;
    width: 20%;
  }
  .list-title{
    padding-top: 40px;
    padding-bottom: 0;
    color: #2F201B;
    text-align: center;
    letter-spacing: 1px;
  }
  .list-desc{
    padding: 30px 40px 30px 40px;
    color: #2F201B;
    font-size: 13px;
    opacity: 0.7;
    letter-spacing: 1px;
  }
  .footer{
    margin-top: 80px;
    width: 100%;
    height: 50px;
    background: #1f2021;
  }
  .footer-text{
    bottom: 0;
    width: 100%;
    color: #fff;
    text-align: center;
    font-size: 14px;
    line-height: 50px;
    opacity: 0.6;
  }
  @keyframes opacityChanged{
    from {opacity:0}
    to {opacity:0.8}
  }
  @keyframes opacityToMost{
    from {opacity:0}
    to {opacity:1}
  }
  a:hover{
    -webkit-box-shadow: 0 0 80px #ddd;
    -moz-box-shadow: 0 0 80px #ddd;
    box-shadow: 0 0 80px #ddd;
  }
</style>
