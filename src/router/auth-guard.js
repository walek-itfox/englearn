import * as fb from 'firebase'

export default function (to, from, next) {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (fb.auth().currentUser) {
      next()
    } else {
      next('/login?loginError=true')
    }
  } else {
    next()
  }
}