import { INTERNAL_SERVER_ERROR } from 'http-status';

export class CustomError extends Error {
  public code: string;

  public httpCode: number;

  constructor(
    httpCode: number = INTERNAL_SERVER_ERROR,
    code: string,
    message?: string,
  ) {
    super();

    Object.setPrototypeOf(this, CustomError.prototype);

    if (httpCode) {
      this.httpCode = httpCode;
    }

    if (code) {
      this.code = code;
    }

    if (message) {
      this.message = message;
    }

    this.stack = new Error().stack;
  }
}
