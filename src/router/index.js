import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/components/page/Index'
import Login from '@/components/page/Login'
import Register from '@/components/page/Register'
import Center from '@/components/page/Center'
import Home from '@/components/page/Home'
import Recharge from '@/components/page/Recharge'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/',
      component: Index,
      meta: {title: 'Index页面'},
      children: [
        {
          path: '/index',
          component: Index,
          meta: {title: 'Index页面'},
        },

      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register,
    },
    {
      path: '/center',
      name: 'Center',
      component: Center,
      meta: {title: 'Center页面'},
    },
    {
      path: '/recharge',
      name: 'Recharge',
      component: Recharge,
      meta: {title: 'Recharge 页面'},
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '*',
      redirect: '/index',
      hidden: true
    }
  ]
})
