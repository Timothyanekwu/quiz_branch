import React from "react";
import LoginForm from "./loginForm";
import { Svg } from "../../../public/assets/icons";

const Login = () => {
  return (
    <div className="bg-color h-screen w-screen flex justify-center items-center">
      <div>
        <div className="flex justify-center mb-16 sm:mb-5 ">
          <Svg className="text-9xl fill-[#9D75F7] sm:fill-white " />
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
