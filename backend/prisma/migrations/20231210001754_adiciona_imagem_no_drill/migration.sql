/*
  Warnings:

  - Added the required column `image` to the `Drill` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Drill" ADD COLUMN     "image" TEXT NOT NULL;
