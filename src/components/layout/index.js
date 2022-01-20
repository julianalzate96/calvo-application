import React from "react";

export default function Layout({ children }) {
  return (
    <div>
      <header>HEADER</header>
      <main>{children}</main>
      <footer>FOOTER</footer>
    </div>
  );
}
