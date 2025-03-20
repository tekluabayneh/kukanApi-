import { useState, useEffect, useRef, forwardRef } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { gsap } from "gsap";

const Register = forwardRef(
  (
    {
      isLogin,
      registerMessage,
      handleSubmit,
      handleRegisterSubmit,
      register,
      errors,
      toggleForm,
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
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
    );
  }
);

export default Register;
