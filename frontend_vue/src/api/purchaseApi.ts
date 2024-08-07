import { BasketLine, Purchaser } from '@/stores/basket'
import axios from '../plugins/axios'
import { Product } from '@/stores/products'

const PURCHASE_URL = '/purchase'

export interface PurchaseAPI {
  purchaser: Purchaser
  basket: Array<BasketLine>
  removedProducts: Array<Product>
  purchaseId: string
  purchaseDate: Date
}

// Purchase a buy given a purchaser & a basket
export const purchaseBasket = async (
  purchaser: Purchaser,
  basket: Array<BasketLine>,
  removedProducts: Array<Product>
) => {
  const response = await axios.post(`${PURCHASE_URL}`, {
    purchaser,
    basket,
    removedProducts
  })
  return response.data
}

export const fetchPurchases = async (): Promise<PurchaseAPI[]> => {
  const response = await axios.get(PURCHASE_URL)
  return response.data
}
