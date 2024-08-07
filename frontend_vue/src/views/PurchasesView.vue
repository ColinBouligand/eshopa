<template>
  <v-container>
    <h2>{{ $t('purchase.title') }}</h2>
    <v-row v-for="(purchase, index) in purchases" :key="index" class="ml-2 my-4 align-center ga-4">
      <v-chip variant="elevated" color="secondary">{{ formatDate(purchase?.purchaseDate) }}</v-chip>
      <h4>{{
        `${purchase?.purchaser?.firstName} ${purchase?.purchaser?.lastName} ${$t('purchase.canceled')} : `
      }}</h4>

      <v-expansion-panels v-if="purchase?.removedProducts?.length > 0" class="pa-4">
        <v-expansion-panel>
          <v-expansion-panel-title>
            {{ $t('basket.removed') }}
          </v-expansion-panel-title>
          <v-expansion-panel-text>
            <div
              v-for="(product, index) in purchase?.removedProducts"
              :key="index"
              class="product-item"
            >
              <span class="mx-4 my-2">{{ `${product.title} (${product.price}$)` }}</span>
              <v-divider v-if="index < purchase?.removedProducts.length - 1" />
            </div>
          </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { useBasketStore } from '@/stores/basket'
import { computed } from 'vue'

export default {
  setup() {
    const basketStore = useBasketStore()
    const purchases = computed(() => basketStore.purchases)

    const formatDate = (date: Date) => {
      const formattedDate = new Date(date)
      return formattedDate.toLocaleDateString()
    }
    return {
      purchases,
      formatDate
    }
  }
}
</script>
