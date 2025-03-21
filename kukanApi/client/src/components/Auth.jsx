import { Mutation, useMutation, useQuery } from "@tanstack/react-query";
import { useState, useEffect, useRef } from "react";
import Register from "../pages/Auth/Register";
import { useForm } from "react-hook-form";
import Login from "../pages/Auth/Login";
import { gsap } from "gsap";
import axios from "axios";

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

  const LoginMutate = useMutation({
    mutationFn: (userInfo) => {
      axios
        .get("https://kukandummyjson.onrender.com/user_apikey/login", userInfo)
        .then((res) => res.data);
    },
    onSuccess: () => {
      console.log("user successfully loged in");
    },

    onError: (error) => {
      console.log("error while login the use", error);
    },
    onSettled: () => {
      console.log("user loged in successfully");
    },
  });

  // Handle login form submission
  const handleLoginSubmit = (data) => {
    const { login_email = email, login_password = password } = data;
    console.log(login_email, login_password);
    LoginMutate.mutate(data);
    alert("asasa");
    reset();
  };

  const mutation = useMutation({
    mutationFn: (userInfo) => {
      axios
        .post(
          "https://kukandummyjson.onrender.com/user_apikey/register",
          userInfo
        )
        .then((res) => res.data);
    },
    onSuccess: (data) => {
      console.log("User registered:", data);
    },
    onError: (error) => {
      console.error(
        "Registration failed:",
        error.response?.data || error.message
      );
    },
    onSettled: () => {
      console.log("Registration attempt completed");
    },
  });
  // Handle register form submission
  const handleRegisterSubmit = (data) => {
    const { register_email = email, register_password = password } = data;
    mutation.mutate(data);
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
      <Login
        ref={loginRef}
        isLogin={isLogin}
        toggleForm={toggleForm}
        loginMessage={loginMessage}
        handleSubmit={handleSubmit}
        handleLoginSubmit={handleLoginSubmit}
        register={register}
        errors={errors}
      />

      {/* Register Form */}

      <Register
        ref={registerRef}
        isLogin={isLogin}
        toggleForm={toggleForm}
        registerMessage={registerMessage}
        handleSubmit={handleSubmit}
        handleRegisterSubmit={handleRegisterSubmit}
        register={register}
        errors={errors}
      />
    </div>
  );
};

export default Auth;
