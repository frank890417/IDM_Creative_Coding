import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import TutSection2 from "./views/TutSection2.vue"
import TutSection3 from "./views/TutSection3.vue"

Vue.use(Router)

let router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/section/2',
      name: 'tutsection2',
      component: TutSection2

    },
    {
      path: '/section/3',
      name: 'tutsection3',
      component: TutSection3

    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ],
  
})

router.afterEach((to, from) => {
  console.log(to)
  // if (to.path.indexOf("/section/")!=-1){
    window.scrollTo(0,0)
  // }
})

export default router