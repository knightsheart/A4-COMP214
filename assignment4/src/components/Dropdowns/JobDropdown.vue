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
            <router-link to="/job/get-desc">Get Job Description</router-link>
          </div>
          <div class="menu-item">
            <router-link to="/job/change-job">Change Job</router-link>
          </div>
          <div class="menu-item">
            <router-link to="/job/create-job">Create Job</router-link>
          </div>
      </div>
      </transition>
  </div>
</template>

<script>
export default {
  name: 'JobDropdown',
  props: ['title'],
  data () {
    return {
      isOpen: false,
      }
    }
}
</script>