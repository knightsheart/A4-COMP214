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
            <router-link to="/job/identify">Identify Job Description</router-link>
          </div>
          <div class="menu-item">
            <router-link to="/job/change-desc">Change Job Description</router-link>
          </div>
          <div class="menu-item">
            <router-link to="/job/edit-job">Edit Job</router-link>
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