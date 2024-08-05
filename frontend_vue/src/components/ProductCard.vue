<template>
  <v-container>
    <v-list>
      <v-list-item v-for="item in products" :key="item" :title="item">
        <v-list-item-action>
          <v-btn @click="removeFromCart(item)">Remove</v-btn>
        </v-list-item-action>
      </v-list-item>
    </v-list>
  </v-container>
</template>

<script>

import { useProductStore } from '@/stores/products';
export default {
  data() {
    return {
      products: []
    };
  },
  computed: {
    productStore: () => useProductStore()
  }, 
  methods: {
    deleteProduct(productId) {
      productStore.deleteProduct(productId)
    }
  }
};
</script>
