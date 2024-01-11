import { PrismaClient } from '@prisma/client';

class PrismaSingleton {
    private static instance: PrismaClient;

    private constructor() {
        // Initialize the PrismaClient instance
        // this.instance = new PrismaClient()
        PrismaSingleton.instance = new PrismaClient()
    }

    public static getInstance(): PrismaClient {
        if (!PrismaSingleton.instance) {
            PrismaSingleton.instance = new PrismaClient();
            // PrismaSingleton.instance = new PrismaSingleton()
        }

        return PrismaSingleton.instance;
    }
}

export default PrismaSingleton.getInstance()