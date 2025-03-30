<script setup>
import JobDropdown from './JobDropdown.vue'
</script>

<template>
    <navbar>
      <router-link to="/" class="navbar">Home</router-link>
      <router-link to="/employee-hiring" class="navbar">HR Employee</router-link>
      <JobDropdown title="HR Job"></JobDropdown>
  </navbar>
</template>