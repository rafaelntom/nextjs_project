interface ShowMealProps {
  params: Promise<{ slug: string }>;
}

const ShowMeal = async ({ params }: ShowMealProps) => {
  const { slug } = await params;
  return <div>Slug: {slug}</div>;
};

export default ShowMeal;
