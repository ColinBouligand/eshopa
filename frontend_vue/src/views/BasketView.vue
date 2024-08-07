<template>
  <v-container>
    <h2>{{ $t('basket.title') }}</h2>
    <!-- FILLED BASKET -->
    <v-row>
      <v-col cols="12" lg="8" class="ma-4" v-if="basketLength > 0">
        <template v-for="(product, index) in selectedProducts" :key="index">
          <div class="my-2 d-flex justify-space-between">
            <div>
              {{ product.title }}
              <v-chip v-if="product.productCount > 1" size="x-small" color="secondary">
                x{{ product.productCount }}</v-chip
              >
            </div>
            <div class="d-flex justify-end align-center">{{ product.price }} $</div>
          </div>
          <div>
            <v-btn
              size="x-small"
              variant="text"
              rounded
              text="supprimer"
              @click="removeProductFromBasket(product.id)"
            />
          </div>
          <v-divider />
        </template>
        <div class="my-2 d-flex justify-end ga-2">
          <em>{{ basketLength }} {{ $t('basket.articles') }}</em>
          -
          <strong>Total : {{ parseFloat(totalPrice).toFixed(2) }} $</strong>
        </div>
      </v-col>
      <v-col cols="12" lg="3">
        <!-- OPTIONNAL : REMOVED PRODUCTS FROM BASKET-->
        <v-expansion-panels
          v-if="removedProducts.length > 0"
          class="pa-4"
          v-model="openRemovedProducts"
          multiple
        >
          <v-expansion-panel>
            <v-expansion-panel-title>
              {{ $t('basket.removed') }}
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <div v-for="(product, index) in removedProducts" :key="index" class="product-item">
                <span class="mx-4 my-2">{{ `${product.title} (${product.price}$)` }}</span>
                <v-divider v-if="index < removedProducts.length - 1" />
              </div>
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
    </v-row>
  </v-container>

  <!-- EMPTY BASKET -->
  <div class="d-flex justify-center mb-6 ga-2" v-if="basketLength == 0">
    <v-icon large icon="mdi-cart-off" />
    <h4>{{ $t('basket.empty') }}</h4>
  </div>

  <div class="d-flex flex-column align-center">
    <v-checkbox :label="$t('basket.cguv')" v-model="isCGUV" :disabled="basketLength == 0" />
    <action-button
      :text="$t('basket.buy')"
      to="/payment"
      rounded="false"
      color="secondary"
      :disabled="!isCGUV || basketLength == 0"
      append-icon="mdi-credit-card-outline"
    />
  </div>
</template>

<script lang="ts">
import ActionButton from '@/components/ActionButton.vue'
import { useBasketStore } from '@/stores/basket'
import { computed, defineComponent, ref } from 'vue'

export default defineComponent({
  components: { ActionButton },
  setup() {
    const basketStore = useBasketStore()

    const openRemovedProducts = ref([0])
    const isCGUV = ref(false)

    const selectedProducts = computed(() => basketStore.products)
    const basketLength = computed(() => basketStore.getBasketLength)
    const totalPrice = computed(() =>
      selectedProducts.value
        .reduce((total, product) => total + product.price * product.productCount, 0)
        .toString()
    )

    const removedProducts = basketStore.removedProducts
    const removeProductFromBasket = basketStore.removeProductFromBasket

    return {
      selectedProducts,
      removedProducts,
      totalPrice,
      basketLength,
      removeProductFromBasket,
      openRemovedProducts,
      isCGUV
    }
  }
})
</script>
