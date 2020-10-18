import React from "react";
import "./section.css";
import "../../App.css";
import NL from "../../assets/CV_Leslie_Lauw_NL.pdf";
import English from "../../assets/CV_Leslie_Lauw_EN.pdf";
import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();
  return (
    <section className="about section">
      <div className="section-inner overflow-hidden">
        <h2 className="heading">Hello World!</h2>
        <div className="content">
          <p>{t("about.text1")}</p>
          <p>{t("about.text2")}</p>
        </div>
        <div className="rowoverrideabout">
          <div className="coloverride">
            <a
              className="btn btn-secondary btn-sm gitrepomargin"
              href={NL}
              target="__blank"
              rel="noopener"
            >
              <i className="fas fa-file-alt"></i> {t("about.taal2")}
            </a>
          </div>
          <div className="coloverride">
            <a
              className="btn btn-secondary btn-sm gitrepomargin"
              href={English}
              target="__blank"
              rel="noopener"
            >
              <i className="fas fa-file-alt"></i> {t("about.taal1")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
