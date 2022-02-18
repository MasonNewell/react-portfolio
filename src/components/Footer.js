import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
export default function Footer() {
  return (
    <div>
      <FontAwesomeIcon icon={faLinkedin} />
      <FontAwesomeIcon icon={faGithub} />
    </div>
  );
}
