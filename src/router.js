import Vue from 'vue'
import Router from 'vue-router'
import GMap from './components/home/GMap.vue'
import Signup from './components/auth/Signup.vue'
import Login from './components/auth/Login.vue'
import Profile from './components/profile/ViewProfile.vue'
import firebase from 'firebase/app'
import 'firebase/auth'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'GMap',
      component: GMap,
      meta: {
        requiresAuth: true
      }
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
    {
      path: '/profile/:id',
      name: 'profile',
      component: Profile,
      meta: {
        requiresAuth: true
      }
    }
  ]
})


router.beforeEach((to, from, next) => {
  // check if rooute requires auth
  if(to.matched.some(rec => rec.meta.requiresAuth)) {
    // check auth state of user
    let user = firebase.auth().currentUser
    if(user){
      // user signed in, proceed to route
      next()
    }else{
      // no user signed in, redirect to login
      next({name: 'login'})
    }
  }else{
    next()
  }
})

export default router
