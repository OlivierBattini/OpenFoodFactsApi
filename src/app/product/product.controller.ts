import { Controller, Get, Param } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';

import { ApiPrefix } from '../../constants/api';
import { HttpError } from '../errors/http.error';
import {
  GetProductByCodeRequest,
  GetProductByCodeResponse,
  GetProductsByNameRequest,
  GetProductsByNameResponse,
} from './product.dto';
import { ProductService } from './product.service';

@Controller(ApiPrefix.PRODUCTS)
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get(ApiPrefix.PRODUCTS_BY_CODE)
  @ApiResponse({
    status: 200,
    description: 'Product found',
    type: GetProductByCodeResponse,
  })
  async getProductByCode(
    @Param() request: GetProductByCodeRequest,
  ): Promise<GetProductByCodeResponse> {
    let product;
    try {
      product = await this.productService.getProductByCode(request.code);
    } catch (error: any) {
      console.error(error);
      HttpError.internalServerError('Unexpected error while getting product');
    }

    if (!product) {
      HttpError.badRequest('No product found');
    }

    const response: GetProductByCodeResponse = {
      product,
    };
    return response;
  }

  @Get(ApiPrefix.PRODUCTS_BY_NAME)
  @ApiResponse({
    status: 200,
    description: 'Products found',
    type: GetProductsByNameResponse,
  })
  async getProductByName(
    @Param() request: GetProductsByNameRequest,
  ): Promise<GetProductsByNameResponse> {
    let products;
    try {
      products = await this.productService.getProductsByName(
        request.name,
        request.page,
      );
    } catch (error: any) {
      console.error(error);
      HttpError.internalServerError('Unexpected error while getting products');
    }

    if (products.length === 0) {
      HttpError.badRequest('No product found');
    }

    const response: GetProductsByNameResponse = {
      products,
    };
    return response;
  }
}
