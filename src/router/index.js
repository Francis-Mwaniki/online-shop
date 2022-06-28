import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Products from '../views/Products.vue'
import Pricing from '../views/Pricing.vue'
import Services from '../views/Services.vue'
import About from '../views/About.vue'
import AdminDashboard from '../views/AdminDashboard.vue'
import Cart from '../views/Cart.vue'
import Signup from '../views/Signup.vue'
import Login from '../views/Login.vue'
import Team from '../views/Team.vue'
import Welcome from '../views/Welcome.vue'
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
    path: '/AdminDashboard',
    name: 'AdminDashboard',
    component: AdminDashboard,
    children:[
      {
        path: '',
        name: 'team',
        component:Team,
      },
    ]
  },
    /* path: '/clientDashboard/:team',
    name: 'clientDashboard',
    component: clientDashboard,
    children: [
      {
        // UserProfile will be rendered inside User's <router-view>
        // when /user/:id/profile is matched
        path: '/team',
        name: 'team',
        component: Team,
        props:true
      }, */
     /*  {
        // UserPosts will be rendered inside User's <router-view>
        // when /user/:id/posts is matched
        path: 'posts',
        component: UserPosts,
      }, 
    ],
  },*/
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
  {
    path: '/cart',
    name: 'cart',
    component: Cart
  },
  {
    path: '/welcome',
    name: 'welcome',
    component: Welcome
  },
  
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
