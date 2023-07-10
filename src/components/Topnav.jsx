import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

import "./style.css";
const Topnav = () => {
  return (
    <React.Fragment>
      <div className="container-fluid info">
        <div className="container ">
          <div className="row d-flex">
            <div className="col-md-4 my-2">
              <FontAwesomeIcon
                icon={faEnvelope}
                beatFade
                size="xl"
                style={{ color: "#f2f2f3" }}
              />
              <span>aaa@gmail.com</span>
            </div>
            <div className="col-md-4 my-2">
              <FontAwesomeIcon
                icon={faPhone}
                beatFade
                size="xl"
                style={{ color: "#f2f2f3" }}
              />
              <span>+977 9814412345</span>
            </div>
            <div className="col-md-4 my-2">
              <FontAwesomeIcon
                icon={faLocationDot}
                beatFade
                size="xl"
                style={{ color: "#f2f2f3" }}
              />
              <span>Kathmandu, Nepal</span>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Topnav;
