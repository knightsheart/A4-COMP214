<script setup>
</script>

<template>
  <!--List the job id, job title, min salary and max salary as a table-->
  <!--Ensure the table cells other than job id are editable-->
  <h1>Change Job Information</h1>
  <table id="job-information">
    <thead>
      <tr>Job Id</tr>
      <tr>Job Title</tr>
      <tr>Min Salary</tr>
      <tr>Max Salary</tr>
    </thead>
    <tbody>
      <!--Add in table row and data from db-->
    </tbody>
  </table>
  <button id="change-job-button">Change Job</button>
</template>

<!--As for functionality, add an event listener to the cells (td) that have an id of editable-->