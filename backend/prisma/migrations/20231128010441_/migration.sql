-- CreateTable
CREATE TABLE "Drill" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "observations" TEXT NOT NULL,
    "classPlanId" TEXT NOT NULL,

    CONSTRAINT "Drill_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Drill" ADD CONSTRAINT "Drill_classPlanId_fkey" FOREIGN KEY ("classPlanId") REFERENCES "ClassPlan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
