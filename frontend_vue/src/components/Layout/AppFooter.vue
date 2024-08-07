<template>
    <v-footer app
      height="50px"
      class="d-flex justify-center align-center pa-3"
    >
      <v-container>
        <v-row justify="center">
          <v-col class="text-center">
            <v-btn rounded variant="plain" to="/about" class="mx-2">{{  $t('footer.about') }}</v-btn>
            <v-btn rounded variant="plain" to="/contact" class="mx-2">{{  $t('footer.contact') }}</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </template>
  
  <script>
  export default{

  }
  </script>
  
  <style lang="scss" scoped>
  .v-footer {
    background-color: #f5f5f5;
    border-top: 1px solid #e0e0e0;
    font-size: 0.9rem;
    .v-btn {
      text-transform: capitalize!important;
    }
  }
  </style>
  