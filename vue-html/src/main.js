// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import '../static/scss/common.scss'
import VueRouter from 'vue-router'
import Home from './components/Home'
import UI from './components/UI'
import Web from './components/Web'
import Paint from './components/Paint'
import About from './components/About'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios,axios)
Vue.use(VueRouter)

Vue.config.productionTip = false


const router=new VueRouter({
  mode:'history',
  routes:[
    {
      path:'/',component:Home
    },{
    path:'/ui_list.html',component:UI
    },{
    path:'/web_list.html',component:Web
    },{
    path:'/paint_list.html',component:Paint
    },{
    path:'/about_list.html',component:About
    }
  ]
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
