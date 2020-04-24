import React from "react";
import ".././section.css";
import "../../../App.css";
import OutdoorParadiseFoto from "../../../assets/outdoorparadiselandscapePhone.png";
import { useTranslation } from "react-i18next";
import { Grid } from "semantic-ui-react";

export default function KeukenhofInfo() {
  const { t } = useTranslation();
  return (
    <div className="item gitrepomargin">
      <div className="card">
        <div className="card-body">
          <Grid.Row columns={1} className="columninfo">
            <Grid.Column>
              <h3 className="title">{t("outdoorinfo.titel")}</h3>
            </Grid.Column>
          </Grid.Row>
          <div className="">
            <img
              className="specialOp"
              src={OutdoorParadiseFoto}
              alt="Outdoor_Paradise"
            />
          </div>
          <hr />
          <h4 className="overrideh4">{t("outdoorinfo.about")}</h4>
          <p>{t("outdoorinfo.about1")}&nbsp;</p>
          <a
            className="btn btn-secondary btn-sm gitrepomargin disabled"
            href="https://github.com/LALauw/Outdoor_Paradise_WebApp/tree/dev"
            target="__blank"
            rel="noopener"
          >
            <i className="fas fa-eye-slash"></i> {t("outdoorinfo.button")}
          </a>
          <a
            className="btn btn-secondary btn-sm gitrepomargin"
            href="https://outdoorparadiseapplication.azurewebsites.net/"
            target="__blank"
            rel="noopener"
          >
            <i className="fas fa-link"></i> {t("outdoorinfo.buttonlive")}
          </a>
          <h4 className="overrideh4">{t("outdoorinfo.rol")}</h4>
          <p>{t("outdoorinfo.taakbeschrijving")}</p>
          <h4 className="overrideh4">{t("outdoorinfo.moeilijkheden")}</h4>
          <p>{t("outdoorinfo.moeilijkhedentext")}</p>
          <h4 className="overrideh4">{t("outdoorinfo.oplossing")}</h4>
          <p>{t("outdoorinfo.oplossingtext")}</p>
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">{t("outdoorinfo.tech")}</th>
                  <th scope="col">{t("outdoorinfo.tools")}</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>- C#</td>
                  <td>- Scrum</td>
                </tr>
                <tr>
                  <td>- ASP.NET CORE MVC</td>
                  <td>- Bootstrap</td>
                </tr>
                <tr>
                  <td>- HTML</td>
                  <td>- SSIS</td>
                </tr>
                <tr>
                  <td>- CSS</td>
                  <td>- Visual Studio Community 2017</td>
                </tr>
                <tr>
                  <td>- SQL</td>
                  <td>- Microsoft Azure </td>
                </tr>
                <tr>
                  <td>- JQuery</td>
                  <td>- LinQ</td>
                </tr>
                <tr>
                  <td>- EF Core</td>
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
