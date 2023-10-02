/*
  Warnings:

  - You are about to drop the column `appVersion` on the `OrganizationSettings` table. All the data in the column will be lost.
  - You are about to drop the column `privacyPolicyLink` on the `OrganizationSettings` table. All the data in the column will be lost.
  - You are about to drop the column `termsOfServiceLink` on the `OrganizationSettings` table. All the data in the column will be lost.
  - You are about to drop the column `accessibility` on the `UserSettings` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "OrganizationSettings" DROP COLUMN "appVersion",
DROP COLUMN "privacyPolicyLink",
DROP COLUMN "termsOfServiceLink";

-- AlterTable
ALTER TABLE "UserSettings" DROP COLUMN "accessibility",
ADD COLUMN     "high_contrast_mode" BOOLEAN,
ADD COLUMN     "in_app_notifications" BOOLEAN DEFAULT true,
ADD COLUMN     "key_board_shortcut" BOOLEAN,
ADD COLUMN     "notification_frequency" TEXT,
ADD COLUMN     "notification_sound" TEXT,
ADD COLUMN     "notification_vibrate" BOOLEAN DEFAULT true,
ADD COLUMN     "password_reset" BOOLEAN,
ADD COLUMN     "security_answer" TEXT,
ADD COLUMN     "security_question" TEXT;
