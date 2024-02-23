/*
  Warnings:

  - You are about to alter the column `price` on the `karya` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `UnsignedMediumInt`.

*/
-- AlterTable
ALTER TABLE `karya` MODIFY `price` MEDIUMINT UNSIGNED NOT NULL;
