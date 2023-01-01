import { Injectable } from '@nestjs/common';
import { FindCursor } from 'mongodb';

import { Env } from '../../config/env';
import { API_PAGINATION } from '../../constants/api';
import { DatabaseService } from '../data/database.service';

@Injectable()
export class ProductService {
  constructor(private databaseService: DatabaseService) {}

  /**
   * @param {string} productCode - Product code
   * @returns Product document by code from Mongo database
   */
  async getProductByCode(productCode: string): Promise<any> {
    const findQuery = {
      _id: productCode,
    };
    console.log('getProductByCode', findQuery);

    const result: any = await this.databaseService
      .getConnection()
      .useDb(Env.DB_NAME)
      .collection(Env.DB_PRODUCT_COLLECTION)
      .findOne(findQuery);
    return result;
  }

  /**
   * @param {string} productName - Product name to search (partial or complete, case-insensitive)
   * @param {string} page - Zero-based page number
   * @returns Array of product documents by name from Mongo database
   */
  async getProductsByName(productName: string, page: number): Promise<any[]> {
    const findQuery = {
      product_name: new RegExp(productName, 'i'),
    };
    console.log('getProductsByName', findQuery);

    const cursor: FindCursor = this.databaseService
      .getConnection()
      .useDb(Env.DB_NAME)
      .collection(Env.DB_PRODUCT_COLLECTION)
      .find(findQuery)
      .skip(page * API_PAGINATION)
      .limit(API_PAGINATION);

    const result = [];
    for await (const doc of cursor) {
      result.push(doc);
    }

    return result;
  }
}
