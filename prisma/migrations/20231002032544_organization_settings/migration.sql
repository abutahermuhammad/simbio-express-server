-- CreateTable
CREATE TABLE "OrganizationSettings" (
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
    "loginRecordId" INTEGER NOT NULL,

    CONSTRAINT "OrganizationSettings_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "OrganizationSettings" ADD CONSTRAINT "OrganizationSettings_loginRecordId_fkey" FOREIGN KEY ("loginRecordId") REFERENCES "LoginRecord"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
