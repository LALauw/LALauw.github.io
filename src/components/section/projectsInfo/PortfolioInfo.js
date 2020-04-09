import React from "react";
import ".././section.css";
import "../../../App.css";
import { useTranslation } from "react-i18next";
import KeukenhofFoto from "../../../assets/keukenhoffoto.png";
import { Grid } from "semantic-ui-react";

export default function PortfolioInfo() {
  const { t } = useTranslation();
  return (
    <div className="item gitrepomargin ">
      <div className="card">
        <div className="card-body">
          <Grid.Row columns={1} className="columninfo">
            <Grid.Column>
              <h3 className="title">{t("portfolio.titel")}</h3>
            </Grid.Column>
          </Grid.Row>
          <div className="image">
            <img className="image" src={KeukenhofFoto} alt="Keukenhof Foto" />
          </div>
          <br />
          <hr />
          <h4 className="overrideh4">{t("portfolio.about")}</h4>
          <p>{t("portfolio.abouttext")}</p>
          <a
            className="btn btn-secondary btn-sm gitrepomargin"
            href="https://github.com/LALauw/portfolio"
            target="__blank"
            rel="noopener"
          >
            <i className="fab fa-github"></i> GitHub Repository
          </a>
          <h4 className="overrideh4">{t("portfolio.leren")}</h4>
          <p>{t("portfolio.lerentext")}</p>
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">{t("portfolio.tech")}</th>
                  <th scope="col">{t("portfolio.tools")}</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>- Javascript</td>
                  <td>- Bootstrap</td>
                </tr>
                <tr>
                  <td>- ReactJS</td>
                  <td>- Visual Studio Code</td>
                </tr>
                <tr>
                  <td>- HTML</td>
                  <td>- React-i18next</td>
                </tr>
                <tr>
                  <td>- CSS</td>
                </tr>
                <tr>
                  <td>- Git / Github</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
