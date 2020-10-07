import { UNAUTHORIZED } from 'http-status';

import { CustomError } from './CustomError';

export class Unauthorized extends CustomError {
  constructor(code: string, message?: string) {
    super(UNAUTHORIZED, code, message);
  }
}
