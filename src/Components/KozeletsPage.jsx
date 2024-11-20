import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./KozeletsPage.css";
import logo from "../img/logo.svg";
import build from "../img/build.jpg";

function KozeletsPage() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="kozelets-container">
      <div className="header">
        <img src={logo} alt="Logo" className="logo" />
        <nav>
          <ul className="nav-links">
            <li>
              <Link to="#home">{t("home")}</Link>
            </li>
            <li>
              <Link to="#about">{t("about")}</Link>
            </li>
            <li>
              <Link to="#services">{t("services")}</Link>
            </li>
            <li>
              <Link to="#contact">{t("contact")}</Link>
            </li>
          </ul>
        </nav>
        <div>
          <button onClick={() => changeLanguage("uk")}>Українська</button>
          <button onClick={() => changeLanguage("en")}>English</button>
        </div>
      </div>
      <h1>{t("title")}</h1>
      <div className="header-details">
        <p>{t("location")}</p>
        <p>{t("gps")}</p>
      </div>
      <img src={build} alt="Historic House in Kozelets" />

      <div className="description">
        <p>{t("description")}</p>
      </div>

      <div className="article">
        <h2>{t("aboutBuilding")}</h2>
        <p>{t("article")}</p>
      </div>
    </div>
  );
}

export default KozeletsPage;
