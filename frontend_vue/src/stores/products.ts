import { fetchProducts } from '@/api/productApi'
import { defineStore } from 'pinia'

export interface Product {
  id: string
  title: string
  price: number
  thumb: string
}

interface ProductState {
  products: Array<Product>
  loading: boolean
}

export const useProductStore = defineStore('product', {
  state: (): ProductState => {
    return { products: [], loading: false }
  },
  getters: {
    getProducts(state: ProductState): Array<Product> {
      return state.products
    },
    getLoading(state: ProductState): boolean {
      return state.loading
    }
  },
  actions: {
    async fetchProducts() {
      if (this.loading || this.products.length > 0) return
      try {
        this.loading = true
        const res = await fetchProducts()
        this.products = res.map((product) => ({
          id: product.dealID,
          title: product.title,
          price: product.normalPrice,
          thumb: product.thumb
        }))
      } catch (error) {
        console.error('Failed to fetch products:', error)
      } finally {
        this.loading = false
      }
    },
    setLoading(loading: boolean) {
      this.loading = loading
    }
  }
})
