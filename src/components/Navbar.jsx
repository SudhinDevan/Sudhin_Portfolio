import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const downloadCV = () => {
  const fileUrl =
    "https://res.cloudinary.com/dtbohkfpy/image/upload/v1708575483/Sudhin_Devan_Resume_o8t985.pdf";

  const link = document.createElement("a");
  link.href = fileUrl;
  link.target = "_blank"; // Open the link in a new tab
  link.rel = "noopener noreferrer"; // Security best practice when opening links in a new tab
  link.click();
};

const Navbar = () => {
  // state for active link
  const [active, setActive] = useState("");
  // state to toggle the small box in mobile devices
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex ">
            Sudhin Devan &nbsp;
            <span className="sm:block hidden">
              {" "}
              | Software Development Engineer
            </span>
          </p>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
          <li>
            <a
              className="text-secondary text-[18px] font-medium cursor-pointer hover:text-white"
              onClick={downloadCV}
            >
              Download CV
            </a>
          </li>
          <li>
            <a
              className="text-secondary text-[18px] font-medium cursor-pointer hover:text-white"
              href="https://github.com/SudhinDevan"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
              <li>
                <a
                  className="text-secondary text-[16px] font-medium cursor-pointer hover:text-white"
                  onClick={downloadCV}
                >
                  Download CV
                </a>
              </li>
              <li>
                <a
                  className="text-secondary text-[16px] font-medium cursor-pointer hover:text-white"
                  href="https://github.com/SudhinDevan"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
