import Vue from 'vue'
import Router from 'vue-router'
import Page1 from '../Views/Page1'
import Page2 from '../Views/Page2'
import Page3 from '../Views/Page3'
import InacessibleModal from '../Views/Page4'
import Accordions from '../Views/Page5'
import AcessibleModal from '../Views/Page6'
import ToDoList from '../Views/Page7'
import TabsPage from '../Views/Page8'
import InAccessiblePage from '../Views/Page9'
import AccessiblePage from '../Views/Page10'
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
    },
    {
      path: '/to-do-list',
      name: 'todolist',
      component: ToDoList
    },
    {
      path: '/tabs',
      name: 'tabs',
      component: TabsPage
    },
    {
      path: '/inaccessible-page',
      name: 'noAccessibilityPage',
      component: InAccessiblePage
    },
    {
      path: '/accessible-page',
      name: 'accessiblePage',
      component: AccessiblePage
    }
  ]
})
