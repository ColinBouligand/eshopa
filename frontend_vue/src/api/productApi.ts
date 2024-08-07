import { Product } from '@/stores/products'
import axios from '../plugins/axios'

const URL = '/products'

export interface ProductAPI {
  title: any;
  metacriticLink: any;
  dealID: any;
  storeID: any;
  gameID: any;
  salePrice: any;
  normalPrice: any;
  isOnSale: any;
  savings: any;
  metacriticScore: any;
  steamRatingText: any;
  steamRatingPercent: any;
  steamRatingCount: any;
  steamAppID: any;
  releaseDate: any;
  lastChange: any;
  dealRating: any;
  thumb: any;
}

export const fetchProducts = async (): Promise<ProductAPI[]> => {
  const response = await axios.get(URL)
  return response.data
}

// Fetch a single product by ID
export const fetchProductById = async (id: string) => {
  const response = await axios.get(`${URL}/${id}`)
  return response.data
}

// Add a new product
export const addProduct = async (product: Product) => {
  const response = await axios.post(URL, product)
  return response.data
}

// Update an existing product
export const updateProduct = async (id: string, product: any) => {
  const response = await axios.put(`${URL}/${id}`, product)
  return response.data
}

// Delete a product
export const deleteProduct = async (id: string) => {
  const response = await axios.delete(`${URL}/${id}`)
  return response.data
}
