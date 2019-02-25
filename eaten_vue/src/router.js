import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import business from './components/business.vue'
import index from './components/index.vue'
import eva from './components/evaluate.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
        {path:"/",component:index},
        {path:"/index",component:index},
        {path:"/business",component:business},
        {path:'/eva',component:eva}
  ]
})
