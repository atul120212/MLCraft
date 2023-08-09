import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import { BiMenuAltRight } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";

import logo from "../assets/logo.png";

import "../styles/navbar.scss";
import "../styles/register.scss";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);

  return (
    <nav className="flex justify-center">
      <div
        className={`w-full fixed top-0 left-0 z-50 bg-transparent flex justify-between items-center py-1 ${
          colorChange || showMenu ? "navScroll" : null
        }`}
        id="navbar">
        <div
          className="flex items-center cursor-pointer bg-transparent "
          data-aos="zoom-in"
          data-aos-delay="200"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out"
        >
          <HashLink className="bg-transparent" to={"/#header"}>
            <img className="w-[150px]  bg-transparent" src={logo} alt="Fs" />
          </HashLink>
        </div>
        <div
          onClick={() => setShowMenu(!showMenu)}
          className="text-4xl absolute right-8 top-4 cursor-pointer bg-transparent lg:hidden text-black m-5"
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          {showMenu ? (
            <RxCross2 className="bg-transparent w-16 h-16 " />
          ) : (
            <BiMenuAltRight className="bg-transparent w-16 h-16" />
          )}
        </div>
        <ul
          className="hidden lg:flex justify-center items-center gap-10 bg-transparent mr-10"
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <li className="text-xl bg-transparent">
            <HashLink className="text-black bg-transparent" to={"/#About-us"}>
              Team
            </HashLink>
          </li>
          <li className="text-xl bg-transparent">
            <HashLink className="text-black bg-transparent" to={"/#event"}>
              Events
            </HashLink>
          </li>
          <li className="text-xl bg-transparent">
            <HashLink className="text-black bg-transparent" to={"/#aboutGDG"}>
              About us
            </HashLink>
          </li>
          <li className="text-xl bg-transparent">
            <HashLink className="text-black bg-transparent" to={"/#FAQ"}>
              FAQs
            </HashLink>
          </li>
          <a className="bg-transparent" href="https://gdg.community.dev/gdg-cloud-noida/" >
            <button
              id="btn"
              data-aos="zoom-in"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
            >
              <span className="bg-transparent">Contact Us</span>
              <i></i>
            </button>
          </a>
        </ul>
      </div>
      <div className="fixed top-28 z-40 w-full">
        <div className="sticky lg:hidden bottom-0 ">
          <ul
            className={`flex flex-col absolute rounded-bl-[70px] ${
              showMenu ? "right-[-10%]" : "right-[-200%]"
            } transition-all duration-1000 ease-in-out w-[400px] px-10 pb-20 bg-transparent gap-10`}
            id="navbarTab"
          >
            <li className="text-xl mt-4 bg-transparent">
              <HashLink
                className="text-white bg-transparent"
                to={"/#About-us"}
                onClick={() => setShowMenu(!showMenu)}
              >
                Team
              </HashLink>
            </li>
            <li className="text-xl bg-transparent">
              <HashLink
                className="text-white bg-transparent"
                to={"/#event"}
                onClick={() => setShowMenu(!showMenu)}
              >
                Events
              </HashLink>
            </li>
            <li className="text-xl bg-transparent">
              <HashLink
                className="text-white bg-transparent"
                to={"/#aboutGDG"}
                onClick={() => setShowMenu(!showMenu)}
              >
                About us
              </HashLink>
            </li>
            <li className="text-xl bg-transparent">
              <HashLink
                className="text-white bg-transparent"
                to={"/#FAQ"}
                onClick={() => setShowMenu(!showMenu)}
              >
                FAQs
              </HashLink>
            </li>
            <a className="bg-transparent" href="https://gdg.community.dev/gdg-cloud-noida/" >
              <button
                id="btn"
                data-aos="zoom-in"
                data-aos-duration="500"
                data-aos-easing="ease-in-out"
              >
                <span className="bg-transparent">Contact Us</span>
                <i></i>
              </button>
            </a>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
