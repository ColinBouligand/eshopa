import { addProduct, deleteProduct, fetchProducts } from '@/api/productApi'
import { defineStore } from 'pinia'

export interface Product {
  id: string
  title: string
  price: number
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
    addProduct(product: Product) {
      addProduct(product)
    },
    deleteProduct(productId: string) {
      deleteProduct(productId)
    },
    async fetchProducts() {
      if (this.loading) return
      try {
        this.loading = true
        const res = await fetchProducts()
        this.products = res.map((product) => ({
          id: product.storeID,
          title: product.title,
          price: product.normalPrice
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
