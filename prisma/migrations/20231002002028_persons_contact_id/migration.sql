-- AddForeignKey
ALTER TABLE "Persons" ADD CONSTRAINT "Persons_contactId_fkey" FOREIGN KEY ("contactId") REFERENCES "Contact"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
