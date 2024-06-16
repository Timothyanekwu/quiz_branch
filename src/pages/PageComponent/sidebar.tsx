import React from "react";
import Link from "next/link";
import {
  Dashboard,
  User,
  Library,
  Quizzes,
  Grades,
  Svg,
  Logout,
  Settings,
} from "../../../public/assets/icons";

const SideBar = () => {
  const navList = [
    {
      icon: <Dashboard className="text-xl mr-4" />,
      value: "Dashboard",
      path: "/admin/dashboard",
    },
    {
      icon: <User className="text-xl mr-4 hover:text-purple-700" />,
      value: "Users",
      path: "/admin/users",
    },
    {
      icon: <Library className="text-xl mr-4" />,
      value: "Library",
      path: "/admin/library",
    },
    {
      icon: <Quizzes className="text-xl mr-4" />,
      value: "Quizzes",
      path: "/admin/quiz",
    },
    {
      icon: <Grades className="text-xl mr-4" />,
      value: "Grades",
      path: "/admin/grade",
    },
  ];

  const subNav = [
    { icon: <Settings className="text-xl mr-4" />, value: "Settings" },
    { icon: <Logout className="text-xl mr-4" />, value: "Logout" },
  ];
  return (
    <section className="h-screen w-[19.7vw] fixed left-0 top-0 pl-10">
      <div className="mt-5 w-fit h-max">
        <Svg className="h-32 w-32 fill-[#9D75F7]" />
      </div>
      <div className="mt-3">
        {navList.map((link) => {
          return (
            <Link href={link.path} key={Math.random()}>
              <div className="flex items-center h-10 text-base hover:text-[#9D75F7]">
                {link.icon}

                <div>{link.value}</div>
              </div>
            </Link>
          );
        })}
      </div>
      <div className="mt-10">
        {subNav.map((link) => {
          return (
            <div className="flex items-center h-10 text-base hover:text-[#9D75F7]">
              {link.icon}

              <div>{link.value}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SideBar;
