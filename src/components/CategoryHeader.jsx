import React from "react";
import { NavLink, Link } from "react-router-dom";
import LoginButton from "./LoginButton";
import { useTranslation } from "react-i18next";
import i18n from "i18next";
import { Menu, Dropdown } from "semantic-ui-react";

const CategoryHeader = () => {
  const { t } = useTranslation();

  return (
    <Menu className="category-header" widths={9}>
      <Menu.Item>
        <Link id="header" className="header item" to="/">
          {t("home-tab")}
        </Link>
      </Menu.Item>
      <Menu.Item>
        <NavLink id="culture" to="/articles/culture">
          {t("culture-tab")}
        </NavLink>
      </Menu.Item>
      <Menu.Item>
        <NavLink id="economy" to="/articles/economy">
          {t("economy-tab")}
        </NavLink>
      </Menu.Item>
      <Menu.Item>
        <NavLink id="international" to="/articles/international">
          {t("international-tab")}
        </NavLink>
      </Menu.Item>
      <Menu.Item>
        <NavLink id="lifestyle" to="/articles/lifestyle">
          {t("lifestyle-tab")}
        </NavLink>
      </Menu.Item>
      <Menu.Item>
        <NavLink id="local" to="/articles/local">
          {t("local-tab")}
        </NavLink>
      </Menu.Item>
      <Menu.Item>
        <NavLink id="sports" to="/articles/sports">
          {t("sports-tab")}
        </NavLink>
      </Menu.Item>
      <Menu.Item>
        <LoginButton id="header-login" />
      </Menu.Item>
      <Dropdown item text={t("language-tab")}>
        <Dropdown.Menu>
          <Dropdown.Item
            onClick={() => {
              i18n.changeLanguage("sv");
            }}
          >
            Svenska
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              i18n.changeLanguage("en");
            }}
          >
            English
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Menu>
  );
};
export default CategoryHeader;
