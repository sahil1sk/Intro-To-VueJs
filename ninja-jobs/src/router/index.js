import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import NotFound from '../views/NotFound.vue'
import Jobs from '../views/jobs/Jobs.vue'
import JobDetails from '../views/jobs/JobDetails.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/jobs',
    name: 'Jobs',
    component: Jobs
  },
  {
    path: '/jobs/:id', // id will come dynamically
    name: 'JobDetails',
    component: JobDetails,
    props: true
  },
  // redirect
  {
    path: '/all-jobs', // so if some one come to this route then it will redirect to jobs route
    redirect: '/jobs',
  },
  // catch all 404
  {
    path: '/:catchAll(.*)', // if no route match then this route will called
    name: 'NotFound',
    component: NotFound
  }
]

// createRouter helps to create the routing system
const router = createRouter({ 
  history: createWebHistory(process.env.BASE_URL), // createWebHistory helps to create the history to go back in the decent way means non-refresh way
  routes
})

export default router
