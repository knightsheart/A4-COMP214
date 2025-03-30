<script setup>
</script>

<template>
  <div class="menu-item" @click="isOpen = !isOpen" >
      <a href ='#'>
          {{ title }}
      </a>
      <transition name="fade" apear>
       <div class="sub-menu" v-if="isOpen">
          <div class="menu-item">
            <router-link to="/employee/hire-employee">Hire Employee</router-link>
          </div>
          <div class="menu-item">
            <router-link to="/employee/update-employee">Update Employee</router-link>
          </div>
      </div>
      </transition>
  </div>
</template>

<script>
export default {
  name: 'EmployeeDropdown',
  props: ['title'],
  data () {
    return {
      isOpen: false,
      }
    }
}
</script>