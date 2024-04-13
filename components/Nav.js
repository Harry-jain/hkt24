// icons
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
  HiSparkles,
  HiChatBubbleBottomCenter  
} from "react-icons/hi2";

// nav data
export const navData = [
  { name: "home", path: "/", icon: <HiHome /> },
  { name: "Problem_S.", path: "/Problem_Statements", icon: <HiViewColumns /> },


  
  {
    name: "Register",
    path: "/register",
    icon: <HiEnvelope />,
  }
];

import Link from "next/link";
import { useRouter } from "next/router";

const Nav = () => {
  const router = useRouter();
  const pathname = router.pathname;

  return (
    <nav className="flex flex-col items-center xl:justify-center gap-y-4 fixed h-min bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen  xl:p-2 rounded-xl">
      <div className="flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-3 md:px-40 xl:px-0 h-[50px] xl:h-max py-8 bg-white/10 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-[13px]   ">
        {navData.map((link, index) => {
          return (
            <Link
              className={`${
                link.path === pathname && "text-accent"
              } relative flex items-center group text-white hover:text-accent transition-all duration-300 `}
              href={link.path}
              key={index}
            >
              <div className="absolute pr-14  right-0 hidden xl:group-hover:flex ">
                <div className=" bg-accent xl:p-4 relative flex text-white items-center p-[60px] rounded-[3px] ">
                  <div className="text-[12px]  leading-none items-center font-semibold capitalize ">
                    {" "}
                    &lt;/{link.name}&gt;
                  </div>

                  <div className="border-solid  border-l-accent border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2 "></div>
                </div>
              </div>

              {link.icon}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;
