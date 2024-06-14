import React from "react";
import LoginForm from "./loginForm";
import QuizSVG from "../../../public/assets/svg/svg";

const Login = () => {
  return (
    <div className="bg-color h-screen w-screen flex justify-center items-center">
      <div>
        <div className="flex justify-center mb-16 sm:mb-5 ">
          <QuizSVG />
        </div>
        <div>
          <LoginForm />
        </div>
        <p className="mt-5 text-xs text-center text-white">
          Having trouble? Contact us
        </p>
      </div>
    </div>
  );
};

export default Login;
