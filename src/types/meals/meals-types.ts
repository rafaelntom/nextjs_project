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
