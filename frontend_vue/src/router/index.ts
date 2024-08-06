import { createRouter, createWebHistory, NavigationGuard, RouteLocation } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { useProductStore } from '@/stores/products'

// Guards

const fetchProductsGuard: NavigationGuard = async (
  _to: RouteLocation,
  _from: RouteLocation,
  next: any
) => {
  const productStore = useProductStore()

  try {
    await productStore.fetchProducts()
    next()
  } catch (error) {
    console.error('[Guard] Failed to fetch products:', error)
    next() // Still go to the products page
  }
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/products',
      name: 'products',
      component: () => import('../views/ProductsView.vue'), // Lazy loading
      beforeEnter: [fetchProductsGuard] // Guard to load data before entering view
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue')
    }
  ]
})

export default router
