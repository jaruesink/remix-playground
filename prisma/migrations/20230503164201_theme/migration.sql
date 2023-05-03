-- CreateTable
CREATE TABLE "Theme" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "color_50" TEXT NOT NULL,
    "color_100" TEXT NOT NULL,
    "color_200" TEXT NOT NULL,
    "color_300" TEXT NOT NULL,
    "color_400" TEXT NOT NULL,
    "color_500" TEXT NOT NULL,
    "color_600" TEXT NOT NULL,
    "color_700" TEXT NOT NULL,
    "color_800" TEXT NOT NULL,
    "color_900" TEXT NOT NULL,

    CONSTRAINT "Theme_pkey" PRIMARY KEY ("id")
);
