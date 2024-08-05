<template>
  <ProductList />
  <ProductCard />
</template>

<script>
import ProductList from '@/components/ProductList.vue'
import ProductCard from '@/components/ProductCard.vue'

export default {
  components: {
    ProductList,
    ProductCard
  }
}
</script>