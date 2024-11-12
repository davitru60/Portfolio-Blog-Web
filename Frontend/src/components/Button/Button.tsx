import { Link } from 'react-router-dom';
import { buttonStyles } from './ButtonStyle';

interface ButtonProps {
  className: keyof typeof buttonStyles;
  content: string;
  url?: string;
}

const Button = (buttonProps: ButtonProps) => {
  const { className, content, url } = buttonProps;

  if (url) {
    return (
      <Link to={url} className={buttonStyles[className]}>
        {content}
      </Link>
    );
  } else {
    return <button className={buttonStyles[className]}>{content}</button>;
  }
};

export { Button };
