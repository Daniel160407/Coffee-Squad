import { useState } from "react";
import Button from "./Button";

const Input = ({
  value,
  setValue,
  placeholder = "",
  type,
  name,
  errorMessage = "",
  style,
}) => {
  const getInputType = () => {
    if (type) return type;
  };

  return (
    <>
      {type !== "file" ? (
        <div className="relative w-full">
          <div className="relative">
            <input
              type={getInputType()}
              name={name}
              className={`${style} h-[42px] w-full rounded-[8px] px-3 pr-10 ring-1 transition-all focus:outline-0 ${errorMessage !== "" ? "ring-[#FF4000]" : "ring-[#E1DFE1] focus:ring-black"} `}
              placeholder={placeholder}
              value={value}
              onChange={setValue}
            />
          </div>

          {errorMessage && (
            <p className="mt-1 ml-1 text-sm text-[#FF4000]">{errorMessage}</p>
          )}
        </div>
      ) : (
        <>
          <label htmlFor="fileInput" className="cursor-pointer">
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