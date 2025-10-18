import { useEffect, useRef, useState } from "react";
import Button from "./Button";

const Dropdown = ({
  title,
  options,
  onChange,
  buttonStyle = "",
  contentStyle = "",
  icon: Icon,
  iconPosition = "LEFT",
  defaultValue = "",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(defaultValue);

  const dropdownRef = useRef(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option) => {
    setSelectedValue(option);
    setIsOpen(false);
    if (onChange) {
      onChange(option);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={dropdownRef}
      className="relative inline-block cursor-pointer w-full"
    >
      <Button
        icon={Icon}
        iconPosition={iconPosition}
        title={selectedValue}
        style={buttonStyle}
        onClick={handleToggle}
      />

      {isOpen && (
        <div className={contentStyle}>
          {title && (
            <div className="p-4 border-b border-gray-600">
              <p className="font-semibold text-white">{title}</p>
            </div>
          )}
          <ul className="max-h-60 overflow-auto">
            {options.map((option, index) => (
              <li
                key={index}
                onClick={() => handleSelect(option)}
                className={`px-4 py-3 hover:bg-[#a4e636] font-semibold hover:text-black border-b border-gray-600 last:border-b-0 transition-colors duration-150 ${
                  option === selectedValue
                    ? "bg-[#8cc42a] text-black"
                    : "text-white"
                }`}
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
