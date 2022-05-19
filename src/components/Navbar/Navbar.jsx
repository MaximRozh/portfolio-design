import React, { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import { urlFor } from "../../client";
import "./Navbar.scss";
import NavItems from "./NavItems";

const menu = ["home", "about", "work", "skills", "contact"];

const Navbar = ({ logo }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={logo && urlFor(logo)} alt="logo" />
      </div>
      <ul className="app__navbar-links">
        <NavItems menu={menu} />
      </ul>
      {/* mobile */}
      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />
        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <NavItems
              menu={menu}
              mobile={true}
              handler={() => setToggle(false)}
            />
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
