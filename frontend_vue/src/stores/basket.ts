import { defineStore } from 'pinia'
import { Product } from './products'

export interface BasketState {
  products: Array<Product>
  addedProducts: Array<Product>
  removedProducts: Array<Product>
}

export const useBasketStore = defineStore('basket', {
  state: (): BasketState => {
    return { products: [], addedProducts: [], removedProducts: [] }
  },
  getters: {
    getProducts(state: BasketState): Array<Product> {
      return state.products
    },
    getAddedProducts(state: BasketState): Array<Product> {
      return state.addedProducts
    },
    getRemovedProducts(state: BasketState): Array<Product> {
      return state.removedProducts
    }
  },
  actions: {
    addProductToBasket(product: Product) {
      this.products.push(product)
      this.addedProducts.push(product)
    },
    removeProductFromBasket(productId: string) {
      const index = this.products.map((p) => p.id).indexOf(productId)

      // Check if the item is found in the array
      if (index !== -1) {
        // Remove the item at the found index
        const removedProduct = this.products.splice(index, 1)
        // Add the item to removed one
        this.removedProducts.push(removedProduct[0])
      }
    }
  }
})
