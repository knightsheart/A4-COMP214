<script setup>
</script>

<template>
  <h1>Identify Job Description</h1>
  <!--Enter job id-->
  <h2>Enter Job Id</h2>
  <form>
    <div class="job-id-form">
      <label for="job-id">Enter Job Id:</label>
      <input type="number" id="job-id" name="job-id">
    </div>
  </form>
  <button id="job-id-button">Submit</button>
  <!--CURRENT JOB DESC: Returns a job description based on job id (interacts with db)-->
  <!--Format: job id | desc -->
  <h2>Current Job Description</h2>
</template>