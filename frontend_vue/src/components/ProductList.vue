<template>
  <v-container>
    <v-row>
      <v-col v-for="product in products" :key="product.id" cols="12" md="4">
        <v-card>
          <v-card-title>{{ product.title }}</v-card-title>
          <v-card-subtitle>${{ product.price }}</v-card-subtitle>
          <v-card-actions>
            <ActionButton @click="addProductToBasket(product)" :text="$t('card.add')"  block append-icon="mdi-cart"/>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { useBasketStore } from '@/stores/basket'
import { useProductStore } from '@/stores/products'
import ActionButton from './ActionButton.vue'
import { reactive } from 'vue';

export default {
  components: { ActionButton },
  setup() {
    // Access the product store within the setup function
    const productStore = useProductStore()
    const basketStore = useBasketStore()

    const products = reactive(productStore.getProducts)
    const addProductToBasket = basketStore.addProductToBasket
    // Fetch products when component is mounted
    //productStore.fetchProducts();

    return {
      products,
      addProductToBasket
    }
  }
}
</script>
