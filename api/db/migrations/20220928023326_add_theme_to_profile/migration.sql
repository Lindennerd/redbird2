-- CreateEnum
CREATE TYPE "theme" AS ENUM ('DARK', 'LIGHT');

-- AlterTable
ALTER TABLE "profile" ADD COLUMN     "theme" "theme" NOT NULL DEFAULT 'LIGHT';
