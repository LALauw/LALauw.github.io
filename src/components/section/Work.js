import React from "react";
import { useTranslation } from "react-i18next";

export default function Work() {
  const { t } = useTranslation();
  return (
    <section className="experience section">
      <div className="section-inner">
        <h2 className="heading">{t("werk.titel")}</h2>
        <div className="content">
          <div className="item">
            <div className="item">
              <h3 className="overrideh4">
                {t("werk.functie")}
                <h4 className="companyname">
                  <a
                    href="https://www.beren.nl/welkom/"
                    target="__blank"
                    rel="noopener"
                  >
                    De Beren
                  </a>
                </h4>
                <p>2016 - {t("werk.heden")}</p>
              </h3>
            </div>
            <h3 className="overrideh4">
              {t("werk.functie2")}
              <h4 className="companyname">
                <a
                  href="https://www.beren.nl/welkom/"
                  target="__blank"
                  rel="noopener"
                >
                  De Beren
                </a>
              </h4>
              <p>2012 - {t("werk.heden")}</p>
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
