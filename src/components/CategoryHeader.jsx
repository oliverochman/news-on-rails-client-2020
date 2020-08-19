import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoginButton from "./LoginButton";
import { useTranslation } from "react-i18next";
import i18n from "i18next";
import { Menu, Dropdown } from "semantic-ui-react";

const CategoryHeader = () => {
  const { t } = useTranslation();
  const [activeItem, setActiveItem] = useState("home");
  const handleTabClick = (e, { name }) => {
    setActiveItem(name);
  };

  return (
    <Menu className="category-header" widths={9}>
      <Menu.Item
        name="home"
        active={activeItem === "home"}
        onClick={handleTabClick}
        as={Link}
        to={{ pathname: "/" }}
      >
        {t("home-tab")}
      </Menu.Item>
      <Menu.Item
        name="culture"
        active={activeItem === "culture"}
        onClick={handleTabClick}
        as={Link}
        to={{ pathname: "/articles/culture" }}
      >
        {t("culture-tab")}
      </Menu.Item>
      <Menu.Item
        name="economy"
        active={activeItem === "economy"}
        onClick={handleTabClick}
        as={Link}
        to={{ pathname: "/articles/economy" }}
      >
        {t("economy-tab")}
      </Menu.Item>
      <Menu.Item
        name="international"
        active={activeItem === "international"}
        onClick={handleTabClick}
        as={Link}
        to={{ pathname: "/articles/international" }}
      >
        {t("international-tab")}
      </Menu.Item>
      <Menu.Item
        name="lifestyle"
        active={activeItem === "lifestyle"}
        onClick={handleTabClick}
        as={Link}
        to={{ pathname: "/articles/lifestyle" }}
      >
        {t("lifestyle-tab")}
      </Menu.Item>
      <Menu.Item
        name="local"
        active={activeItem === "local"}
        onClick={handleTabClick}
        as={Link}
        to={{ pathname: "/articles/local" }}
      >
        {t("local-tab")}
      </Menu.Item>
      <Menu.Item
        name="sports"
        active={activeItem === "sports"}
        onClick={handleTabClick}
        as={Link}
        to={{ pathname: "/articles/sports" }}
      >
        {t("sports-tab")}
      </Menu.Item>
      <Menu.Item>
        <LoginButton id="header-login" />
      </Menu.Item>
      <Dropdown id="change-language" item text={t("language-tab")}>
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
