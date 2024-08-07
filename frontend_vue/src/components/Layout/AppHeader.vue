<template>
  <v-app-bar app color="primary" dark>
    <v-container fluid class="mx-4">
      <v-row class="align-center" justify="space-between">
        <!-- Logo -->
        <v-col  md="2">
          <v-toolbar-title>
            <router-link to="/" class="white--text text-decoration-none">
              <img src="@/assets/eshopa.png" height="30" />
              <span class="font-weight-bold ml-1">{{ $t('header.name') }}</span>
            </router-link>
          </v-toolbar-title>
        </v-col>

        <!-- Navigation Links -->
        <v-col  md="6">
          <v-row justify="center">
            <v-btn rounded text class="mx-2" to="/">{{ $t('header.home') }}</v-btn>
            <v-btn rounded text class="mx-2" to="/products">{{ $t('header.products') }}</v-btn>
          </v-row>
        </v-col>

        <!-- Search and Cart -->
        <v-col  md="4">
          <v-row justify="end" class="align-center">
            <!-- display only if on products page -->
            <v-tooltip :text="$t('header.searchBarTooltip')">
              <template v-slot:activator="{ props }">
                <v-text-field
                  v-bind="props"
                  v-if="isProductsPage"
                  dense
                  hide-details
                  prepend-inner-icon="mdi-magnify"
                  :placeholder="$t('header.search')"
                  class="mr-4"
                  disabled
                />
              </template>
            </v-tooltip>

            <locale-select class="mx-2" />
            <v-btn icon to="/basket">
              <v-badge :content="basketLength" color="secondary" overlap>
                <v-icon icon="mdi-cart" color="white"></v-icon>
              </v-badge>
            </v-btn>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import LocaleSelect from '../LocaleSelect.vue'
import { useBasketStore } from '@/stores/basket'

export default {
  components: { LocaleSelect },
  setup() {
    // Access the current route
    const route = useRoute()

    const basketStore = useBasketStore()

    // Computed property to check if the current route is /products
    const isProductsPage = computed(() => route.path === '/products')

    const basketLength = computed(() => basketStore.getBasketLength)

    return { isProductsPage, basketLength }
  }
}
</script>
