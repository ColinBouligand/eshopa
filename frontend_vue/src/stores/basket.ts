import { defineStore } from 'pinia'
import { Product } from './products'

export interface BasketLine extends Product {
  productCount: number
}

interface BasketState {
  products: Array<BasketLine>
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
    },
    getBasketLength(state: BasketState): number {
      return state.products.reduce((total, product) => total + product.productCount, 0)
    }
  },
  actions: {
    addProductToBasket(product: Product) {
      const index = this.products.map((p) => p.id).indexOf(product.id)
      // Check if the item is found in the array
      if (index !== -1) {
        // Add a count for the product line
        this.products[index].productCount++
      } else {
        // Else just add the line to basket
        this.products.push({ ...product, productCount: 1 })
      }
      // Add the item to removed one
      this.addedProducts.push(product)
    },
    removeProductFromBasket(productId: string) {
      const index = this.products.map((p) => p.id).indexOf(productId)

      // Check if the item is found in the array
      if (index !== -1) {
        const productToRemove = this.products[index]

        if (this.products[index].productCount == 1) {
          // Remove the item at the found index
          this.products.splice(index, 1)
        } else {
          console.log( this.products[index].productCount)
          this.products[index].productCount--
          console.log( this.products[index].productCount)

        }

        // Add the item to removed one
        this.removedProducts.push(productToRemove)
      }
    }
  }
})
