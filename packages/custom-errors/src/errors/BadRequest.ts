import { BAD_REQUEST } from 'http-status';

import { CustomError } from './CustomError';

export class BadRequest extends CustomError {
  constructor(code: string, message?: string) {
    super(BAD_REQUEST, code, message);
  }
}
