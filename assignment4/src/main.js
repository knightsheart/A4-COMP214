import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import MainMenu from './components/MainMenu.vue'
import EmployeeHiring from './components/HR_Employee/EmployeeHiring.vue'
import EmployeeList from './components/HR_Employee/EmployeeList.vue'
import IdentifyJobDescription from './components/HR_Job/IdentifyJobDescription.vue'
import ChangeJob from './components/HR_Job/ChangeJob.vue'
import CreateJob from './components/HR_Job/CreateJob.vue'
import "bootstrap";
import "../node_modules/bootswatch/dist/cerulean/bootstrap.min.css";

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

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
      path: '/job/get-desc',
      component: IdentifyJobDescription
    },
    {
      path: '/job/change-job',
      component: ChangeJob
    },
    {
      path: '/job/create-job',
      component: CreateJob
    },
  ]
})
const app = createApp(App);
app.use(router);
app.mount('#app')
