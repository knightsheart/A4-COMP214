<script setup>
import NavbarComponent from "../NavbarComponent.vue"
</script>

<template>
  <!--List the job id, job title, min salary and max salary as a table-->
  <!--Ensure the table cells other than job id are editable-->
  <NavbarComponent/>
  <h1>Change Job Information</h1>
  <table id="job-information">
    <thead>
      <tr>
        <th>Job Id</th>
        <th>Job Title</th>
        <th>Min Salary</th>
        <th>Max Salary</th>
      </tr>
    </thead>
    <tbody>
      <!--Add in table row and data from db-->
    </tbody>
  </table>
  <button id="change-job-button">Change Job</button>
</template>

<!--As for functionality, add an event listener to the cells (td) that have an id of editable-->