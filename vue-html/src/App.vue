<template>
  <div id="app">
    <Nav/>
    <router-view class="right"></router-view>
  </div>
</template>

<script>
import Nav from './components/Nav'
export default {
  name: 'App',
  components: {
    Nav
  }
}
</script>

<style scoped>
  .right{
    width: calc(100vw - 160px);
    margin-left: 160px;
  }
</style>
