<template>
  <select v-model="$i18n.locale">
    <option v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale">
      {{ locale }}
    </option>
  </select>
</template>

<script>
export default {
  setup() {}
}
</script>

<style lang="scss" scoped>
select {
  color: white;
  cursor: pointer;
  option {
    color: black;
  }
}
</style>
