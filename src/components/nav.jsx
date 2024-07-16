import { CgNametag } from "react-icons/cg";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { useState } from "react";

const Nav = () => {
  const [toggle, setToggle] = useState(false);

  const openMenu = () => {
    setToggle(true);
  };

  const closeMenu = () => {
    setToggle(false);
  };

  return (
    <>
      <div className="flex items-center justify-between p-10 lg:flex-row">
        <div>
          <a
            href="#"
            className="text-white font-mono text-3xl tracking-wider flex items-center"
          >
            <CgNametag />
            Oclaz
          </a>
        </div>
        <div className="hidden lg:flex space-x-4">
          <a
            href="#"
            className="text-white hover:bg-indigo-800 rounded-full px-5 py-2 text-xl"
          >
            Skills
          </a>
          <a
            href="#"
            className="text-white hover:bg-indigo-800 rounded-full px-5 py-2 text-xl"
          >
            Projects
          </a>
          <a
            href="#"
            className="text-white hover:bg-indigo-800 rounded-full px-5 py-2 text-xl"
          >
            Testimonials
          </a>
        </div>
        <div className="lg:hidden">
          {toggle ? (
            <AiOutlineClose
              onClick={closeMenu}
              size={30}
              className="text-white cursor-pointer"
            />
          ) : (
            <HiOutlineMenuAlt1
              onClick={openMenu}
              size={30}
              className="text-white cursor-pointer"
            />
          )}
        </div>
      </div>
      {toggle && (
        <div className="lg:hidden p-10">
          <ul className="space-y-4">
            <li className="text-white text-xl cursor-pointer">Skills</li>
            <li className="text-white text-xl cursor-pointer">Projects</li>
            <li className="text-white text-xl cursor-pointer">Testimonials</li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Nav;
