/*
  Warnings:

  - You are about to alter the column `price` on the `karya` table. The data in that column could be lost. The data in that column will be cast from `UnsignedMediumInt` to `VarChar(191)`.

*/
-- AlterTable
ALTER TABLE `karya` MODIFY `price` VARCHAR(191) NOT NULL;
