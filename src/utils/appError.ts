export class AppError extends Error {
    statusCode: number;
    // description: string;

    /**
     * Constructs a new instance of the class.
     *
     * @param {number} statusCode - The status code.
     * @param {string} message - The error message.
     * @param {string} description - A description of the error.
     * @param {string} [stack=''] - The stack trace.
     */
    // constructor(statusCode: number, message: string, description: string, stack = '') {
    constructor(statusCode: number = 500, message: string = "Internal Server Error", stack: string = '') {
        super(message);
        // Object.setPrototypeOf(this, new.target.prototype);  // Restore prototype chain.
        // this.name = this.constructor.name;
        this.statusCode = statusCode;
        // this.description = description;

        if (stack) {
            this.stack = stack;
        } else {
            Error.captureStackTrace(this, this.constructor);
        }
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