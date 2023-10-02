/*
  Warnings:

  - You are about to drop the column `accessibility` on the `OrganizationSettings` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "OrganizationSettings" DROP CONSTRAINT "OrganizationSettings_loginRecordId_fkey";

-- AlterTable
ALTER TABLE "OrganizationSettings" DROP COLUMN "accessibility",
ADD COLUMN     "accountDeactivation" BOOLEAN,
ADD COLUMN     "appVersion" TEXT,
ADD COLUMN     "avatar" TEXT,
ADD COLUMN     "clearBrowsingData" BOOLEAN,
ADD COLUMN     "contactSupportLink" TEXT,
ADD COLUMN     "dataRetentionDays" INTEGER,
ADD COLUMN     "dataSharing" BOOLEAN,
ADD COLUMN     "helpCenterLink" TEXT,
ADD COLUMN     "high_contrast_mode" BOOLEAN,
ADD COLUMN     "in_app_notifications" BOOLEAN DEFAULT true,
ADD COLUMN     "key_board_shortcut" BOOLEAN,
ADD COLUMN     "notification_frequency" TEXT,
ADD COLUMN     "notification_sound" TEXT,
ADD COLUMN     "notification_vibrate" BOOLEAN DEFAULT true,
ADD COLUMN     "password_reset" BOOLEAN,
ADD COLUMN     "privacyPolicyLink" TEXT,
ADD COLUMN     "security_answer" TEXT,
ADD COLUMN     "security_question" TEXT,
ADD COLUMN     "termsOfServiceLink" TEXT,
ADD COLUMN     "username" VARCHAR(100),
ALTER COLUMN "loginRecordId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "OrganizationSettings" ADD CONSTRAINT "OrganizationSettings_loginRecordId_fkey" FOREIGN KEY ("loginRecordId") REFERENCES "LoginRecord"("id") ON DELETE SET NULL ON UPDATE CASCADE;
