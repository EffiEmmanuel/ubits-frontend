import axios from "axios";
import { useFormik } from "formik";
import { useState } from "react";
import { FaSpinner } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoginFormSchema from "./validation";
import { Link, redirect } from "react-router-dom";
import { MdArrowRightAlt } from "react-icons/md";

// Logos
import googleLogo from "../../assets/icons/google.svg";
import facebookLogo from "../../assets/icons/facebook.svg";

function LoginFormWithOAuth() {
  // Loading state
  const [isLoading, setIsLoading] = useState(false);

  // Remember password state
  const [rememberPassword, setRememberPassword] = useState();

  // Form submission function - Example
  const onSubmit = async (values, actions) => {
    setIsLoading(true);

    // Check if remember password is turned on
    if (rememberPassword) {
      // Do something here, usually just saves a state in the local storage
    }
    // TO-DO: Send API request to server
    await axios
      .post(`${process.env.REACT_APP_BASE_URL_API}/login`, {
        email: values.email,
        password: values.password,
      })
      .then((res) => {
        console.log(res);
        toast.success(res.data.message);
        localStorage.setItem("user-token", res.data.data);
        redirect("/user/dashboard");
        setIsLoading(false);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
        setIsLoading(false);
      });
  };

  // OAuth Helpers
  // Log in with Google
  async function loginWithGoogle() {
    // Do something
  }

  // Log in with Facebook
  async function loginWithFacebook() {
    // Do something
  }

  // Log in with Email
  async function loginWithEmail() {
    // Do something
    axios
      .post("", values)
      .then((res) => {})
      .catch((err) => {});
  }

  // Formik setup
  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginFormSchema,
    onSubmit,
  });

  return (
    <form className="" onSubmit={handleSubmit}>
      <ToastContainer />
      {/* OAuth Logins */}
      <div className="flex lg:flex-row lg:justify-center lg:gap-x-14 my-16 items-center flex-col gap-y-7">
        <button
          onClick={() => loginWithGoogle()}
          className="flex flex-row items-center gap-x-3 w-70 px-7 py-3 bg-white rounded-lg"
        >
          <span>
            <img
              src={googleLogo}
              alt="Log in with Google"
              className="w-5 h-5"
              style={{ objectFit: "contain" }}
            />
          </span>
          <span>Login with Google</span>
        </button>

        <button
          onClick={() => loginWithFacebook()}
          className="flex flex-row items-center gap-x-3 w-70 px-7 py-3 bg-white rounded-lg"
        >
          <span>
            <img
              src={facebookLogo}
              alt="Log in with Facebook"
              className="w-5 h-5"
              style={{ objectFit: "contain" }}
            />
          </span>
          <span>Login with Facebook</span>
        </button>
      </div>

      <div className="px-20 lg:px-0 text-white">
        <div className="flex flex-col justify-between gap-x-20 align-middle w-full">
          <div className="lg:w-full w-full relative">
            <label
              htmlFor="email"
              className="capitalize text-sm absolute left-0"
            >
              email:
            </label>
            <input
              className="w-full h-16 bg-transparent border-[0.5px] px-8 text-white text-sm mt-7 rounded-lg rounded-bl-lg focus:outline-none"
              id="email"
              type="text"
              name="email"
              value={values.email}
              onChange={handleChange}
              placeholder="test123@gmail.com"
            />

            <p className="text-left mt-3 text-xs">
              {errors.email ? errors.email : ""}
            </p>
          </div>
          <div className="lg:w-full w-full relative mt-10">
            <label
              htmlFor="password"
              className="capitalize text-sm absolute left-0"
            >
              Password:
            </label>
            <input
              className="w-full h-16 bg-transparent border-[0.5px] px-8 text-white text-sm mt-7 rounded-lg rounded-bl-lg focus:outline-none"
              id="password"
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              placeholder="********"
            />
            <p className="text-left mt-3 text-xs">
              {errors.password ? errors.password : ""}
            </p>
            {/* 
            <p className="text-left mt-3 text-sm">
              <Link className="font-semibold" href="/accounts/login">
                Forgot password?
              </Link>
            </p> */}
          </div>

          {/* Remember me & Forgot password */}
          <div className="flex justify-between items-center mt-4">
            {/* Remember me */}
            <div className="flex items-center gap-x-2">
              <input
                type="checkbox"
                name="remember-password"
                id="remember-password"
                value={rememberPassword}
                className="bg-transparent border-[0.5px]"
                onChange={(e) => setRememberPassword(e.target.value)}
              />
              <label htmlFor="remember-password">Remember me</label>
            </div>

            <Link
              to="/auth/forgot-password"
              className="text-[#4499FC] underline"
            >
              Forgot Password?
            </Link>
          </div>
        </div>

        {/* Log in */}
        <div className="w-full flex lg:justify-center lg:mt-10 mt-10">
          <button
            onClick={() => loginWithEmail()}
            type="submit"
            className="bg-ubtisLightBlue text-ubtisDarkBlue h-16 w-full flex flex-row justify-center items-center gap-x-3 px-8 rounded-lg -mb-24 rounded-br-lg text-sm hover:bg-gray-700 hover:border-black"
          >
            {isLoading ? (
              <FaSpinner className="text-white animate-spin my-auto mx-auto text-center text-lg" />
            ) : (
              <>
                <span>Log in</span>
                <span>
                  <MdArrowRightAlt size={32} />
                </span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Don't have an account? */}
      <p className="lg:my-0 lg:mt-28 my-28 text-center text-white">
        Don't have an account?{" "}
        <Link to="/auth/signup" className="text-[#4499FC]">
          Sign up
        </Link>
      </p>
    </form>
  );
}

export default LoginFormWithOAuth;
