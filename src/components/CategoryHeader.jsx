import React from "react";
import { NavLink, Link } from "react-router-dom";
import LoginButton from "./LoginButton";
import { useTranslation } from "react-i18next"
import i18n from "i18next";

const CategoryHeader = () => {

  const { t } = useTranslation()

  return (
    <div className="category-header">
      <Link id="header" className="header item" to="/">
        {t('home-tab')}
      </Link>
      <NavLink id="culture" to="/articles/culture">
      {t('culture-tab')}
      </NavLink>
      <NavLink id="economy" to="/articles/economy">
      {t('economy-tab')}
      </NavLink>
      <NavLink id="international" to="/articles/international">
      {t('international-tab')}
      </NavLink>
      <NavLink id="lifestyle" to="/articles/lifestyle">
      {t('lifestyle-tab')}
      </NavLink>
      <NavLink id="local" to="/articles/local">
      {t('local-tab')}
      </NavLink>
      <NavLink id="sports" to="/articles/sports">
      {t('sports-tab')}
      </NavLink>
      <LoginButton id="header-login" />

      <select>
        <option onClick={() =>{i18n.changeLanguage('sv')}}>Svenska</option>
        <option onClick={() =>{i18n.changeLanguage('en')}}>English</option>
      </select>
    </div>
  );
};
export default CategoryHeader;