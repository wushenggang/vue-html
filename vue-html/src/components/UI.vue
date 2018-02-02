<template>
<div id="Ui">
  <p class="title">USER INITEARFACE DESIGN</p>
  <p class="desc">本网站设计风格仿照站酷的设计，代码均本人用vue进行重构</p>
  <p class="line"></p>
  <ul class="list clearfix">
    <li v-for="item in items">
      <router-link to="">
        <img :src="item.img" alt="">
        <p class="list-title">{{item.title}}</p>
        <p class="list-desc">{{item.desc}}</p>
      </router-link>
    </li>
  </ul>
</div>
</template>

<script>
    export default {
        name: "UI",
        data(){
        return {
            items:[],
        }
      },
      methods:{
          loadNews(){
              this.axios.get('../../static/data/ui.json').then((response)=>{
                this.items=response.data.uiNews;
                console.log(this.items)
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
  #Ui{
    margin: 0 auto;
    width: 80%;
    max-width: 1440px;
    min-width: 900px;
    padding-left: 160px;
  }
.title{
  margin-left: 1.5%;
  padding-top: 100px;
  letter-spacing: 2px;
  font-size: 50px;
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
    margin-left: 1.5%;
    padding-top: 30px;
    font-size: 15px;
    letter-spacing: 1px;
    -webkit-animation: opacityChanged 2s;
    -o-animation: opacityChanged 2s;
    animation: opacityChanged 2s;
    -webkit-animation-fill-mode: forwards;
    -moz-animation-fill-mode: forwards;
    -o-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
    animation-delay: 1s;
    opacity: 0;
  }
  .line{
    margin-top:20px;
    margin-bottom: 50px;
    margin-left: 1.5%;
    width: 66%;
    height: 1px;
    background: #000;
    -webkit-animation: opacityChanged 2s;
    -o-animation: opacityChanged 2s;
    animation: opacityChanged 2s;
    -webkit-animation-fill-mode: forwards;
    -moz-animation-fill-mode: forwards;
    -o-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
    animation-delay: 2s;
    opacity: 0;
  }
  @keyframes opacityChanged{
    from {opacity:0}
    to  {opacity:0.8}
  }
  @keyframes opacityToMost{
    from {opacity:0}
    to {opacity:1}
  }
  .list{
    -webkit-animation: opacityToMost 2s;
    -o-animation: opacityToMost 2s;
    animation: opacityToMost 2s;
    opacity: 0;
    -webkit-animation-delay: 3s;
    -moz-animation-delay: 3s;
    -o-animation-delay: 3s;
    animation-delay: 3s;
    -webkit-animation-fill-mode: forwards;
    -moz-animation-fill-mode: forwards;
    -o-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
  }
  .list a{
    float: left;
    margin: 1.5%;
    padding-bottom: 50px;
    width: 30%;
    height: 520px;
    min-width: 400px;
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
  .list a:hover{
    -webkit-box-shadow: 0 0 80px #ddd;
    -moz-box-shadow: 0 0 80px #ddd;
    box-shadow: 0 0 80px #ddd;
  }
  .list a img{
    width: 100%;
    background: #f2f2f2;
  }
  .list a .list-title{
    padding: 30px 30px 0;
    color: #2F201B;
  }
  .list a .list-desc{
    padding-top: 24px;
    padding-right: 30px;
    padding-left: 30px;
    color: #000;
    font-size: 14px;
    opacity: 0.6;
  }
</style>
