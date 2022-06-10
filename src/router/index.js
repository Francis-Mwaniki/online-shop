import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Products from '../views/Products.vue'
import Pricing from '../views/Pricing.vue'
import Services from '../views/Services.vue'
import About from '../views/About.vue'
import ShoppingCart from '../views/ShoppingCart.vue'
import Signup from '../views/Signup.vue'
import Login from '../views/Login.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/products',
    name: 'products',
    component: Products
  },
  {
    path: '/pricing',
    name: 'pricing',
    component: Pricing
  },
  {
    path: '/services',
    name: 'services',
    component: Services
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/ShoppingCart',
    name: 'ShoppingCart',
    component: ShoppingCart
  },
  {
    path: '/signup',
    name: 'signup',
    component: Signup
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
