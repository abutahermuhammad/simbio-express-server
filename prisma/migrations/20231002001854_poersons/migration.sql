-- CreateTable
CREATE TABLE "Persons" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "first_name" VARCHAR(100) NOT NULL,
    "last_name" VARCHAR(255),
    "father_name" VARCHAR(100),
    "mother_name" VARCHAR(100),
    "profession" VARCHAR(52),
    "dob" TIMESTAMP(3),
    "gender" "Gender",
    "contactId" INTEGER NOT NULL,
    "version" TEXT DEFAULT 'v1-alpha',

    CONSTRAINT "Persons_pkey" PRIMARY KEY ("id")
);
