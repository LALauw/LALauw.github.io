import React from "react";
import "../section/section.css";
import "../../App.css";
import ivanontech from "../../assets/ivantech.jpg";
import certBitcoin101 from "../../assets/Cert_Blockchain&Bitcoin101_LeslieLauw.pdf";
import certEthereum101 from "../../assets/Cert_Ethereum101_LeslieLauw.pdf";

import { useTranslation } from "react-i18next";

export default function Education() {
  const { t } = useTranslation();
  return (
    <aside className="education aside section">
      <div className="section-inner">
        <h2 className="heading">{t("certificaten.titel")}</h2>
        <div className="content">
          <div className="item">
            <h3 className="overrideh4">
              <img
                src={ivanontech}
                className="imagevoorcert"
                alt="Blockchain-logo"
              ></img>{" "}
              Blockchain & Bitcoin 101
            </h3>
            <h4 className="university">
              <p>
                <a href={certBitcoin101} target="__blank" rel="noopener">
                  Ivan on Tech Blockchain Academy
                </a>{" "}
                - {t("certificaten.date")} 2020
              </p>
            </h4>
          </div>
          <br />
          <div className="item">
            <h3 className="overrideh4">
              <img
                src={ivanontech}
                className="imagevoorcert"
                alt="Blockchain-logo"
              ></img>{" "}
              Ethereum 101
            </h3>
            <h4 className="university">
              <p>
                <a href={certEthereum101} target="__blank" rel="noopener">
                  Ivan on Tech Blockchain Academy
                </a>{" "}
                - {t("certificaten.date")} 2020
              </p>
            </h4>
          </div>
          <br />
        </div>
      </div>
    </aside>
  );
}
