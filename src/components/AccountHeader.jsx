import React from "react";
import { Menu, Dropdown } from "semantic-ui-react";
import i18n from "i18next";
import LoginButton from "./LoginButton";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const AccountHeader = () => {
  const { t } = useTranslation();
  return (
    <Menu secondary vertical floated="right">
      <Menu.Item>
        <LoginButton id="header-login" />
      </Menu.Item>
      <Menu.Item
        name="subscription"
        as={Link}
        to={{ pathname: "/subscription" }}
      >
        Become Subscriber
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

export default AccountHeader;
