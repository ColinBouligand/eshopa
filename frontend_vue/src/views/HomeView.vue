<template>
  <v-container fluid>
    <div class="d-flex flex-column justify-center align-center ga-16">
      <h2>{{ $t('home.message') }}</h2>
      <v-btn color="primary" to="/products" :text="$t('home.button')" />
    </div>
  </v-container>
</template>

<script>
export default {}
</script>
