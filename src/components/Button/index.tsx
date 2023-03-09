import clsx from "clsx";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  icon?: JSX.Element;
};

const Button = ({ children, icon, className, ...props }: ButtonProps) => {
  return (
    <button
      className={clsx(
        "flex items-center justify-center gap-x-2 px-4 py-2 border border-[#83A1B1] rounded-lg text-[#5A8EE4] font-medium w-full",
        className
      )}
      {...props}
    >
      {children}
      {icon}
    </button>
  );
};

export default Button;
