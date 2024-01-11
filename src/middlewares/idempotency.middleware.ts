import { NextFunction, Request, Response } from "express";
import { Redis } from "ioredis";

const redisClient = new Redis();

const idempotencyMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const idempotencyKey = req.headers['X-Request-Key'];

    if (!idempotencyKey) {
        return next(); // No idempotency key, proceed with the request.
    }

    try {
        // Check if the operation associated with the key has been processed before using Redis.
        const previousResult = await redisClient.get(idempotencyKey);

        if (previousResult) {
            // Operation already processed, return the previous result.
            const parsedResult = JSON.parse(previousResult);
            return res.status(parsedResult.statusCode).json(parsedResult.data);
        }

        // Execute the operation.
        await next();

        // Store the results of the operation in Redis.
        // You might want to store the response data, status code, etc.
        const resultToStore = {
            statusCode: res.statusCode,
            data: res.locals.data, // Assuming you have stored the result in res.locals.data
        };

        await redisClient.set(idempotencyKey, JSON.stringify(resultToStore), 'EX', 86400); // Expiry time in seconds (adjust as needed).
    } catch (error) {
        // Handle errors appropriately (e.g., log them).
        console.error('Error in idempotency middleware:', error);
        return next(error);
    }
};

app.use(idempotencyMiddleware);

// Your routes and other middleware go here
