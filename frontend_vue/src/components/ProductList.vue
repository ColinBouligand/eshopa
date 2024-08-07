<template>
  <v-container>
    <v-row>
      <v-col v-for="product in products" :key="product.id" cols="12" md="4">
        <v-card>
          <v-img :src="product.thumb" class="product-image" height="200px" />

          <v-card-title>{{ product.title }}</v-card-title>
          <v-card-subtitle>${{ product.price }}</v-card-subtitle>
          <v-card-actions class="d-flex justify-end">
            <ActionButton
              @click="addProductToBasket(product)"
              :text="$t('card.add')"
              variant="flat"
              color="primary"
              class="px-4"
              prepend-icon="mdi-cart"
            />
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
import { reactive } from 'vue'

export default {
  components: { ActionButton },
  setup() {
    // Access the product store within the setup function
    const productStore = useProductStore()
    const basketStore = useBasketStore()

    const products = reactive(productStore.getProducts)

    const addProductToBasket = basketStore.addProductToBasket

    return {
      products,
      addProductToBasket
    }
  }
}
</script>
<style scoped>
.product-image {
  object-fit: cover; /* Ensures the image covers the specified area */
  width: 100%; /* Ensures the image takes up the full width of the card */
  transition: transform 0.3s ease-in-out; /* Smooth transition for the hover effect */
}

.product-image:hover {
  transform: scale(1.1, 1.2); /* Enlarges the image slightly to the bottom on hover */
}
</style>
