import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { firebaseApp } from './data/initializeFirebaseProject';

import { 
    VueFire, 
    VueFireAuth,
    VueFireFirestoreOptionsAPI, 
  } from 'vuefire'

import App from './App.vue'
import router from './router'


const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueFire, {
    firebaseApp,
    modules: [
      VueFireFirestoreOptionsAPI(),
      VueFireAuth(),
    ],
})

app.mount('#app')
