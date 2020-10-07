import { NOT_FOUND } from 'http-status';

import { CustomError } from './CustomError';

export class NotFound extends CustomError {
  constructor(code: string, message?: string) {
    super(NOT_FOUND, code, message);
  }
}
