interface CardProps{
    icon:React.ReactNode
    title:string
    description:React.ReactNode
}

const Card = (cardDetails:CardProps) => {
    const {icon,title,description} = cardDetails
    return (
      <div className="bg-gray-200 rounded-lg p-6 flex flex-col items-start justify-start space-y-4 dark:bg-black dark:border">
        <div className="text-3xl text-gray-600 dark:text-white">{icon}</div>
        
        <h2 className="text-xl font-bold text-gray-800 dark:text-white">{title}</h2>
  
        <p className="text-gray-600 dark:text-white leading-relaxed">
          {description}
        </p>
      </div>
    );
  };
  
export {Card}