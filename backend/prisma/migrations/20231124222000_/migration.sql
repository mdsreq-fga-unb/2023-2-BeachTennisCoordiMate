-- CreateTable
CREATE TABLE "ClassPlan" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "goals" TEXT NOT NULL,
    "observations" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT NOT NULL,

    CONSTRAINT "ClassPlan_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ClassPlan" ADD CONSTRAINT "ClassPlan_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
