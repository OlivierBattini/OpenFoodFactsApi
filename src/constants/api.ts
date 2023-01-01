export enum ApiPrefix {
  PRODUCTS = '/products',
  PRODUCTS_BY_CODE = '/code/:code',
  PRODUCTS_BY_NAME = '/name/:name/:page',
}

export const API_PAGINATION = 10;

export enum ApiInfo {
  TITLE = 'OpenFoodFacts test API',
  DESCRIPTION = 'This API allows querying OpenFoodFacts database products by code or product_name',
  VERSION = '0.1',
}
