import clsx from "clsx";

type CardProps = {
  children?: React.ReactNode;
  className?: string;
};

const Card = ({ children, className }: CardProps) => {
  return (
    <div className={clsx("p-5 shadow-lg rounded-lg", className)}>
      {children}
    </div>
  );
};

export default Card;
