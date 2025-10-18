import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "../components/layout/AuthLayout";
import setCookies from "../utils/SetCookies";
import { useEffect, useRef, useState } from "react";
import Input from "../components/uiComponents/Input";
import Button from "../components/uiComponents/Button";
import useAxios from "../hooks/UseAxios";
import validateCredentials, { isValid } from "../utils/ValidateCredentials";

const Register = () => {
  const [normalizedPasswordError, setNormalizedPasswordError] = useState({
    password: "",
    confirmPassword: "",
  });
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState({
    email: "",
    fullname: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const onSubmit = async (formData) => {
    try {
      const response = await useAxios.post("/register", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response?.status === 200) {
        setCookies(response.data);
        navigate("/products");
      }
    } catch (err) {
      if (err.response?.status === 422) {
        const errors = err.response.data.errors || {};

        setError({
          email: errors.email || "",
          fullname: errors.fullname || "",
          password: errors.password || "",
        });
      }
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setNormalizedPasswordError({
      ...normalizedPasswordError,
      [e.target.name]: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateCredentials(formData);
    setError(validationErrors);

    if (!isValid(validationErrors)) {
      return;
    }

    const data = new FormData();
    data.append("fullname", formData.fullname);
    data.append("email", formData.email);
    data.append("password", formData.password);

    await onSubmit(data);
  };

  useEffect(() => {
    if (!error?.password) return;

    if (error.password.length < 0) {
      setNormalizedPasswordError({});
      return;
    }

    let passwordErrors = Array.isArray(error.password)
      ? [...error.password]
      : [error.password];

    let passwordError = null;
    let confirmPasswordError = null;

    for (const errMsg of passwordErrors) {
      if (errMsg.toLowerCase().includes("match")) {
        confirmPasswordError = errMsg;
      } else {
        passwordError = errMsg;
      }
    }

    setNormalizedPasswordError({
      ...error,
      password: passwordError,
      confirmPassword: confirmPasswordError,
    });
  }, [error]);

  return (
    <>
      <AuthLayout title={"Registration"}>
        <form onSubmit={handleSubmit} className="rounded-md">
          <div className="flex w-full flex-col gap-[24px]">
            <Input
              value={formData.fullname}
              setValue={handleChange}
              type="text"
              name="fullname"
              placeholder="Full name *"
              errorMessage={error.fullname ?? ""}
            />

            <Input
              value={formData.email}
              setValue={handleChange}
              type="email"
              name="email"
              placeholder="Email *"
              errorMessage={error.email ?? ""}
            />

            <div className="relative">
              <Input
                name="password"
                placeholder="Password *"
                value={formData.password}
                setValue={handleChange}
                errorMessage={error.password ?? ""}
              />
            </div>

            <div className="relative">
              <Input
                name="confirmPassword"
                placeholder="Confirm password *"
                value={formData.confirmPassword}
                setValue={handleChange}
                errorMessage={error.confirmPassword ?? ""}
              />
            </div>
          </div>

          <Button
            type="submit"
            onClick={onSubmit}
            title={"Register"}
            style="mt-[46px] h-[41px] w-full cursor-pointer rounded-[10px] bg-[#a4e636] px-5 py-2.5 text-black transition-all hover:bg-[#a4d116]"
          />

          <p className="mt-4 w-full text-center text-[14px] text-gray-600">
            Already member?{" "}
            <Link
              to={{ pathname: "/login" }}
              className="text-[#a4e636] hover:underline"
            >
              Log in
            </Link>
          </p>
        </form>
      </AuthLayout>
    </>
  );
};

export default Register;
