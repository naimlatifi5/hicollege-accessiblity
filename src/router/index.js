import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Page1 from '@/Views/Page1'
import Page2 from '@/Views/Page2'
import Page3 from '@/Views/Page3'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/page1',
      name: 'page1',
      component: Page1
    },
    {
      path: '/page2',
      name: 'page2',
      component: Page2
    },
    {
      path: '/page3',
      name: 'page3',
      component: Page3
    }

  ]
})
