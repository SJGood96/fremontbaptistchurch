import React from "react";
import "../styles/footer.css"

const Footer = () => {
  const developerName = 'Spencer Good'
  return (
    <div className="footer">
      <hr/>
      <p>Developer: {developerName}
      <br/>
      &copy; 2021</p>
    </div>
  );
}

export default Footer;