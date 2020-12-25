import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'

let app = null;

// wait for firebase auth to init before creating app
firebase.auth().onAuthStateChanged(() => {
    
    // init app if not already created
    if(!app){
        app = createApp(App).use(router).mount('#app')
    }
        
})

