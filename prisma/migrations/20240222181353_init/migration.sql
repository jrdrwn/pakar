/*
  Warnings:

  - You are about to alter the column `price` on the `karya` table. The data in that column could be lost. The data in that column will be cast from `Int` to `UnsignedInt`.

*/
-- AlterTable
ALTER TABLE `karya` MODIFY `price` INTEGER UNSIGNED NOT NULL;
