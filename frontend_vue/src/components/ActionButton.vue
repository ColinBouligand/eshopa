<template>
  <v-btn rounded :loading="isLoading" @click="handleClick()" />
</template>

<script>
import { ref } from 'vue'
export default {
  setup() {
    const isLoading = ref(false)

    const handleClick = () => {
      isLoading.value = true
      setTimeout(() => {
        isLoading.value = false
      }, 500)
    }

    return { isLoading, handleClick }
  }
}
</script>
