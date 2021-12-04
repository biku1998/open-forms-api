/*
  Warnings:

  - You are about to drop the column `isPublished` on the `Form` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Form" DROP COLUMN "isPublished",
ADD COLUMN     "publishedAt" TIMESTAMP(3);
