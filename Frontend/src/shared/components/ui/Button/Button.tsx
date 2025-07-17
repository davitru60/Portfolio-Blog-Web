import { Link } from "react-router-dom";
import { buttonStyles } from "./ButtonStyle";

interface ButtonProps {
  className: keyof typeof buttonStyles;
  content: string;
  url?: string;
  target?: string;
  rel?: string;
}

const Button = (buttonProps: ButtonProps) => {
  const { className, content, url, target, rel } = buttonProps;

  // Enlace externo (http o https)
  const isExternal = url?.startsWith("http");

  if (url) {
    if (isExternal) {
      return (
        <a
          href={url}
          className={buttonStyles[className]}
          target={target || "_blank"}
          rel={rel || "noopener noreferrer"}
        >
          {content}
        </a>
      );
    } else {
      return (
        <Link to={url} className={buttonStyles[className]}>
          {content}
        </Link>
      );
    }
  }

  return <button className={buttonStyles[className]}>{content}</button>;
};

export { Button };
