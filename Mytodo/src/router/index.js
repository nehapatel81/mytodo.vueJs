import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import RegisterView from '../views/RegisterView.vue'
import LoginView from '../views/LoginView.vue'
import BookView from '../views/BookView.vue'





import { useUserStore } from '../stores/user';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        auth: false,
      }
    },

    {
      path: '/profile',
      name: 'profile',
      component: AboutView,
      meta: {
        auth: true,
        role: ['Admin', 'User']
      }
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      meta: {
        auth: false,
      }
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView,
      meta: {
        auth: false,
      }
    },
    {
      path: '/book',
      name: 'book',
      component: BookView,
      meta: {
        auth: true,
      }
    },
  ]
});

router.beforeEach(async (to, from) => {
  
  //auth store loading
  const userStore = useUserStore();

  if(to.meta.auth && !userStore.isAuthenticated) {
    return { name: 'login' };
  }

  if(Array.isArray(to.meta.role) && to.meta.role.length > 0){
    if(to.meta.role.includes(userStore.userRole)){
      return { name: 'noauth'};
    }
  }

  // if(to.fullPath == '/login' && userStore.isAuthenticated) {
  //   return { name: 'home' };
  // }
  // if(to.fullPath == '/register' && userStore.isAuthenticated) {
  //   return { name: 'home' };
  // }
});

export default router;
