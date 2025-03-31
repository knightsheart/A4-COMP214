<script setup>
import NavbarComponent from "../NavbarComponent.vue"
</script>

<template>
  <navbar>
    <NavbarComponent/>
  </navbar>
    <div class="employee-hiring-form">
      <h1>Employee Hiring Form</h1>
      <form>
        <div class="employee-personal-info">
          <div class="horizontal-input">
            <label for="fname">First name:</label>
            <input type="text" id="fname" name="fname" required>
          </div>
          <div class="horizontal-input">
            <label for="lname">Last name:</label>
            <input type="text" id="lname" name="lname" required>
          </div>
          <div class="horizontal-input">
            <label for="phone">Email:</label>
            <input type="email" id="email" name="email" required>
          </div>
          <br>
          <div class="horizontal-input">
            <label for="phone">Phone number:</label>
            <input type="text" id="phone" name="phone" required>
          </div>
          <div class="horizontal-input">
            <label for="hire-date">Hire Date:</label>
            <input type="date" id="hire-date" name="hire-date">
          </div>
          <div class="horizontal-input">
            <label for="salary">Salary:</label>
            <input type="text" id="salary" name="salary" required>
          </div>
          <div class="employee-dropdown">
            <div class="dropdown-style">
              <label>HR JOBS</label>
              <select>
                <!--Must fetch data from HR_JOBS-->
                <option disabled value="Select a job."></option>
              </select>
            </div>
            <div class="dropdown-style">
              <label>HR MANAGERS</label>
              <select>
                <!--Must fetch data from HR_MANAGER-->
                <option disabled value="Select a manager."></option>
              </select>
            </div>
            <div class="dropdown-style">
              <label>HR DEPARTMENTS</label>
              <select>
                <!--Must fetch data from HR_JOBS-->
                <option disabled value="Select a department."></option>
              </select>
            </div>
          </div>
        </div>
      </form>
    </div>
    <button id="hire-employee-button">Hire Employee</button>
</template>

<!--Handle db stuff here in regards to v-for and displaying db data-->
<script>
</script>