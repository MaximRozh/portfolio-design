import React from "react";

const NavItems = ({ menu, mobile = false, handler }) => {
  return (
    <ul className={mobile ? "" : "app__navbar-links"}>
      {menu.map((item) => (
        <li className={mobile ? "" : "app__flex p-text"} key={`link-${item}`}>
          <a href={`#${item}`} onClick={mobile ? handler : null}>
            {item}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default NavItems;
