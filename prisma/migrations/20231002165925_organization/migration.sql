-- CreateEnum
CREATE TYPE "OrgType" AS ENUM ('HOSPITAL', 'CLUB', 'CENTER');

-- CreateTable
CREATE TABLE "Organization" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "org_type" "OrgType" NOT NULL,
    "org_id" INTEGER NOT NULL,
    "Volunteer" JSONB NOT NULL,
    "personId" INTEGER NOT NULL,
    "organizationSettingsId" INTEGER NOT NULL,

    CONSTRAINT "Organization_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Organization" ADD CONSTRAINT "Organization_personId_fkey" FOREIGN KEY ("personId") REFERENCES "Person"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Organization" ADD CONSTRAINT "Organization_organizationSettingsId_fkey" FOREIGN KEY ("organizationSettingsId") REFERENCES "OrganizationSettings"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
