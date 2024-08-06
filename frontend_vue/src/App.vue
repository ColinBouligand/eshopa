<template>
  <v-app>
    <AppHeader />
    <v-main>
        <router-view />
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
