<script setup>
import JobDropdown from './JobDropdown.vue'
import EmployeeDropdown from './EmployeeDropdown.vue'
</script>

<template>
    <navbar>
      <router-link to="/" class="navbar">Home</router-link>
      <EmployeeDropdown title="HR Employee"></EmployeeDropdown>
      <JobDropdown title="HR Job"></JobDropdown>
  </navbar>
</template>