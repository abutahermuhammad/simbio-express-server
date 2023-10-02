-- CreateEnum
CREATE TYPE "AuthenticationMethod" AS ENUM ('PASSWORD', 'TWO_FACTOR_AUTH', 'SOCIAL_LOGIN');

-- CreateTable
CREATE TABLE "LoginRecord" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL,
    "ipAddress" TEXT NOT NULL,
    "userAgent" TEXT NOT NULL,
    "loginStatus" TEXT NOT NULL,
    "sessionId" TEXT,
    "location" TEXT,
    "authentication" "AuthenticationMethod",
    "deviceInfo" TEXT,
    "securityTokens" TEXT,
    "logoutTimestamp" TIMESTAMP(3),
    "version" TEXT DEFAULT 'v1-alpha',

    CONSTRAINT "LoginRecord_pkey" PRIMARY KEY ("id")
);
