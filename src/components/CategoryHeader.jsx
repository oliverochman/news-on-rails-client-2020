import React from "react";
import { NavLink, Link } from "react-router-dom";
import LoginButton from "./LoginButton";

const CategoryHeader = () => {
  return (
    <div className="category-header">
      <NavLink id="header" className="header__item" to="/">
        Home
      </NavLink>
      <NavLink id="economy" className="header__item" to="/articles/economy">
        Economy
      </NavLink>
      <NavLink id="lifestyle" className="header__item" to="/articles/lifestyle">
        Lifestyle
      </NavLink>
      <NavLink id="sports" className="header__item" to="/articles/sports">
        Sports
      </NavLink>
      <NavLink id="local" className="header__item" to="/articles/local">
        Local News
      </NavLink>
      <LoginButton id="header-login" />
    </div>
  );
};
export default CategoryHeader;