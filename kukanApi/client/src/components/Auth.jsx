import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import Register from "../pages/Auth/Register";
import { useForm } from "react-hook-form";
import Login from "../pages/Auth/Login";
import { gsap } from "gsap";
import axios from "axios";
const Auth = () => {
  const {
    register: loginRegister,
    handleSubmit: handleLoginSubmit,
    formState: { errors: loginErrors },
    reset: resetLogin,
  } = useForm({});

  // Register form instance
  const {
    register: registerRegister,
    handleSubmit: handleRegisterSubmit,
    formState: { errors: registerErrors },
    reset: resetRegister,
  } = useForm({});

  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [loginMessage, setLoginMessage] = useState("");
  const [registerMessage, setRegisterMessage] = useState("");
  const loginRef = useRef(null);
  const registerRef = useRef(null);
  const buttonRef = useRef(null);

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

  ///////////////////////////////////////////////////////////////

  const LoginMutate = useMutation({
    mutationFn: (userInfo) =>
      axios.post(
        "https://kukandummyjson.onrender.com/user_apikey/login",
        userInfo
      ),

    onSuccess: (data) => {
      console.log("User logged in:", data.data);
      window.localStorage.setItem("user_apikey", data.data.apiKey);
      setAuthMessage(data.data.message || "Login successful");
      navigate("/Api");
    },

    onError: (error) => {
      console.error("Login failed:", error.response?.data || error.message);
      setAuthMessage(error.response?.data?.message || "Login failed"); // UI feedback
    },
    onSettled: () => {
      console.log("Login attempt completed"); // Consistent message
    },
  });

  ///////////////////////////////////////////////////////////////////////

  // Handle login form submission
  const onLoginSubmit = (data) => {
    const userloginInfo = {
      email: data.login_email,
      password: data.login_password,
    };
    console.log(userloginInfo);
    LoginMutate.mutate(userloginInfo);
    resetLogin();
  };

  /////////////////////////////////////////////////////////////////////

  const RegisterMutate = useMutation({
    mutationFn: (userInfo) =>
      axios.post(
        "https://kukandummyjson.onrender.com/user_apikey/register",
        userInfo
      ),
    onSuccess: (data) => {
      console.log("User registered:", data.data);
      window.localStorage.setItem("user_apikey", data.data.apiKey);
      setLoginMessage(data.data.message);
      navigate("/Api");
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

  //////////////////////////////////////////////////

  // Handle register form submission
  const onRegisterSubmit = (data) => {
    const userInfo = {
      email: data.register_email,
      password: data.register_password,
    };
    RegisterMutate.mutate(userInfo);
    resetRegister();
  };
  //////////////////////////////////////////////////////////

  // Toggle between login and register
  const toggleForm = () => {
    setIsLogin(!isLogin);
    setLoginMessage("");
    setRegisterMessage("");
  };

  /////////////////////////////////////////////////////////////////
  useEffect(() => {
    if (LoginMutate.isLoading) {
      gsap.to(buttonRef.current, {
        scale: 1.1, // Slightly scale up
        duration: 0.5,
        repeat: -1, // Infinite repeat
        yoyo: true, // Reverse back to original scale
        ease: "power1.inOut", // Smooth easing
      });
    } else {
      gsap.to(buttonRef.current, {
        scale: 1, // Reset to normal
        duration: 0.3,
      });
    }
  }, [LoginMutate.isLoading]);

  return (
    <div className="bg-gradient-to-r from-blue-500 to-teal-500 h-screen flex gap-5 items-center justify-center relative">
      {/* Login Form */}
      <Login
        isLoading={LoginMutate.isLoading}
        handleLoginSubmit={onLoginSubmit}
        handleSubmit={handleLoginSubmit}
        loginMessage={loginMessage}
        register={loginRegister}
        toggleForm={toggleForm}
        buttonRef={buttonRef}
        errors={loginErrors}
        isLogin={isLogin}
        ref={loginRef}
      />

      {/* Register Form */}

      <Register
        handleRegisterSubmit={onRegisterSubmit}
        isLoading={RegisterMutate.isLoading}
        handleSubmit={handleRegisterSubmit}
        registerMessage={registerMessage}
        register={registerRegister}
        toggleForm={toggleForm}
        errors={registerErrors}
        buttonRef={buttonRef}
        ref={registerRef}
        isLogin={isLogin}
      />
    </div>
  );
};

export default Auth;
