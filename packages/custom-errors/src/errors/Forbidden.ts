import { FORBIDDEN } from 'http-status';

import { CustomError } from './CustomError';

export class Forbidden extends CustomError {
  constructor(code: string, message?: string) {
    super(FORBIDDEN, code, message);
  }
}
