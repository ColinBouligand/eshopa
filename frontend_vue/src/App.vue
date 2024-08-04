<template>
  <v-app>
    <v-main>
      <ProductList />
      <ProductCard />
    </v-main>
  </v-app>
</template>

<script>
import ProductList from './components/ProductList.vue';
import ProductCard from './components/ProductCard.vue';

export default {
  components: {
    ProductList,
    ProductCard
  }
};
</script>
