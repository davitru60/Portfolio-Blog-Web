interface CardProps {
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

const Card = (cardDetails: CardProps) => {
  const { title, description } = cardDetails;
  return (
    <div className="flex h-full flex-col items-start justify-start space-y-4 rounded-3xl bg-gray-200 p-6 dark:bg-black">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
        {title}
      </h2>

      <p className="text-lg leading-relaxed text-gray-600 dark:text-white">
        {description}
      </p>
    </div>
  );
};

export { Card };
