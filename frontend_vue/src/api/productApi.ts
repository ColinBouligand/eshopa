import axios from '../plugins/axios'

const PRODUCT_URL = '/product'

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
  const response = await axios.get(PRODUCT_URL)
  return response.data
}