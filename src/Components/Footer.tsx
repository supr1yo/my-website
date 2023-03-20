import React from "react";
import "./Footer.css";

function Footer() {
  return (
        <div className="footer">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} Supriyo
          </p>
        </div>
  );
}

export default Footer;