// Login.jsx
import React from "react";
import { forwardRef } from "react";
import { Link } from "react-router-dom"; // Assuming you're using react-router

const Login = forwardRef(
  (
    {
      isLogin,
      loginMessage,
      handleLoginSubmit,
      handleSubmit,
      register,
      errors,
      toggleForm,
      isLoading,
      buttonRef,
    },
    ref
  ) => {
    return (
      <div
        ref={ref} // Attach the ref here for GSAP
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

            {/* Submit Button */}
            <div>
              <button
                id="loginBtn"
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {isLoading ? "Loading..." : "login"}
              </button>
            </div>
          </div>

          {/* Forgot Password Link */}
          <div className="flex justify-between items-center">
            <Link to="#" className="text-sm text-blue-500 hover:text-blue-700">
              Forgot password?
            </Link>
          </div>
        </form>
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <button
              ref={buttonRef}
              onClick={toggleForm}
              className="loginBtn text-blue-500 hover:text-blue-700"
            >
              Sign up
            </button>
          </p>
        </div>
      </div>
    );
  }
);

export default Login;
