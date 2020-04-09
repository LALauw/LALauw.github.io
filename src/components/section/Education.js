import React from "react";
import "../section/section.css";
import "../../App.css";
import { useTranslation } from "react-i18next";

export default function Education() {
  const { t } = useTranslation();
  return (
    <aside className="education aside section">
      <div className="section-inner">
        <h2 className="heading">{t("scholing.titel")}</h2>
        <div className="content">
          <div className="item">
            <h3 className="overrideh4">
              <i className="fas fa-graduation-cap"></i>{" "}
              {t("scholing.p-diploma")}
            </h3>
            <h4 className="university">
              <p>
                {" "}
                ICT -{" "}
                <a
                  href="https://www.dehaagsehogeschool.nl/"
                  target="__blank"
                  rel="noopener"
                >
                  {t("scholing.p-school")}
                </a>{" "}
                2019
              </p>
            </h4>
          </div>
          <br />
          <div className="item">
            <h3 className="overrideh4">
              <i className="fas fa-graduation-cap"></i> {t("scholing.m-school")}
            </h3>
            <h4 className="university">
              <p>
                {t("scholing.m-school-type")} -{" "}
                <a
                  href="https://www.develsteincollege.nl/"
                  target="__blank"
                  rel="noopener"
                >
                  Develsteincollege
                </a>{" "}
                2016
              </p>
            </h4>
          </div>
        </div>
      </div>
    </aside>
  );
}
