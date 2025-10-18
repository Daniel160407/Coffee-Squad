import { useState } from "react";
import Button from "./Button";
import { FiEye } from "react-icons/fi";

const Input = ({
  value,
  setValue,
  placeholder = "",
  type,
  name,
  errorMessage = "",
  style,
  dark = true, // added dark mode prop
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const getInputType = () => {
    if (type) return type;
    return isPasswordVisible ? "text" : "password";
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <>
      {type !== "file" ? (
        <div className="relative w-full">
          <div className="relative">
            <input
              type={getInputType()}
              name={name}
              className={`${
                style
                  ? style
                  : `h-[42px] w-full rounded-[8px] px-3 pr-10 ring-1 transition-all focus:outline-0
                  ${errorMessage !== "" ? "ring-red-500" : dark ? "ring-gray-600 focus:ring-[#a4e636]" : "ring-gray-300 focus:ring-black"}
                  ${dark ? "bg-gray-700 text-white placeholder-gray-400" : "bg-white text-gray-800 placeholder-gray-500"}`
              }`}
              placeholder={placeholder}
              value={value}
              onChange={setValue}
            />
            {!type && (
              <Button
                icon={FiEye}
                type="button"
                style="absolute top-1/2 right-3 z-10 -translate-y-1/2 transform cursor-pointer h-full text-gray-300 hover:text-white"
                onClick={togglePasswordVisibility}
              />
            )}
          </div>

          {errorMessage && (
            <p className="mt-1 ml-1 text-sm text-red-500">{errorMessage}</p>
          )}
        </div>
      ) : (
        <>
          <label
            htmlFor="fileInput"
            className={`cursor-pointer ${dark ? "text-gray-200" : "text-gray-800"}`}
          >
            {placeholder}
          </label>
          <input
            type="file"
            id="fileInput"
            accept="image/*"
            className="hidden"
            onChange={setValue}
          />
        </>
      )}
    </>
  );
};

export default Input;
