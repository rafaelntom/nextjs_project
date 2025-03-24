import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getMeals = async () => {
  return await prisma.meal.findMany();
};

export const getMeal = async (slug: string) => {
  return await prisma.meal.findUnique({
    where: {
      slug,
    },
  });
};
