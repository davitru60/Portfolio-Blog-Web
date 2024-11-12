import { ReactNode } from 'react';

interface SkillCardProps {
  title: string;
  skills?: { icon: ReactNode; name: string }[];
  containerClassName?: string;
  titleClassName?: string;
  skillItemClassName?: string;
  skillsContainerClassName?: string;
  backgroundImage?: string;
}

const SkillCard = (skillCardProps: SkillCardProps) => {
  const {
    title,
    skills,
    containerClassName,
    titleClassName,
    skillItemClassName,
    skillsContainerClassName,
    backgroundImage,
  } = skillCardProps;

  return (
    <div className={containerClassName}>
      {backgroundImage && (
        <img
          src={backgroundImage}
          alt="Descripción de la imagen"
          className="absolute inset-0 h-full w-full scale-150 rounded-3xl object-cover opacity-20 blur-md"
        />
      )}
      <h1 className={titleClassName}>{title}</h1>

      <div
        className={
          skillsContainerClassName || 'mt-3 flex items-center space-x-8'
        }
      >
        {skills?.map((skill, index) => (
          <div key={index} className={skillItemClassName}>
            {skill.icon}
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export { SkillCard };
