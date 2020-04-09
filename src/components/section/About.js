import React from "react";
import "./section.css";
import "../../App.css";
import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();
  return (
    <section className="about section">
      <div className="section-inner">
        <h2 className="heading">Hello World!</h2>
        <div className="content">
          <p>{t("about.text")}</p>
        </div>
        <ul className="social list-inline padding-left: 15px;">
          <li key="b1" className="list-inline-item">
            <p>{t("about.taal")}</p>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default About;
