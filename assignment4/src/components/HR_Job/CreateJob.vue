<script setup>
</script>

<template>
  <h1>Create a new Job</h1>
  <h2>Enter Job Information</h2>
  <form>
    <div class="new-job-form">
      <label for="new-job-id">Job Id:</label>
      <input type="number">
      <label for="new-job-title">Job Title:</label>
      <input type="text">
      <label for="minimum-salary">Minimum Salary:</label>
      <input type="number" id="minimum-salary" name="minimum-salary">
      <label for="maximum-salary">Maximum Salary</label>
      <input type="number" id="maximum-salary" name="maximum-salary">
    </div>
  </form>
  <!--Once clicked will execute the create job procedure based on input above-->
  <button id="create-job-button">Create Job</button>
</template>