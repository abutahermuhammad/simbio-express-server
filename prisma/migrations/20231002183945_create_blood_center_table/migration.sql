-- CreateTable
CREATE TABLE "BloodCenter" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "established_at" TIMESTAMP(3) NOT NULL,
    "version" TEXT DEFAULT 'v1-alpha',
    "personId" INTEGER,
    "contactId" INTEGER,
    "locationId" INTEGER,

    CONSTRAINT "BloodCenter_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "BloodCenter" ADD CONSTRAINT "BloodCenter_personId_fkey" FOREIGN KEY ("personId") REFERENCES "Person"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BloodCenter" ADD CONSTRAINT "BloodCenter_contactId_fkey" FOREIGN KEY ("contactId") REFERENCES "Contact"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BloodCenter" ADD CONSTRAINT "BloodCenter_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "Location"("id") ON DELETE SET NULL ON UPDATE CASCADE;
