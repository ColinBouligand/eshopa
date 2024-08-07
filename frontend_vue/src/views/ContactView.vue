<template>
  <div class="background-container">
    <div class="contact">
      <p>Contact Name</p>
      <p>Email: contact@example.com</p>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ContactCart'
})
</script>

<style scoped>
.background-container {
  width: 70vw;
  height: 70vh;
  background: url('../assets/white-shopping.svg') no-repeat center center;
  background-size: cover; /* Adjust as needed */
  position: relative;
  top: 10vh;
  left:15vw;    
}
.contact {
  position: absolute;
  top:30%;
  left: 30%;
}
</style>
