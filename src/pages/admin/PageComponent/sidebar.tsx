import React from "react";
import QuizSVG from "../../../../public/assets/svg/svg";
import Dashboard from "../../../../public/assets/svg/dashboard";
import Grade from "../../../../public/assets/svg/grades";
import Library from "../../../../public/assets/svg/library";
import Quizzes from "../../../../public/assets/svg/quizzes";
import User from "../../../../public/assets/svg/user";
import Setting from "../../../../public/assets/svg/settings";
import Logout from "../../../../public/assets/svg/logout";
import Link from "next/link";

const SideBar = () => {
  const navList = [
    {
      icon: <Dashboard fillColor="black" />,
      value: "Dashboard",
      path: "/admin/dashboard",
    },
    { icon: <User fillColor="black" />, value: "Users", path: "/admin/users" },
    {
      icon: <Library fillColor="black" />,
      value: "Library",
      path: "/admin/library",
    },
    {
      icon: <Quizzes fillColor="black" />,
      value: "Quizzes",
      path: "/admin/quiz",
    },
    {
      icon: <Grade fillColor="black" />,
      value: "Grades",
      path: "/admin/grade",
    },
  ];

  const subNav = [
    { icon: <Setting fillColor="black" />, value: "Settings" },
    { icon: <Logout fillColor="black" />, value: "Logout" },
  ];
  return (
    <section className="h-screen w-[19.7vw] fixed left-0 top-0 pl-10">
      <div className="pt-10">
        <QuizSVG fillColor="#9D75F7" />
      </div>
      <div className="mt-10">
        {navList.map((link) => {
          return (
            <Link href={link.path}>
              <div className="flex items-center h-10">
                <div className="mr-5"> {link.icon}</div>
                <div>{link.value}</div>
              </div>
            </Link>
          );
        })}
      </div>
      <div className="mt-10">
        {subNav.map((link) => {
          return (
            <div className="flex items-center h-10">
              <div className="mr-5"> {link.icon}</div>
              <div>{link.value}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SideBar;
