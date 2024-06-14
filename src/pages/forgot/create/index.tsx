import React from "react";
import CreateForm from "./createForm";
import QuizSVG from "../../../../public/assets/svg/svg";

const Login = () => {
  return (
    <div className="bg-color h-screen w-screen flex justify-center items-center">
      <div>
        <div className="flex justify-center mb-16 sm:mb-5 ">
          <QuizSVG />
        </div>
        <div>
          <CreateForm />
        </div>
        <p className="mt-5 text-xs text-center md:text-white text-[#9D75F7] ">
          Having trouble? Contact us
        </p>
      </div>
    </div>
  );
};

export default Login;
