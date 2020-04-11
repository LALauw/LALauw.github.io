import React from "react";
import "./section.css";
import "../../App.css";
import { useTranslation } from "react-i18next";

export default function ContactInfo() {
  const { t } = useTranslation();
  return (
    <aside className="info aside section">
      <div className="section-inner">
        <div className="content">
          <h2 className="heading">{t("contact.titel")}</h2>
          <ul className="list-unstyled">
            <li>
              <p>
                <i className="fas fa-envelope"></i>
                <a href="mailto:lauw2498@live.nl">lauw2498@live.nl</a>
              </p>
            </li>
            <li>
              <p>
                <i className="fas fa-phone"></i>+31 6 34 03 78 46
              </p>
            </li>
            <a
              href="https://www.linkedin.com/in/leslielauw/"
              target="__blank"
              rel="noopener"
            >
              <li>
                <p>
                  <i className="fab fa-linkedin-in"></i>LinkedIn
                </p>
              </li>
            </a>
          </ul>
        </div>
      </div>
    </aside>
  );
}
