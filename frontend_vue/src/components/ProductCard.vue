<template>
  <v-container>
    <h2>Card</h2>
    <v-list>
      <v-list-item v-for="item in cartItems" :key="item" :title="item">
        <v-list-item-action>
          <v-btn @click="removeFromCart(item)">Remove</v-btn>
        </v-list-item-action>
      </v-list-item>
    </v-list>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      cartItems: []
    };
  },
  created() {
    this.fetchCartItems();
  },
  methods: {
    fetchCartItems() {
      fetch('http://localhost:3000/api/cart')
        .then(response => response.json())
        .then(data => {
          this.cartItems = data;
        });
    },
    removeFromCart(productId) {
      fetch(`http://localhost:3000/api/cart/${productId}`, {
        method: 'DELETE'
      }).then(() => {
        this.fetchCartItems();
      });
    }
  }
};
</script>
