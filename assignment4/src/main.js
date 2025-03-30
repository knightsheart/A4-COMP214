import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import MainMenu from './components/MainMenu.vue'
import EmployeeHiring from './components/HR_Employee/EmployeeHiring.vue'
import IdentifyJobDescription from './components/HR_Job/IdentifyJobDescription.vue'
import CreateJob from './components/HR_Job/CreateJob.vue'
import ChangeJob from './components/HR_Job/ChangeJob.vue'
import EmployeeList from './components/HR_Employee/EmployeeList.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: MainMenu
    },
    {
      path: '/employee/hire-employee',
      component: EmployeeHiring
    },
    {
      path: '/employee/update-employee',
      component: EmployeeList
    },
    {
      path: '/job/identify-desc',
      component: IdentifyJobDescription
    },
    {
      path: '/job/change-job',
      component: ChangeJob
    },
    {
      path: '/job/create-job',
      compontent: CreateJob
    }
  ]
})
const app = createApp(App);
app.use(router);
app.mount('#app')
