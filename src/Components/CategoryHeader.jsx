import React from 'react'
import { NavLink, Link } from "react-router-dom";

const CategoryHeader = () => {
  return (
    <div>
        <Link id="header" className="header item" to="/">Articles</Link>
          <NavLink id="economy page" to="/economy">Economy</NavLink>
          <NavLink id="lifestyle page" to="/lifestyle">Lifestyle</NavLink>
          <NavLink id="sports page" to="/sports">Sports</NavLink>
          </div>
          )
}
export default CategoryHeader;