import React, { Dispatch, SetStateAction } from "react";
import Link from "next/link";
import { Burger } from "../../../public/assets/icons";
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

interface Datas {
  view: boolean;
  setView: Dispatch<SetStateAction<boolean>>;
}

const SideBar: React.FC<Datas> = ({ setView, view }) => {
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
      icon: <Library className="text-xl mr-4 stroke-2" />,
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
    <section className={`side-position ${!view ? "block" : "hidden"} lg:block`}>
      <Burger
        onClick={() => setView(!view)}
        className={`w-7 h-7 sm:w-9 sm:h-9 mr-4 lg:hidden`}
      />
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
