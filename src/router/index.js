import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',

  routes: [
    {
      path: '/',
      name: 'Main',
      component: () => import('@/components/Main'),
      children: [
        {
          path: 'page1',
          name: 'Page1',
          component: () => import('@/components/Page1')
        },
        {
          path: 'page2',
          name: 'Page2',
          component: () => import('@/components/Page2')
        }
      ]
    },
    {
      path: '/test',
      name: 'Test',
      component: () => import('@/components/Test')
    }
  ]
})
