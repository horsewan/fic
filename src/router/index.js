import Vue from 'vue'
import Router from 'vue-router'

// import Index from '@/components/page/Index'
// import Login from '@/components/page/Login'
// import Register from '@/components/page/Register'
// import Center from '@/components/page/Center'
// import Home from '@/components/page/Home'
// import Recharge from '@/components/page/Recharge'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    // {
    //   path: '/',
    //   component: resolve => require(['@/components/page/Index'], resolve),
    //   meta: {title: 'Index页面'},
    //   children: [
    //     {
    //       path: '/index',
    //       component: resolve => require(['@/components/page/Index'], resolve),
    //       meta: {title: 'Index页面'},
    //     },
    //
    //   ]
    // },
    {
      path: '/index',
      name: 'Index',
      component: resolve => require(['@/components/page/Index'], resolve)
    },
    {
      path: '/login',
      name: 'Login',
      component: resolve => require(['@/components/page/Login'], resolve)
    },
    {
      path: '/register',
      name: 'Register',
      component: resolve => require(['@/components/page/Register'], resolve),
    },
    {
      path: '/center',
      name: 'Center',
      component: resolve => require(['@/components/page/Center'], resolve),
      meta: {title: 'Center页面'},
    },
    {
      path: '/recharge',
      name: 'Recharge',
      component: resolve => require(['@/components/page/Recharge'], resolve),
      meta: {title: 'Recharge 页面'},
    },
    {
      path: '/trade',
      name: 'Trade',
      component: resolve => require(['@/components/page/Trade'], resolve),
      meta: {title: 'Trade 页面'},
    },
    {
      path: '/home',
      name: 'Home',
      component: resolve => require(['@/components/page/Home'], resolve)
    },
    {
      path: '/swiper',
      name: 'Swiper',
      component: resolve => require(['@/components/page/Swiper'], resolve)
    },
    {
      path: '/music',
      name: 'Music',
      component: resolve => require(['@/components/page/Music'], resolve)
    },
    {
      path: '*',
      redirect: '/index',
      hidden: true
    }
  ]
})
