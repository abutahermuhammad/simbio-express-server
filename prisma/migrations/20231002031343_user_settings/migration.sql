/*
  Warnings:

  - You are about to drop the column `userPreferenceId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `UserPreference` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `userSettingsId` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Theme" AS ENUM ('LIGHT', 'DARK');

-- CreateEnum
CREATE TYPE "Language" AS ENUM ('ENGLISH', 'BANGLA');

-- CreateEnum
CREATE TYPE "TimeFormat" AS ENUM ('H12AM', 'H12PM', 'H24', 'H24S', 'H12NoS', 'H24NoS', 'H12S_AM', 'H12S_PM', 'H24S_AM', 'H24S_PM');

-- CreateEnum
CREATE TYPE "DateFormat" AS ENUM ('YMD_HYPHEN', 'DMY_HYPHEN', 'MDY_SLASH', 'DMY_SLASH', 'MON_DY_COMMA', 'DY_MON_COMMA', 'MONTH_DY_COMMA', 'DY_MONTH_COMMA', 'MON_DY_SPACE', 'DY_MON_SPACE');

-- CreateEnum
CREATE TYPE "Timezone" AS ENUM ('GMT_10_Hawaii', 'GMT_09_Alaska', 'GMT_08_Pacific_Time_US_Canada', 'GMT_07_Mountain_Time_US_Canada', 'GMT_06_Central_Time_US_Canada_Mexico_City', 'GMT_05_Eastern_Time_US_Canada_Bogota_Lima', 'GMT_04_Atlantic_Time_Canada_Caracas_La_Paz', 'GMT_03_30_Newfoundland', 'GMT_03_Buenos_Aires_Brasilia_Georgetown', 'GMT_02_Mid_Atlantic', 'GMT_01_Azores_Cape_Verde_Islands', 'GMT_00_Western_Europe_Time_London_Lisbon_Casablanca', 'GMT_01_Brussels_Copenhagen_Madrid_Paris', 'GMT_02_Athens_Bucharest_Istanbul', 'GMT_03_Moscow_St_Petersburg_Kuwait_Nairobi', 'GMT_03_30_Tehran', 'GMT_04_Abu_Dhabi_Muscat_Baku_Tbilisi', 'GMT_04_30_Kabul', 'GMT_05_Ekaterinburg_Islamabad_Karachi_Tashkent', 'GMT_05_30_Chennai_Kolkata_Mumbai_New_Delhi', 'GMT_05_45_Kathmandu', 'GMT_06_Astana_Dhaka_Almaty_Urumqi', 'GMT_06_30_Yangon_Cocos_Islands', 'GMT_07_Bangkok_Hanoi_Jakarta', 'GMT_08_Beijing_Perth_Singapore_Hong_Kong', 'GMT_09_Tokyo_Seoul_Osaka_Sapporo_Yakutsk', 'GMT_09_30_Adelaide_Darwin', 'GMT_10_Eastern_Australia_Guam_Vladivostok', 'GMT_11_Magadan_Solomon_Islands_New_Caledonia', 'GMT_12_Auckland_Wellington_Fiji_Kamchatka', 'GMT_13_Nuku_alofa');

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_userPreferenceId_fkey";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "userPreferenceId",
ADD COLUMN     "userSettingsId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "UserPreference";

-- CreateTable
CREATE TABLE "UserSettings" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "language" "Language" NOT NULL DEFAULT 'ENGLISH',
    "time_format" "TimeFormat" NOT NULL DEFAULT 'H12PM',
    "date_format" "DateFormat" NOT NULL DEFAULT 'DY_MONTH_COMMA',
    "timezone" "Timezone" NOT NULL DEFAULT 'GMT_06_Astana_Dhaka_Almaty_Urumqi',
    "theme" "Theme" DEFAULT 'LIGHT',
    "email_notifications" BOOLEAN NOT NULL DEFAULT true,
    "phone_notification" BOOLEAN NOT NULL DEFAULT true,
    "push_notifications" BOOLEAN NOT NULL DEFAULT true,
    "accessibility" JSONB,
    "two_factor_auth" BOOLEAN,
    "login_record_id" INTEGER NOT NULL,
    "loginRecordId" INTEGER NOT NULL,

    CONSTRAINT "UserSettings_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_userSettingsId_fkey" FOREIGN KEY ("userSettingsId") REFERENCES "UserSettings"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserSettings" ADD CONSTRAINT "UserSettings_loginRecordId_fkey" FOREIGN KEY ("loginRecordId") REFERENCES "LoginRecord"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
