<template>
  <v-row>
    <v-col cols="12" lg="8">
      <v-card class="pa-4">
        <v-text-field v-model="firstName" :label="$t('payment.firstName')"> </v-text-field>
        <v-text-field v-model="lastName" :label="$t('payment.lastName')"> </v-text-field>
        <v-text-field
          v-model="zipCode"
          :rules="[(v) => v.length == 5 && v >= 1 && v <= 99999]"
          :label="$t('payment.zipCode')"
          :maxlength="5"
        >
        </v-text-field>
        <v-text-field v-model="city" :label="$t('payment.city')" />

        <v-card-actions>
          <action-button :text="$t('payment.previous')" to="/basket" class="px-4" />
          <action-button
            v-if="basketLength > 0"
            color="secondary"
            variant="flat"
            class="px-4"
            append-icon="mdi-credit-card-outline"
            :text="$t('payment.pay')"
            :disabled="!canBuy"
            @click="purchaseBasket()"
          />
        </v-card-actions>
      </v-card>
    </v-col>
    <v-col cols="12" lg="3">
      <v-card class="pa-4 justify-space-between d-flex">
        <span>{{ basketLength }} {{ $t('basket.articles') }}</span>
        <strong>Total : {{ parseFloat(totalPrice).toFixed(2) }} $</strong>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import ActionButton from '../components/ActionButton.vue'
import { useBasketStore } from '@/stores/basket'
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
export default {
  components: { ActionButton },
  setup() {
    const basketStore = useBasketStore()
    const router = useRouter()

    const selectedProducts = computed(() => basketStore.products)
    const basketLength = computed(() => basketStore.getBasketLength)

    const totalPrice = computed(() =>
      selectedProducts.value
        .reduce((total, product) => total + product.price * product.productCount, 0)
        .toString()
    )
    const firstName = ref('')
    const lastName = ref('')
    const zipCode = ref('00000')
    const city = ref('')

    // validation rules
    const canBuy = computed(
      () =>
        firstName.value !== '' &&
        firstName.value !== '' &&
        zipCode.value !== '' &&
        typeof parseInt(zipCode.value) === 'number' &&
        zipCode.value > 0 &&
        zipCode.value.length === 5 &&
        city.value !== ''
    )

    const purchaseBasket = () => {
      basketStore.purchaseBasket({
        firstName: firstName.value,
        lastName: lastName.value,
        zipCode: zipCode.value,
        city: city.value
      })
      setTimeout(() => {
        router.push('/purchases')
      }, 1000)
    }

    return {
      basketLength,
      totalPrice,
      firstName,
      lastName,
      zipCode,
      city,
      canBuy,
      purchaseBasket
    }
  }
}
</script>
