import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FoodsDetail from '../views/FoodsDetail.vue'
import KeranjangView from '../views/KeranjangView.vue'
import OrderSukses from '../views/OrderSukses.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/keranjang',
    name: 'KeranjangView',
    component: KeranjangView
  },
  {
    path: '/ordersukses',
    name: 'OrderSukses',
    component: OrderSukses
  },
  {
    path: '/foods',
    name: 'foods',
    component: () => import(/* webpackChunkName: "about" */ '../views/FoodsView.vue')
  },    {
    path: '/foods/:id',
    name: 'FoodsDetail',
    component: FoodsDetail
  },  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
