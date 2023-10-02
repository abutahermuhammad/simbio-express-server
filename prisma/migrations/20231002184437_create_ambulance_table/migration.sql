-- CreateTable
CREATE TABLE "Ambulance" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "vehicle_number" VARCHAR(10) NOT NULL,
    "ambulance_type" VARCHAR(50),
    "personId" INTEGER NOT NULL,
    "version" TEXT DEFAULT 'v1-alpha',
    "organizationId" INTEGER,

    CONSTRAINT "Ambulance_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Ambulance" ADD CONSTRAINT "Ambulance_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "Organization"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ambulance" ADD CONSTRAINT "Ambulance_personId_fkey" FOREIGN KEY ("personId") REFERENCES "Person"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
