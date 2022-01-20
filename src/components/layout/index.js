import React from "react";

import "../../styles/_layout.css";

export default function Layout({ children }) {
  return (
    <div className="layout">
      <header>HEADER</header>
      <main>{children}</main>
      <footer>FOOTER</footer>
    </div>
  );
}
