import mongoose from 'mongoose';

import { Env } from '../../config/env';
import { DatabaseService } from '../data/database.service';
import { ProductService } from './product.service';

describe('ProductService', () => {
  beforeAll(async () => {
    await mongoose.connect(Env.DB_URL);
  });

  let databaseService: DatabaseService;
  let productService: ProductService;

  beforeEach(async () => {
    databaseService = new DatabaseService(mongoose.connection);
    productService = new ProductService(databaseService);
  });

  describe('getProductByCode', () => {
    const productCode = '777';
    const expectedProductName = 'Waldpilzsuppe Maggi';

    it(`returns product with name "${expectedProductName}" when querying product code "${productCode}"`, async () => {
      const product = await productService.getProductByCode(productCode);
      //console.log(product);

      expect(product.product_name).toBe(expectedProductName);
    });
  });

  describe('getProductsByName', () => {
    const productNameSearch = 'thai';
    const page = 0;
    const pagination = 10;
    const expectedResultLength = 10;

    it(`returns ${pagination} products when querying name "${productNameSearch}" and page ${page}`, async () => {
      const products = await productService.getProductsByName(
        productNameSearch,
        page,
      );

      expect(products).toHaveLength(expectedResultLength);
    });
  });
});
