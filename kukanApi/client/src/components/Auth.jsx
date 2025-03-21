import { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";

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
    // url: "https://kukandummyjson.onrender.com/user_apikey/login",
    const { login_email, login_password } = data;
    console.log(login_email, login_password);

    alert("asasa");
    reset();
  };
  
  // Handle register form submission
  const handleRegisterSubmit = (data) => {
    //  "https://kukandummyjson.onrender.com/user_apikey/register",
    const { register_email, register_password } = data;
    console.log(register_email, register_password);
    alert("asasa");
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
