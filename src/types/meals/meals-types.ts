export interface MealItemProps {
  id: number;
  title: string;
  slug: string;
  image: string;
  summary: string;
  creator: string;
}

export interface MealGridProps {
  meals: MealItemProps[];
}

export interface MealCreation {
  title: string;
  summary: string;
  instructions: string;
  image: File;
  creator: string;
  creator_email: string;
  slug?: string;
}
