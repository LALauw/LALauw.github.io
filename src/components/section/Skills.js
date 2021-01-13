import React from "react";
import "./section.css";
import "../../App.css";
import dotnetcore from "../../assets/dotnetcore.png";
import dotnetframework from "../../assets/dotnetframework.png";
import javalogo from "../../assets/java-logo.png";
import csharplogo from "../../assets/c-sharplogo.png";
import mysqllogo from "../../assets/mysql.png";
import html5logo from "../../assets/html5logo.png";
import csslogo from "../../assets/csslogo.png";
import jslogo from "../../assets/jslogo.jpg";
import pythonlogo from "../../assets/pythonlogo.png";
import mssql from "../../assets/mssql.png";
import reactjs from "../../assets/reactjs4.png";
import nodejs from "../../assets/nodejs.png";
import umllogo from "../../assets/umllogo2.png";
import scrumlogo from "../../assets/scrumlogo2.png";
import requirementslogo from "../../assets/requirementsfile.svg";
import blockchainlogo from "../../assets/blockchain.png";
import typescriptlogo from "../../assets/typescript.png";
import angularlogo from "../../assets/angular.png";
import soliditylogo from "../../assets/Solidity.svg";

import { useTranslation } from "react-i18next";

export default function Skills() {
  const { t } = useTranslation();
  return (
    <aside className="skills aside section ">
      <div className="section-inner">
        <h3 className="heading">Front-End Skills</h3>
        <div className="rowoverride">
          <div className="coloverride">
            <img
              src={angularlogo}
              className="imagevoorcol"
              alt="Angular-logo"
            ></img>
            <h4 className="overrideh4metmargin">Angular</h4>
          </div>
          <div className="coloverride alignitems">
            <img
              src={typescriptlogo}
              className="imagevoorcol"
              alt="Typescript-Logo"
            ></img>
            <h4 className="overrideh4metmargin">Typescript</h4>
          </div>
          <div className="coloverride">
            <img
              src={html5logo}
              className="imagevoorcol"
              alt="HTML5-Logo"
            ></img>
            <h4 className="overrideh4metmargin">HTML5</h4>
          </div>
          <div className="coloverride alignitems">
            <img src={csslogo} className="imagevoorcol" alt="CSS-Logo"></img>
            <h4 className="overrideh4metmargin">CSS</h4>
          </div>
          <div className="coloverride alignitems">
            <img src={jslogo} className="imagevoorcol" alt="JS-Logo"></img>
            <h4 className="overrideh4metmargin">JavaScript</h4>
          </div>
          <div className="coloverride alignitems">
            <img
              src={reactjs}
              className="imagevoorcol"
              alt="ReactJS-Logo"
            ></img>
            <h4 className="overrideh4metmargin">ReactJS</h4>
          </div>
        </div>
        <h3 className="heading">Back-End Skills</h3>
        <div className="rowoverride">
          <div className="coloverride alignitems">
            <img src={javalogo} className="imagevoorcol" alt="Java-Logo"></img>
            <h4 className="overrideh4metmargin">Java</h4>
          </div>

          <div className="coloverride alignitems">
            <img src={csharplogo} className="imagevoorcol" alt="C#-Logo"></img>
            <h4 className="overrideh4metmargin">C#</h4>
          </div>

          <div className="coloverride alignitems">
            <img
              src={mysqllogo}
              className="imagevoorcol"
              alt="MySQL-Logo"
            ></img>
            <h4 className="overrideh4metmargin">MySQL</h4>
          </div>

          <div className="coloverride alignitems">
            <img
              src={mssql}
              className="imagevoorcol"
              alt="SQLServer-Logo"
            ></img>
            <h4 className="overrideh4metmargin">SQL Server</h4>
          </div>
          <div className="coloverride alignitems">
            <img
              src={pythonlogo}
              className="imagevoorcol"
              alt="Python-Logo"
            ></img>
            <h4 className="overrideh4metmargin">Python</h4>
          </div>
          <div className="coloverride alignitems">
            <img
              src={dotnetcore}
              className="imagevoorcol"
              alt=".NETCORE-Logo"
            ></img>
            <h4 className="overrideh4metmargin">.NET Core</h4>
          </div>
          <div className="coloverride alignitems">
            <img
              src={dotnetframework}
              className="imagevoorcol"
              alt="ASP.NET-Logo"
            ></img>
            <h4 className="overrideh4metmargin">ASP.NET</h4>
          </div>
          <div className="coloverride alignitems">
            <img src={nodejs} className="imagevoorcol" alt="NodeJS-Logo"></img>
            <h4 className="overrideh4metmargin">NodeJS</h4>
          </div>
        </div>
        <h3 className="heading">{t("skills.andere")} Skills</h3>
        <div className="rowoverride">
          <div className="coloverride alignitems">
            <img src={umllogo} className="imagevoorcol" alt="UML-Logo"></img>
            <h4 className="overrideh4metmargin">UML</h4>
          </div>
          <div className="coloverride alignitems">
            <img
              src={scrumlogo}
              className="imagevoorcol"
              alt="SCRUM-Logo"
            ></img>
            <h4 className="overrideh4metmargin">Scrum</h4>
          </div>
          <div className="coloverride alignitems">
            <img
              src={requirementslogo}
              className="imagevoorcol"
              alt="File-Logo"
            ></img>
            <h4 className="overrideh4metmargin">Requirements Engineering</h4>
          </div>
        </div>
        <h3 className="heading">Blockchain Skills</h3>
        <div className="rowoverride">
          <div className="coloverride alignitems">
            <img
              src={soliditylogo}
              className="imagevoorcol"
              alt="Blockchain-logo"
            ></img>
            <h4 className="overrideh4metmargin">Solidity</h4>
          </div>
          <div className="coloverride alignitems">
            <img
              src={blockchainlogo}
              className="imagevoorcol"
              alt="Blockchain-logo"
            ></img>
            <h4 className="overrideh4metmargin">Blockchain 101</h4>
          </div>
        </div>
      </div>
    </aside>
  );
}
