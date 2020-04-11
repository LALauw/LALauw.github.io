import React from "react";
import "./Header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import avatar from "../../assets/portimglol2.png";
import { useTranslation } from "react-i18next";
import ListItem from "./ListItem";

function Header() {
  const items = [
    {
      id: "l1",
      href: "https://www.linkedin.com/in/leslielauw/",
      icon: "fab fa-linkedin-in",
    },
    { id: "l2", href: "https://github.com/LALauw", icon: "fab fa-github-alt" },
  ];

  const { t, i18n } = useTranslation();
  function handleClick(lang) {
    i18n.changeLanguage(lang);
  }

  return (
    <div className="header">
      <div className="container clearfix">
        <img
          className="profile-image img-fluid float-left"
          src={avatar}
          alt="L.A. Lauw"
        />
        <div className="profile-content">
          <h1 className="name">Leslie Andrew Lauw</h1>
          <h2 className="desc">{t("developer.1")}</h2>
          <h3 className="h3j">{t("developer.2")}</h3>
          <ListItem items={items} />
          <ul className="social list-inline padding-left: 15px;">
            <li key="b1" className="list-inline-item">
              <div onClick={() => handleClick("nl")}>
                <div className="profile-lang-button">
                  <b>NL</b>
                </div>
              </div>
            </li>
            <li key="b2" className="list-inline-item">
              <div onClick={() => handleClick("en")}>
                <div className="profile-lang-button">
                  <b>EN</b>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Header;
