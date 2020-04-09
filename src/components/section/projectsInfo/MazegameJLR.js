import React from "react";
import ".././section.css";
import "../../../App.css";
import MazeGamePlay from "../../../assets/mazeGameplay.gif";
import { useTranslation } from "react-i18next";
import { Grid } from "semantic-ui-react";

export default function MazegameJLR() {
  const { t } = useTranslation();
  return (
    <div className="item gitrepomargin">
      <div className="card">
        <div className="card-body">
          <Grid.Row columns={1} className="columninfo">
            <Grid.Column>
              <h3 className="title">{t("mazegame.titel")}</h3>
            </Grid.Column>
          </Grid.Row>
          <div className="image">
            <img className="image" src={MazeGamePlay} alt="MazeGameMenu" />
          </div>
          <br />
          <hr />
          <h4 className="overrideh4">{t("mazegame.about")}</h4>
          <p>{t("mazegame.abouttext")}</p>
          <a
            className="btn btn-secondary btn-sm gitrepomargin"
            href="https://github.com/LALauw/Beroepsproduct-OOP-MazeHHS"
            target="__blank"
            rel="noopener"
          >
            <i className="fab fa-github"></i> GitHub Repository
          </a>
          <h4 className="overrideh4">{t("mazegame.rol")}</h4>
          <p>{t("mazegame.roltext")}</p>
          <h4 className="overrideh4">{t("mazegame.moeilijkheden")}</h4>
          <p>{t("mazegame.moeilijkhedentext")}</p>
          <h4 className="overrideh4">{t("mazegame.oplossing")}</h4>
          <p>{t("mazegame.oplossingtext")}</p>
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">{t("mazegame.tech")}</th>
                  <th scope="col">{t("mazegame.tools")}</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>- Java</td>
                  <td>- UML</td>
                </tr>
                <tr>
                  <td>- JUnit 4</td>
                  <td>- IntelliJ IDEA</td>
                </tr>
                <tr>
                  <td></td>
                  <td>- Scrum</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
