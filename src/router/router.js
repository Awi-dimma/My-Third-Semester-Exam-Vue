import { createRouter, createWebHistory } from 'vue-router'
import CounterComp from '../components/CounterComp.vue'
import ErrorPage from '../components/ErrorPage.vue'
import HomeComp from '../components/HomeComp.vue'

const routes = [
  
  {
    path: '/',
    name: 'HomeComp',
    component: HomeComp
  },
  {
    path: '/Counter',
    name: 'CounterComp',
    component: CounterComp
  },
  {
    path: "/:pathMatch(.*)*",
    name: "ErrorPage",
    component: ErrorPage
  }


  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router