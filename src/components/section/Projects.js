import React, { useState } from "react";
import "./section.css";
import "../../App.css";
import { useTranslation } from "react-i18next";
import Keukenhoffoto from "../../assets/Keukenhof.png";
import ProjectsInfoSwitch from "./ProjectInfoSwitch";
import MazegameFoto from "../../assets/mazeGameResize.png";
import Roboshaq from "../../assets/roboshaq2.jpg";
import PortfolioFoto from "../../assets/portfolioimage3.png";
import OutdoorParadiseFoto from "../../assets/outdoorparadisePromo.png";

function Projects() {
  const [whichComponentToShow, setState] = useState("outdoor");
  const { t } = useTranslation();

  return (
    <section className="latest section">
      <div className="section-inner">
        <h2 className="heading">{t("project.titel")}</h2>
        <p>{t("project.hint")}</p>
        <div className="content">
          <div className="item featured text-center ">
            <div className="rowoverrideproject">
              <div className="coloverrideproject ">
                <h3 className="heading-project">Outdoor paradise</h3>
                <a
                  onClick={() => setState("outdoor")}
                  className="figureproject hoveranim"
                >
                  <img
                    className="img-fluid project-image"
                    src={OutdoorParadiseFoto}
                    alt="Outdoor Paradise Responsive"
                  />
                </a>
              </div>
              <div className="coloverrideproject">
                <h3 className="heading-project">Keukenhof</h3>
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
              <div className="coloverrideproject">
                <h3 className="heading-project">MazaGameJLR</h3>
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
              <div className="coloverrideproject">
                <h3 className="heading-project">Personal Portfolio</h3>
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

              <div className="coloverrideproject">
                <h3 className="heading-project">RoboShaq Shooter</h3>
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
