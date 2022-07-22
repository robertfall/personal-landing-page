import { useEffect, useState } from "react";
import styles from "~/styles/index.css";

export default function Index() {
  return (
    <div className="container">
      <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
        <div className="logo" />
        <h1 className="banner">Robert Herbst</h1>
        <div className="external-links">
          <ul>
            <li><a href="https://www.linkedin.com/in/robert-herbst-a823791b/">Linked In</a></li>
            <li><a href="https://github.com/robertfall">Github</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}
