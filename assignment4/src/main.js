import './assets/main.css'

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import MainMenu from './components/MainMenu.vue'
import EmployeeHiring from './components/HR_Employee/EmployeeHiring.vue'
import IdentifyJob from './components/HR_Job/IdentifyJob.vue'
import ChangeDescription from './components/HR_Job/ChangeDescription.vue'
import EditJob from './components/HR_Job/EditJob.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: MainMenu
    },
    {
      path: '/employee-hiring',
      component: EmployeeHiring
    },
    {
      path: '/job/identify',
      component: IdentifyJob
    },
    {
      path: '/job/change-desc',
      component: ChangeDescription
    },
    {
      path: '/job/edit-job',
      component: EditJob
    }
  ]
})
const app = createApp(App);
app.use(router);
app.mount('#app')
