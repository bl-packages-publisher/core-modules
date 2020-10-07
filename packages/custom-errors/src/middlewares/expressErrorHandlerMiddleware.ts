import { NextFunction, Request, Response } from 'express';
import { INTERNAL_SERVER_ERROR } from 'http-status';

import { CustomError } from '../errors';

export const expressErrorHandlerMiddleware = (
  error: CustomError,
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  if (error instanceof CustomError) {
    const { httpCode, code, message, name } = error;

    res.status(httpCode || INTERNAL_SERVER_ERROR);
    res.json({
      code,
      message,
      name,
    });
  } else {
    const { message, response, status, statusCode }: any = error;

    res.status(statusCode || status || INTERNAL_SERVER_ERROR);
    res.write(message);

    if (response) {
      const { data, status: responseStatus } = response;

      res.status(responseStatus || INTERNAL_SERVER_ERROR);

      if (data) {
        res.write(` ${JSON.stringify(data)}`);
      }
    }
  }

  return res.end();
};
