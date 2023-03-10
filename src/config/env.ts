import * as dotenv from 'dotenv';
dotenv.config();

/** Provides simple access to environment variables using TypeScript */
export class Env {
  /** HTTP server entry point */
  public static get HTTP_PORT(): number {
    return parseInt(process.env.HTTP_PORT) || 3000;
  }

  /** Caching system TTL in milliseconds */
  public static get HTTP_CACHE_TTL_MS(): number {
    return parseInt(process.env.HTTP_CACHE_TTL_MS) || 3600000; // 1 h in ms
  }

  /** Database connection URL */
  public static get DB_URL(): string {
    return process.env.DB_URL || 'mongodb://localhost:27017';
  }

  /** Database name */
  public static get DB_NAME(): string {
    return process.env.DB_NAME || 'off';
  }

  /** Database products collection name */
  public static get DB_PRODUCT_COLLECTION(): string {
    return process.env.DB_PRODUCT_COLLECTION || 'products';
  }
}
