import { MealGridProps } from "@/types/meals/meals-types";
import MealItem from "./meal-item";

export default function MealsGrid({ meals }: MealGridProps) {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-20 w-11/12 max-w-7xl mx-auto list-none p-0">
      {meals.map((meal) => (
        <li key={meal.id}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
}
