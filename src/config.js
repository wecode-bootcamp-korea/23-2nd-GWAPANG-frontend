// const BASE_URL = 'http://10.58.2.254:8000';
const BASE_URL = 'http://localhost:3000/';
// const BASE_URL = 'http://localhost:3000/data/';
const BASE_URL2 = 'http://10.58.4.143:8000';

export const API = {
  SERVER: `${BASE_URL}`,

  PRODUCT: `${BASE_URL}/product.json`,
  SPRODUCT: `${BASE_URL}/SellerProduct.json`,
  SELLER: `${BASE_URL}/sellerList.json`,
  LOGIN: `${BASE_URL}/users/login/kakao`,
  SEARCH: `${BASE_URL}/searchResult.json`,

  SEARCHLST: `${BASE_URL2}/products/search`,
  SELLERLST: `${BASE_URL2}/products/seller`,
  REVIEWLST: `${BASE_URL2}/reviews/recent`,
  SELLERPRODUCT: `${BASE_URL2}/products/product`,
  SIGNIN: `${BASE_URL2}/users/signin`,
};
