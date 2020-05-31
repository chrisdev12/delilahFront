import Vue from 'vue';
import Router from 'vue-router';
import Home from './components/Home.vue';
import Login from './components/Login.vue';
import Register from './components/Register.vue';
import Profile from './components/Profile.vue';
import store from './store';

Vue.use(Router);

const router = new Router({
  routes : [
    {
      path: '*',
      name:'home',
      component: Home
    },
    {
      path: '/login',
      name:'login',
      component: Login
    },
    {
      path: '/register',
      name:'register',
      component: Register
    },
    {
      path: '/profile/:user',
      name:'profile',
      component: Profile,
      meta: {requiresAuth: true}
    }
  ]
})

//Auth guard
router.beforeEach((to, from, next) => {
  //Check if any of the matched routes has the specified meta (protected routes)
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.authenticate) next({ name: 'login' })
    next()
  }

  next()
});

export default router;
