<template>
  <v-container>
    <v-row>
      <v-col v-for="product in products" :key="product.id" cols="12" md="4">
        <v-card>
          <v-card-title>{{ product.title }}</v-card-title>
          <v-card-subtitle>${{ product.price }}</v-card-subtitle>
          <v-card-actions>
            <v-btn @click="addToCart(product.id)">Add to Cart</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { useProductStore } from '@/stores/products';

export default {
  setup() {
    // Access the product store within the setup function
    const productStore = useProductStore();

    // Fetch products when component is mounted
    //productStore.fetchProducts();

    return {
      // Expose the products state from the store
      products: productStore.getProducts,

      // Expose actions from the store
      addToCart: productStore.addProduct,
    };
  },
};
</script>

