import React from "react";
import "../section/section.css";
import "../../App.css";
import ivanontech from "../../assets/ivantech.jpg";
import certBitcoin101 from "../../assets/Cert_Blockchain&Bitcoin101_LeslieLauw.pdf";
import certEthereum101 from "../../assets/Cert_Ethereum101_LeslieLauw.pdf";
import certBitcoinStandard from "../../assets/Cert_Bitcoin_Standard_LeslieLauw.pdf";
import certDefi101 from "../../assets/Cert_Defi101_LeslieLauw.pdf";
import certSM101 from "../../assets/Cert_Smart_Contracts_101_LeslieLauw.pdf";

import { useTranslation } from "react-i18next";

export default function Education() {
  const { t } = useTranslation();
  const certs = [
    {
      name: "Smart Contracts 101 - Solidity",
      file: certSM101,
      date: "01-11-2020"
    },
    {
      name: "Defi 101",
      file: certDefi101,
      date: "25-10-2020"
    },
    {
    name: "The Bitcoin Standard",
    file: certBitcoinStandard,
    date: "22-10-2020"
  },
  {
    name: "Ethereum 101",
    file: certEthereum101,
    date: "13-10-2020"
  },
  {
    name: "Blockchain & Bitcoin 101",
    file: certBitcoin101,
    date: "11-10-2020"
  },

]

const items = []

for(const [index, value] of certs.entries()){
  items.push(<div className="item" key={index}>
    <h3 className="overrideh4">
      <img src={ivanontech} className="imagevoorcert" alt="Academy-logo">
      </img>
      {" "}
      {value.name}
    </h3>
    <h4 className="university">
      <p>
        <a href={value.file} target="__blank" rel="noopener">
          Certificate
        </a>{" "}
        - {value.date}
      </p>
    </h4>
  </div>)
}


  return (
    <aside className="education aside section">
      <div className="section-inner">
        <h2 className="heading">{t("certificaten.titel")}</h2>
        <div className="content">
      
        <div>
          {items}
        </div>
      
        </div>
      </div>
    </aside>
  );
}
