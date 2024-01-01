import { ErrorRequestHandler } from 'express';
import { TErrorSources } from '../types/error';
import { AppError } from '../utils/appError';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const globalErrorHandler: ErrorRequestHandler = (error: AppError, req, res, next) => {
  // let responseObj = {};
  let statusCode = error.statusCode || 500;
  let message = error.message || 'Something went wrong!';
  let errorSources: TErrorSources = [
    {
      path: '',
      message: error.message || 'Something went wrong',
    },
  ];

  /**
   * Error logger.
   * Add your own logger here.
   * If the error severity is high, it will rise an notification.
   */

  // Check if the error is a known HTTP error (e.g., 404, 400, 500)
  // if (res.headersSent) {
  //     // If headers have already been sent, delegate to the default Express error handler
  //     return next(error);
  // }

  // Backup
  // if (error instanceof ZodError) {
  // const simplifiedError = handleZodError(error);
  // statusCode = simplifiedError?.statusCode;
  // message = simplifiedError?.message;
  // errorSources = simplifiedError?.errorSources;

  // } else if (err?.name === 'ValidationError') {
  //     const simplifiedError = handleValidationError(err);
  //     statusCode = simplifiedError?.statusCode;
  //     message = simplifiedError?.message;
  //     errorSources = simplifiedError?.errorSources;

  // } else if (err?.name === 'CastError') {
  //     const simplifiedError = handleCastError(err);
  //     statusCode = simplifiedError?.statusCode;
  //     message = simplifiedError?.message;
  //     errorSources = simplifiedError?.errorSources;

  // } else if (err?.code === 11000) {
  //     const simplifiedError = handleDuplicateError(err);
  //     statusCode = simplifiedError?.statusCode;
  //     message = simplifiedError?.message;
  //     errorSources = simplifiedError?.errorSources;

  // } else if (err instanceof AppError) {
  if (error instanceof AppError) {
    statusCode = error?.statusCode;
    message = error.message;
    errorSources = [
      {
        path: '',
        message: error?.message,
      },
    ];

  }

  res.status(statusCode).json({
    success: false,
    ...error,
    message: message,
    errorSources,
    // stack: config.get<string>('server.env') === 'development' ? error?.stack : null,
    // stack: error?.stack,
  });
};

export default globalErrorHandler;

//pattern
/*
success
message
data
error:[
  path:'',
  message:''
]
stack
*/
