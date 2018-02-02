<template>
  <div id="nav">
    <img src="../assets/logo.svg" alt="" class="logo">
    <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/ui_list.html">UI</router-link>
      </li>
      <li>
        <router-link to="/web_list.html">Web</router-link>
      </li>
      <li>
        <router-link to="/paint_list.html">Paint</router-link>
      </li>
      <li>
        <router-link to="/about_list.html">About</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "Nav"
    }
</script>

<style scoped>
      #nav{
        width:160px ;
        height: 100vh;
        position: fixed;
        left: 0;
        top: 0;
        background: #fff;
        -webkit-box-shadow: 1px 0 0 0 #CDCDCD;
        -moz-box-shadow: 1px 0 0 0 #CDCDCD;
        box-shadow: 1px 0 0 0 #CDCDCD;
      }
  .logo{
    position: relative;
    top: 40px;
    left: 55px;
    margin-bottom: 50px;
    width: 50px;
  }
  ul{
    position: absolute;
    top: calc(50% - 240px);
    right: 0;
    left: 0;
    margin: auto;
  }
  a {
    display: block;
    margin-top: 60px;
    width: 100%;
    color: #000;
    text-align: center;
    font-size: 20px;
    opacity: 0.3;
    -webkit-transition: opacity 0.5s;
    -moz-transition: opacity 0.5s;
    -ms-transition: opacity 0.5s;
    -o-transition: opacity 0.5s;
    transition: opacity 0.5s;
  }
  a:hover{
    opacity: 1;
  }
</style>
