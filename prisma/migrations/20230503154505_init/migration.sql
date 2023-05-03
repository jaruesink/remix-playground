-- CreateTable
CREATE TABLE "Test" (
    "id" SERIAL NOT NULL,
    "hello" TEXT NOT NULL DEFAULT 'world',

    CONSTRAINT "Test_pkey" PRIMARY KEY ("id")
);
