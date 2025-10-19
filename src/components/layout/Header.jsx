import Button from "../uiComponents/Button";
import { useState } from "react";
import UserDetailsForm from "../form/UserDetailsForm";
import { Link } from "react-router-dom";

const Header = () => {
  const [showUserDetailsForm, setShowUserDetailsForm] = useState(false);

  const handleUserDetailsSubmit = (formData) => {
    setShowUserDetailsForm(false);
    console.log("User details submitted:", formData);
  };

  return (
    <>
      {showUserDetailsForm && (
        <div
          className="fixed inset-0 z-[1000] bg-black/30 backdrop-blur-lg"
          onClick={() => setShowUserDetailsForm(false)}
        />
      )}

      <header className="w-full flex flex-row h-20 bg-[#303058] items-center justify-around">
        <div className="flex flex-row gap-3 items-center cursor-pointer">
          <img
            src="./images/logo.jpg"
            className="w-[60px] h-auto rounded-full"
            alt="Coffee Fitness Logo"
          />
          <Link to={{ pathname: "/" }}>
            <div className="flex flex-col">
              <h1 className="text-white text-[3vh] font-semibold">
                Coffee Fitness
              </h1>
              <p className="text-gray-400 text-[2vh]">
                Better fitness and health
              </p>
            </div>
          </Link>
        </div>
        <div className="flex flex-row gap-5">
          <Button
            title={"Cycling"}
            style={
              "outline-1 hover:bg-lime-500 outline-lime-400 py-3 px-7  bg-white"
            }
          />
          <Button
            title={"Runing"}
            style="bg-lime-400 py-3 px-7  hover:bg-lime-500"
          />
        </div>
        <div>
          <Button
            imgSrc={"/images/Avatar.jpg"}
            style="cursor-pointer text-white"
            onClick={() => setShowUserDetailsForm(true)}
          />
        </div>
      </header>
      {showUserDetailsForm && (
        <div className="fixed inset-0 z-1000 flex items-center justify-center">
          <UserDetailsForm
            onSubmit={handleUserDetailsSubmit}
            onClose={() => setShowUserDetailsForm(false)}
          />
        </div>
      )}
    </>
  );
};

export default Header;
