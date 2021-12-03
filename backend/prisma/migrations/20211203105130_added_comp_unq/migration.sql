/*
  Warnings:

  - A unique constraint covering the columns `[id,ownerId]` on the table `Form` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Form_id_ownerId_key" ON "Form"("id", "ownerId");
