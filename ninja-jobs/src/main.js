import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // auto import the index.js file data

// passing the router to use by our mounted div
createApp(App).use(router).mount('#app')
