import { Link, useNavigate } from "react-router-dom";
import useAxios from "../hooks/UseAxios";
import AuthLayout from "../components/layout/AuthLayout";
import setCookies from "../utils/SetCookies";
import { useState } from "react";
import Input from "../components/uiComponents/Input";
import Button from "../components/uiComponents/Button";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const onSubmit = async (formData) => {
    try {
      const response = await useAxios.post("/api/auth/login", formData);
      if (response?.status === 200) {
        setCookies(response.data);
        navigate("/cycling");
      }
    } catch (err) {
      if (err.response?.status === 422) {
        const errors = err.response.data.errors || {};

        setError({
          email: errors.email || "",
          password: errors.password || "",
        });
      } else if (err.response?.status === 401) {
        setError({
          password: "Invalid email or password",
        });
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit(formData);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <AuthLayout title={"Log in"}>
        <>
          <form onSubmit={handleSubmit} className="flex flex-col gap-[24px]">
            <div className="relative">
              <Input
                value={formData.email}
                setValue={handleChange}
                name="email"
                placeholder={"Email *"}
                type={"email"}
                errorMessage={error.email ?? null}
              />
            </div>
            <div className="relative">
              <Input
                value={formData.password}
                setValue={handleChange}
                name="password"
                placeholder="Password *"
                errorMessage={error.password ?? null}
              />
            </div>
            <Button
              type="submit"
              onClick={handleSubmit}
              title={"Log in"}
              style="mt-[46px] h-[41px] w-full cursor-pointer rounded-[10px] bg-[#a4e636] px-5 py-2.5 text-black transition-all hover:bg-[#a4d116]"
            />
          </form>
          <p className="mt-4 w-full text-center text-[14px] text-gray-600">
            Not a memeber?{" "}
            <Link
              to={{ pathname: "/register" }}
              className="text-[#a4e636] hover:underline"
            >
              Register
            </Link>
          </p>
        </>
      </AuthLayout>
    </>
  );
};

export default Login;
