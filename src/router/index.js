/*
 * @Descripttion: 
 * @version: 
 * @Author: will
 * @Date: 2018-08-04 13:42:05
 * @LastEditors: will
 * @LastEditTime: 2020-12-30 20:47:41
 */
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import login from '@/components/login/login'
import index from '@/components/index/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/index',
      name: 'index',
      component: index
    }
  ]
})
