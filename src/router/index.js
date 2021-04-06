import Vue from 'vue'
import Router from 'vue-router'
import Page1 from '../Views/Page11'
import Page2 from '../Views/Page2'
import Page3 from '../Views/Page3'
import InacessibleModal from '../Views/Page4'
import Accordions from '../Views/Page5'
import AcessibleModal from '../Views/Page6'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
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
    },
    {
      path: '/modal-inaccessible',
      name: 'modal-inaccessible',
      component: InacessibleModal
    },
    {
      path: '/modal-accessible',
      name: 'modal-accessible',
      component: AcessibleModal
    },
    {
      path: '/accordions',
      name: 'accordions',
      component: Accordions
    }
  ]
})
