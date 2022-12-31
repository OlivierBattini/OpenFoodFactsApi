import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsDefined, IsInt, Min, MinLength } from 'class-validator';
import { API_PAGINATION } from 'src/constants/api';

export class GetProductByCodeRequest {
  @ApiProperty({ description: 'Product code' })
  @IsDefined()
  @MinLength(1)
  readonly code: string;
}

export class GetProductByCodeResponse {
  constructor(product: any) {
    this.product = product;
  }

  @ApiProperty({ description: 'Product found', type: Object })
  readonly product: any;
}

export class GetProductsByNameRequest {
  @ApiProperty({
    description: 'Product name (complete or partial, case-insensitive)',
  })
  @IsDefined()
  @MinLength(1)
  readonly name: string;

  @ApiProperty({
    description: `Pagination (${API_PAGINATION} products per page, zero-based)`,
  })
  @IsDefined()
  @Transform((param): number => parseInt(param.value)) // We must parse to int first for validation or NestJS will complain. See: https://stackoverflow.com/questions/48978370/pass-isint-validation-for-application-x-www-form-urlencoded-request-type
  @IsInt()
  @Min(0)
  readonly page: number;
}

export class GetProductsByNameResponse {
  constructor(products: any[]) {
    this.products = products;
  }
  @ApiProperty({ description: 'Array of found products', type: [Object] })
  readonly products: any[];
}
