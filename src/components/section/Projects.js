import React, { useState } from "react";
import "./section.css";
import "../../App.css";
import { useTranslation } from "react-i18next";
import Keukenhoffoto from "../../assets/Keukenhof.png";
import ProjectsInfoSwitch from "./ProjectInfoSwitch";
import MazegameFoto from "../../assets/mazeGameResize.png";
import Roboshaq from "../../assets/roboshaq2.jpg";
import PortfolioFoto from "../../assets/portfolioimage3.png";

function Projects() {
  const [whichComponentToShow, setState] = useState("keukenhof");
  const { t } = useTranslation();

  return (
    <section className="latest section">
      <div className="section-inner">
        <h2 className="heading">{t("project.titel")}</h2>
        <p>{t("project.hint")}</p>
        <div className="content">
          <div className="item featured text-center">
            <div className="row">
              <div className="col-sm">
                <a
                  onClick={() => setState("keukenhof")}
                  className="figureproject hoveranim"
                >
                  <img
                    className="img-fluid project-image"
                    src={Keukenhoffoto}
                    alt="Keukenhof Front Page"
                  />
                </a>
              </div>

              <div className="col-sm">
                <a
                  onClick={() => setState("maze")}
                  className="figureproject hoveranim"
                >
                  <img
                    className="img-fluid project-image"
                    src={MazegameFoto}
                    alt="MazeGameJLRMenu"
                  />
                </a>
              </div>
            </div>
            <div className="row">
              <div className="col-sm">
                <a
                  onClick={() => setState("portfolio")}
                  className="figureproject hoveranim"
                >
                  <img
                    className="img-fluid project-image"
                    src={PortfolioFoto}
                    alt="ReactJS Portfolio"
                  />
                </a>
              </div>

              <div className="col-sm">
                <a
                  onClick={() => setState("knights")}
                  className="figureproject hoveranim"
                >
                  <img
                    className="img-fluid project-image"
                    src={Roboshaq}
                    alt="RoboShaq"
                  />
                </a>
              </div>
            </div>
          </div>
          <ProjectsInfoSwitch soort={whichComponentToShow} />
        </div>
      </div>
    </section>
  );
}
export default Projects;
