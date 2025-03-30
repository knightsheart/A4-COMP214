<script setup>
</script>

<template>
  <h1>Employee List</h1>
  <h2>Update Employees</h2>
  <!--Purpose: User can edit salary, phone or email for all or any employees.-->
  <!--Select one employee or any, can't be both using a -->
  <!--If one is selected, ask for employee id.-->
  <!--Have three inputs for salary, phone and email-->
  <!--Save to Database button that will update the employees-->
  <!--CURRENT EMPLOYEES: Return list of current employees in database using a table in a csv-like format-->
  <form>
    <div class="update-employee-form">
      <div class="employee-personal-info">
        <div class="horizontal-input">
            <label for="phone">Salary:</label>
            <input type="text" id="salary-list" name="salary-list" required>
          </div>
        <div class="horizontal-input">
            <label for="email">Email:</label>
            <input type="email" id="email-list" name="email-list" required>
          </div>
          <div class="horizontal-input">
            <label for="phone">Phone number:</label>
            <input type="text" id="phone-list" name="phone-list">
          </div>
          <br>
      </div>
    </div>
  </form>
  <button id="update-employee-button">Update Employee</button>
  <h2>Current Employees</h2>
  <table id="current-employees">
    <thead>
      <tr>Employee Id</tr>
      <tr>Salary</tr>
      <tr>Phone</tr>
      <tr>Email</tr>
    </thead>
    <tbody>
      <!--Queried from the database-->
    </tbody>
  </table>
</template>