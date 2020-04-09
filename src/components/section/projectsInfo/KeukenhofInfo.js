import React from "react";
import ".././section.css";
import "../../../App.css";
import KeukenhofFoto from "../../../assets/keukenhoffoto.png";
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
              <h3 className="title">{t("keukenhofinfo.titel")}</h3>
            </Grid.Column>
          </Grid.Row>
          <div className="image">
            <img className="image" src={KeukenhofFoto} alt="Keukenhof Foto" />
          </div>
          <br />
          <hr />
          <h4 className="overrideh4">{t("keukenhofinfo.about")}</h4>
          <p>
            {t("keukenhofinfo.about1")}&nbsp;
            <a href="https://www.redkiwi.nl/" target="__blank" rel="noopener">
              <b>RedKiwi</b>
            </a>
            , {t("keukenhofinfo.about2")}
            <a href="https://keukenhof.nl/nl/" target="__blank" rel="noopener">
              <b>Keukenhof</b>
            </a>
            . {t("keukenhofinfo.about3")} {t("keukenhofinfo.about4")}
            <b>ASP.Net MVC</b> {t("keukenhofinfo.about5")}}
          </p>
          <a
            className="btn btn-secondary btn-sm gitrepomargin disabled"
            href="https://github.com/LALauw/Keukenhof_CMS"
            target="__blank"
            rel="noopener"
          >
            <i className="fas fa-eye-slash"></i> {t("keukenhofinfo.button")}
          </a>
          <h4 className="overrideh4">{t("keukenhofinfo.rol")}</h4>
          <p>{t("keukenhofinfo.taakbeschrijving")}</p>
          <h4 className="overrideh4">{t("keukenhofinfo.moeilijkheden")}</h4>
          <p>{t("keukenhofinfo.moeilijkhedentext")}</p>
          <h4 className="overrideh4">{t("keukenhofinfo.oplossing")}</h4>
          <p>{t("keukenhofinfo.oplossingtext")}</p>
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">{t("keukenhofinfo.tech")}</th>
                  <th scope="col">{t("keukenhofinfo.tools")}</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>- C#</td>
                  <td>- Scrum</td>
                </tr>
                <tr>
                  <td>- ASP.NET MVC</td>
                  <td>- Bootstrap</td>
                </tr>
                <tr>
                  <td>- HTML</td>
                  <td>- xUnit</td>
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
