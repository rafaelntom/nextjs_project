"use server";

import { createAndStoreMeal } from "./meals";

export const shareMeal = async (formData: FormData) => {
  const creator = formData.get("name");
  const creator_email = formData.get("email");
  const title = formData.get("title");
  const summary = formData.get("summary");
  const instructions = formData.get("instructions");
  const image = formData.get("image-picker");

  if (!creator || !creator_email || !title || !summary || !instructions || !image) {
    throw new Error("All fields are required");
  }

  if (!(image instanceof File)) {
    throw new Error("Invalid image file");
  }

  const meal = {
    creator: creator.toString(),
    creator_email: creator_email.toString(),
    title: title.toString(),
    summary: summary.toString(),
    instructions: instructions.toString(),
    image: image as File,
  };

  await createAndStoreMeal(meal);
};
