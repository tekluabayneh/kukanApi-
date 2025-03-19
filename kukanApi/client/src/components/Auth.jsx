import { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { gsap } from "gsap";

const Auth = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({});

  const [isLogin, setIsLogin] = useState(true);
  const [loginMessage, setLoginMessage] = useState("");
  const [registerMessage, setRegisterMessage] = useState("");
  const loginRef = useRef(null);
  const registerRef = useRef(null);

  // GSAP animations
  useEffect(() => {
    if (isLogin) {
      gsap.fromTo(
        loginRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
      );
      gsap.to(registerRef.current, { opacity: 0, y: 50, duration: 0.5 });
    } else {
      gsap.fromTo(
        registerRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
      );
      gsap.to(loginRef.current, { opacity: 0, y: 50, duration: 0.5 });
    }
  }, [isLogin]);

  // Handle login form submission
  const handleLoginSubmit = (data) => {
    const { login_email, login_password } = data;
    console.log(login_email, login_password);
    reset();
  };

  // Handle register form submission
  const handleRegisterSubmit = (data) => {
    const { register_email, register_password } = data;
    console.log(register_email, register_password);
    reset();
  };

  // Toggle between login and register
  const toggleForm = () => {
    setIsLogin(!isLogin);
    setLoginMessage("");
    setRegisterMessage("");
  };

  return (
    <div className="bg-gradient-to-r from-blue-500 to-teal-500 h-screen flex gap-5 items-center justify-center relative">
      {/* Login Form */}
      <div
        ref={loginRef}
        className={`login bg-white p-8 rounded-lg shadow-xl max-w-sm w-full ${
          !isLogin ? "hidden" : ""
        }`}
      >
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
          Login
        </h2>
        <p className="show_loginmessage text-red-500">{loginMessage}</p>
        <form className="space-y-6" onSubmit={handleSubmit(handleLoginSubmit)}>
          {/* Email Input */}
          <div className="space-y-2">
            <label
              htmlFor="login_email"
              className="text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              {...register("login_email", {
                required: "email is mandatory",
              })}
              placeholder="Enter your email"
              className="login_email w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <span className="text-red-500 pt-1">
              {errors.login_email?.message}
            </span>
          </div>

          {/* Password Input */}
          <div className="space-y-2">
            <label
              htmlFor="login_password"
              className="text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              {...register("login_password", {
                required: "password is mandatory",
              })}
              placeholder="Enter your password"
              className="login_password w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <span className="text-red-500 pt-1">
              {errors.login_password?.message}
            </span>
          </div>

          {/* Forgot Password Link */}
          <div className="flex justify-between items-center">
            <Link to="#" className="text-sm text-blue-500 hover:text-blue-700">
              Forgot password?
            </Link>
          </div>

          {/* Submit Button */}
          <div>
            <button
              id="loginBtn"
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Login
            </button>
          </div>
        </form>

        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <button
              onClick={toggleForm}
              className="loginBtn text-blue-500 hover:text-blue-700"
            >
              Sign up
            </button>
          </p>
        </div>
      </div>

      {/* Register Form */}
      <div
        ref={registerRef}
        className={`register bg-white p-8 rounded-lg shadow-xl max-w-sm w-full ${
          isLogin ? "hidden" : ""
        }`}
      >
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
          Register
        </h2>
        <p className="show_registermessage text-red-500">{registerMessage}</p>
        <form
          className="space-y-6"
          onSubmit={handleSubmit(handleRegisterSubmit)}
        >
          {/* Email Input */}
          <div className="space-y-2">
            <label
              htmlFor="register_email"
              className="text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              {...register("register_email", {
                required: "email is mandatory",
              })}
              className="register_email w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
            <span className="text-red-500 pt-1">
              {errors.register_email?.message}
            </span>
          </div>

          {/* Password Input */}
          <div className="space-y-2">
            <label
              htmlFor="register_password"
              className="text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              {...register("register_password", {
                required: "password is mandatory",
              })}
              className="register_password w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
            />
            <span className="text-red-500 pt-1">
              {errors.register_password?.message}
            </span>
          </div>

          {/* Forgot Password Link */}
          <div className="flex justify-between items-center">
            <Link to="#" className="text-sm text-blue-500 hover:text-blue-700">
              Forgot password?
            </Link>
          </div>

          {/* Submit Button */}
          <div>
            <button
              id="registerBtn"
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Register
            </button>
          </div>
        </form>

        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <button
              onClick={toggleForm}
              className="registerBtn text-blue-500 hover:text-blue-700"
            >
              Login
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Auth;
