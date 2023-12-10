-- CreateTable
CREATE TABLE "DrillElement" (
    "id" TEXT NOT NULL,
    "index" INTEGER NOT NULL,
    "top" INTEGER NOT NULL,
    "left" INTEGER NOT NULL,
    "drillId" TEXT NOT NULL,

    CONSTRAINT "DrillElement_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "DrillElement" ADD CONSTRAINT "DrillElement_drillId_fkey" FOREIGN KEY ("drillId") REFERENCES "Drill"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
