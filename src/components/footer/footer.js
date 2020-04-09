import React from "react";
import "./footer.css";

export default function footer() {
  return (
    <footer class="footer">
      <div class="container text-center">
        <small class="copyright">
          Copyright © 2020 by{" "}
          <a
            class="afooter"
            href="https://lalauw.github.io/portfolio"
            rel="noopener"
          >
            lalauw.github.io/portfolio.
          </a>{" "}
          All rights reserved.
        </small>
      </div>
    </footer>
  );
}
