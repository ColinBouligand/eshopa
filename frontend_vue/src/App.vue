<template>
  <v-app>
    <div class="app-container">
      <AppHeader />
      <v-main class="full-width">
        <v-container fluid >
          <router-view />
        </v-container>
      </v-main>
      <AppFooter />
    </div>
  </v-app>
</template>

<script>
import AppHeader from '@/components/Layout/AppHeader.vue'
import AppFooter from '@/components/Layout/AppFooter.vue'

export default {
  components: {
    AppHeader,
    AppFooter
  },
  setup() {}
}
</script>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Ensure the container takes up the full viewport height */
  width:100vw;  
}

.main-content {
  flex: 1; /* This makes the main content area grow and take available space */
}

.content-container {
  padding: 16px;
}

/* Optional: Style the footer to ensure it doesn’t overflow */
.v-footer {
  background-color: #f5f5f5;
  border-top: 1px solid #e0e0e0;
  text-align: center;
  padding: 10px 0;
}
</style>
