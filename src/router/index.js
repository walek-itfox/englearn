import Vue from 'vue'
import Router from 'vue-router'
import * as fb from 'firebase'
import Login from '@/components/Auth/Login'
import Home from '@/components/Home'
import Register from '@/components/Auth/Register'
import Course from '@/components/Courses/Course'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/course/:id',
      name: 'course',
      component: Course,
      props: true,
      meta: {
        requiresAuth: true
      }
    }
  ],
  mode: 'history'
})

router.beforeEach((to, from, next) => {
  const currentUser = fb.auth().currentUser
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)

  if (requiresAuth && !currentUser) next('/login?loginError=true')
  //else if (!requiresAuth && currentUser) next('/')
  else next()
})

export default router
