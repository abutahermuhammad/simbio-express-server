export class ExtendedError extends Error {
    statusCode: number;

    constructor(statusCode: number, public readonly message: string, stack = '') {
        super(message);
        this.name = this.constructor.name;
        this.statusCode = statusCode;

        if (stack) {
            this.stack = stack;
        } else {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}
