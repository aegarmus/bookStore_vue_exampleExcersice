import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'

import HomeView from '../views/HomeView.vue'
const ProductList = () => import('../views/ProductList.vue')
const CartPage = () => import('../views/CartPage.vue')
const RegisterView = () => import('../views/RegisterView.vue')
const LoginView = () => import('../views/LoginView.vue')
const CrudAdminBook = () => import('../views/CrudAdminBook.vue')
 
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/products',
    name: 'products',
    component: ProductList
  },
  {
    path: '/cart',
    name: 'cart',
    component:CartPage
  },
  {
    path: '/signup',
    name: 'registro',
    component: RegisterView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/admin/books',
    name: 'admin',
    component: CrudAdminBook,
    meta: {
      requiresAuth: true,
      requireAdmin: true
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = store.getters['auth/isAuthenticated']
  const isAdmin = store.getters['auth/isAdmin']

  if(to.matched.some(record => record.meta.requiresAuth) && !isAuthenticated) {
    next('/login')
  } else if(to.matched.some(record => record.meta.requireAdmin) && !isAdmin) {
    next('/')
  } else {
    next()
  }
})


export default router
