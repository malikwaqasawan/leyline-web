import { FC } from "react";

interface IButton {
  title: string;
  className?: string;
  type?: "button" | "submit" | "reset";
}

const Button: FC<IButton> = ({ title, type, className }) => {
  return (
    <button
      type={type || "button"}
      className={
        "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" +
        className
      }
    >
      {title}
    </button>
  );
};

export default Button;
