import { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenuUnfold } from "react-icons/ai";
import { Link } from "react-scroll";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuLinks = [
    { name: "HOME", link: "home" },
    { name: "ABOUT", link: "about" },
    { name: "SKILLS", link: "skills" },
    { name: "PROJECTS", link: "projects" },
    { name: "CONTACT", link: "contact" },
  ];

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const nav = document.querySelector("nav");
      window.scrollY > 0 ? setSticky(true) : setSticky(false);
    });
  }, []);

  return (
    <nav
      className={`fixed w-full left-0 top-0 z-[999] ${
        sticky ? "bg-white/60 text-gray-900" : "text-white"
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="mx-7">
          <Link to="home" smooth={true} duration={500}>
            <h4 className="text-4xl font-bold uppercase cursor-pointer">
              R<span className="text-sky-600 ">iya</span>d
            </h4>
          </Link>
        </div>
        <div
          className={`text-gray-900 md:block hidden px-6 py-3 font-medium ${
            sticky ? "md:bg-white/0 bg-white" : "bg-white"
          } rounded-tl-full rounded-br-full `}
        >
          <ul className="flex items-center gap-1 py-2 text-lg">
            {menuLinks?.map((menu, i) => (
              <li
                key={i}
                className={`px-6 cursor-pointer text-zinc-800 hover:text-sky-600 duration-200 font-medium`}
              >
                <Link smooth={true} duration={500} to={menu?.link}>
                  {menu?.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div
          className={`md:hidden m-1 mx-5  absolute top-0 right-0 text-white ${
            isOpen ? "" : "text-gray-100"
          } `}
          onClick={handleOpenMenu}
        >
          {isOpen ? (
            <AiOutlineClose
              size={30}
              className="absolute right-0 z-[999] text-gray-900 "
            />
          ) : (
            <AiOutlineMenuUnfold
              size={30}
              className="absolute right-0 z-[999] "
            />
          )}
        </div>
        <div
          className={`md:hidden text-gray-900 absolute w-1/2  h-screen px-7 py-2 font-medium bg-white top-0 right-0 ${
            isOpen ? "right-0" : "right-[-100%]"
          }`}
        >
          <ul className="flex flex-col h-full gap-8 py-2 text-lg">
            {menuLinks.map((menu, i) => (
              <li
                key={i}
                className={`px-6 cursor-pointer text-zinc-800 hover:text-sky-600 duration-200 font-medium`}
              >
                <Link smooth={true} duration={500} to={menu?.link}>
                  {menu?.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
