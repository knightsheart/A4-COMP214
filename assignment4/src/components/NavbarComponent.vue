<script setup>
import JobDropdown from './Dropdowns/JobDropdown.vue'
import EmployeeDropdown from './Dropdowns/EmployeeDropdown.vue'
</script>

<template>
    <navbar>
      <router-link to="/" class="navbar">Home</router-link>
      <EmployeeDropdown title="HR Employee"></EmployeeDropdown>
      <JobDropdown title="HR Job"></JobDropdown>
  </navbar>
</template>