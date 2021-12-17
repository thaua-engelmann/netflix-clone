import React, { useState } from "react";
import "./header.scss";

import netflix_logo from "../../assets/netflix_logo.svg";
import user_image from "../../assets/netflix_user.jpg";

const Header = () => {
  const [blackHeader, setBlackHeader] = useState(false);

  const scrollListener = () => {
    if (window.scrollY > 20) {
      setBlackHeader(true);
    } else {
      setBlackHeader(false);
    }
  };

  window.addEventListener("scroll", scrollListener);

  return (
    <div className={blackHeader ? "header blackHeader" : "header"}>
      <div className="header-content">
        <div className="header-content-left">
          <div className="header-content-left-logo">
            <a href="/">
              <img src={netflix_logo} alt="Netflix Logo" />
            </a>
          </div>
          <ul className="header-content-left-menu">
            <li>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>Recently Added</li>
            <li>My List</li>
            <li></li>
          </ul>
        </div>
        <div className="header-content-user">
          <a href="/">
            <img src={user_image} alt="User profile" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
