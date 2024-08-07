<template>
  <v-container>
    <v-card class="pa-4">
      <v-text-field label="prenom"> </v-text-field>
      <v-text-field label="nom"> </v-text-field>
      <v-text-field label="adresse"> </v-text-field>
      <v-text-field label="code postal"> </v-text-field>

      <v-card-actions>
        <action-button block text="payer"></action-button>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
import ActionButton from '../components/ActionButton.vue'
export default {
  components: { ActionButton },
  setup() {}
}
</script>
