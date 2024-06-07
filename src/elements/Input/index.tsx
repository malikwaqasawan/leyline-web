import { FC } from "react";

interface IInput {
  type?: string;
  placeholder?: string;
  required?: boolean;
  name?: string;
  label?: string;
  className?: string;
}

const Input: FC<IInput> = ({
  type,
  placeholder,
  required,
  name,
  label,
  className,
}) => {
  return (
    <>
      <label
        htmlFor={name}
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type || "text"}
        className={
          "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" +
          className
        }
        placeholder={placeholder || label}
        required={required}
      />
    </>
  );
};

export default Input;
