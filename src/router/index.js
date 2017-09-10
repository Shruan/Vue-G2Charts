import Vue from 'vue'
import Router from 'vue-router'
import LineTest from '@/pages/LineTest'
import PieTest from '@/pages/PieTest'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '线性图表',
      component: LineTest
    },
    {
      path: '/pie',
      name: '线性图表',
      component: PieTest
    }
  ]
})
