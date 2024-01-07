interface AppErrorOptions {
    code?: string;
    metadata?: Record<string, unknown>;
}

export class AppError extends Error {
    statusCode: number;
    code?: string;
    metadata?: Record<string, unknown>;

    /**
     * Constructs a new instance of the class.
     *
     * @param {number} statusCode - The status code.
     * @param {string} message - The error message.
     * @param {string} stack - The stack trace.
     * @param {AppErrorOptions} options - Additional options.
     */
    constructor(
        statusCode: number = 500,
        message: string = "Internal Server Error",
        stack: string = '',
        options: AppErrorOptions = {}
    ) {
        super(message);
        this.statusCode = statusCode;
        this.code = options.code;
        this.metadata = options.metadata;

        if (stack) {
            this.stack = stack;
        } else {
            Error.captureStackTrace(this, this.constructor);
        }
    }

    /**
     * Serialize the error to JSON.
     *
     * @returns {Record<string, any>} - Serialized error.
     */
    toJSON(): Record<string, unknown> {
        return {
            statusCode: this.statusCode,
            message: this.message,
            code: this.code,
            metadata: this.metadata,
            stack: this.stack,
        };
    }
}



// class ErrorHandler {
//     public async handleError(error: Error, responseStream: Response): Promise<void> {
//         await logger.logError(error);
//         await fireMonitorinMatric(error);
//         await crashIfUntrustedErrorOrSendResponse(error, responseStream);
//     }

//     public isTrustedError(error: Error): boolean {
//         if (error instanceof ExtendedError) {
//             return true;
//         }
//         return false;
//     }

// }
// export const handler = new ErrorHandler();