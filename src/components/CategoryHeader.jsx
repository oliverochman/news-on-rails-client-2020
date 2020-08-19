import React from "react";
import { NavLink, Link } from "react-router-dom";
import LoginButton from "./LoginButton";

const CategoryHeader = () => {
  return (
    <div className="category-header">
      <Link id="header" className="header item" to="/">
        Home
      </Link>
      <NavLink id="economy" to="/articles/economy">
        Economy
      </NavLink>
      <NavLink id="lifestyle" to="/articles/lifestyle">
        Lifestyle
      </NavLink>
      <NavLink id="sports" to="/articles/sports">
        Sports
      </NavLink>
      <LoginButton id="header-login" />
    </div>
  );
};
export default CategoryHeader;