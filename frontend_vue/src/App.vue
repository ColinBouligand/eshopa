<template>
  <v-app>
    <AppHeader />
    <v-main class="full-width">
      <v-container fluid class="mt-16">
        <router-view />
      </v-container>
    </v-main>
    <AppFooter />
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
.full-width {
  padding: 0;
  margin: 0;
  min-height: calc(
    100vh + 100px
  );
  width: 100vw; /* Ensure full viewport width */
}
</style>
