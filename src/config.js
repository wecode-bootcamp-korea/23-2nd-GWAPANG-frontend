// const BASE_URL = 'http://10.58.2.254:8000';
const BASE_URL = 'http://10.58.3.153:8000';
// const BASE_URL = 'http://localhost:3000/data/';

export const API = {
  SERVER: `${BASE_URL}`,

  PRODUCT: `${BASE_URL}/product.json`,
  SPRODUCT: `${BASE_URL}/SellerProduct.json`,
  SELLER: `${BASE_URL}/sellerList.json`,
  LOGIN: `${BASE_URL}/users/login/kakao`,
  SEARCH: `${BASE_URL}/searchResult.json`,

  SEARCHLST: `${BASE_URL}/products/search`,
  SELLERLST: `${BASE_URL}/products/seller`,
  REVIEWLST: `${BASE_URL}/reviews/recent`,
  SELLERPRODUCT: `${BASE_URL}/products/product`,
  SIGNIN: `${BASE_URL}/users/signin`,
};
