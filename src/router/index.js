import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import( '../views/Home.vue')
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import( '../views/cart.vue')
  },
  {
    path: '/beiseer',
    name: 'beiseer',
    component: () => import( '../views/beiseer.vue')
  },
  // {
  //   path: '/home',
  //   name: 'home',
  //   component: () => import( '../demo/home.vue')
  // },
  // {
  //   path: '/carts',
  //   name: 'carts',
  //   component: () => import( '../demo/carts.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
