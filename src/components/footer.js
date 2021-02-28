import React from "react";
import "../styles/footer.css"

function Footer() {
  const developerName = 'Spencer Good'
  return (
    <div>
      <hr/>
      <p>Developer: {developerName}
      <br/>
      &copy; 2021</p>
    </div>
  );
}

export default Footer;