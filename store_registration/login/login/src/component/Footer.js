import React, { Component } from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import '../styles/Footer.css'

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <p>Follow us on </p>
        <p><b className="copy">&copy; Copyright IACSD PG-DAC SEPT-2021</b>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<InstagramIcon /><TwitterIcon /><FacebookIcon /><LinkedInIcon /></p>
      </div>
    </div>
  );
}
export default Footer;