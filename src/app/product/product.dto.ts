import { Transform } from 'class-transformer';
import { IsDefined, IsInt, Min, MinLength } from 'class-validator';

export class GetProductByCodeRequest {
  @IsDefined()
  @MinLength(1)
  readonly code: string;
}

export class GetProductByCodeResponse {
  constructor(product: any) {
    this.product = product;
  }

  readonly product: any;
}

export class GetProductsByNameRequest {
  @IsDefined()
  @MinLength(1)
  readonly name: string;

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

  readonly products: any[];
}
