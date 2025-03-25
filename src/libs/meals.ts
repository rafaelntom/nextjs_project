import { MealCreation } from "@/types/meals/meals-types";
import { Prisma, PrismaClient } from "@prisma/client";
import fs from "node:fs";
import slugify from "slugify";
import xss from "xss";
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

export const createMeal = async (meal: MealCreation) => {
  try {
    const slug = slugify(meal.title, { lower: true });

    meal.slug = slug;

    const sanitazedInstructions = xss(meal.instructions);
    meal.instructions = sanitazedInstructions;

    const imageExtension = meal.image.name.split(".").pop();
    const fileName = `${meal.slug}.${imageExtension}`;

    const stream = fs.createWriteStream(`public/images/${fileName}`);
    const bufferedImage = await meal.image.arrayBuffer();

    stream.write(Buffer.from(bufferedImage), (error) => {
      throw new Error("Saving image failed" + error?.message);
    });

    const newMeal = await prisma.meal.create({
      data: {
        ...meal,
        image: `images/${fileName}`,
      },
    });

    return newMeal;
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      throw new Error("Error ocurred while creating the meal with prisma");
    }

    throw error;
  }
};
