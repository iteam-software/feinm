/** @jsx jsx */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { jsx } from "theme-ui";
import { Nav } from "react-bootstrap";
import SubHeader from "./SubHeader";

const Footer = ({ data }) => {
  return (
    <>
      <div className="bg-dark text-light p-3 w-100">
        <div className="container">
          <div className="row">
            <div className="col-md mb-3">
              <h2 className="font-weight-light">Important Menu</h2>
              <Nav className="navbar navbar-expand-lg p-0">
                <SubHeader />
              </Nav>
              <div className="mt-3 text-center">
                <img
                  src={data.franklinLogoImage}
                  alt="Franklin's Earthmoving"
                  style={{ width: "50%" }}
                />
              </div>
            </div>
            <div className="col-md">
              <h2 className="font-weight-light">Contact Information</h2>
              <p className="d-flex align-items-center">
                <FontAwesomeIcon
                  icon="map-marker-alt"
                  className="mr-3"
                  size="lg"
                  sx={{
                    color: "primary",
                  }}
                />
                <a
                  href="https://www.google.com/maps/place/700+Industrial+Ave+NE,+Albuquerque,+NM+87107/data=!4m2!3m1!1s0x872274a0d0e10f59:0xf7526e449bf4e4db?sa=X&ved=2ahUKEwi9ldDlz5jrAhV_B50JHZY1CXgQ8gEwAHoECAsQAQ"
                  className="text-white"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  700 Industrial Ave. NE, Albuquerque, NM 87107
                </a>
              </p>
              <p className="d-flex align-items-center">
                <FontAwesomeIcon
                  icon="phone"
                  className="mr-3"
                  size="lg"
                  sx={{
                    color: "primary",
                  }}
                />
                (505) 884-6947 (Office)
              </p>
              <p className="d-flex align-items-center">
                <FontAwesomeIcon
                  icon="print"
                  className="mr-3"
                  size="lg"
                  sx={{
                    color: "primary",
                  }}
                />
                (505) 883-2604 (Fax)
              </p>
              <p className="d-flex align-items-center">
                <FontAwesomeIcon
                  icon="envelope"
                  className="mr-3"
                  size="lg"
                  sx={{
                    color: "primary",
                  }}
                />
                <a
                  className="text-white"
                  href="mailto:estimates@franklinsearthmoving.com"
                >
                  <span>estimates@</span>
                  <span className="d-none d-md-inline">
                    franklinsearthmoving.com
                  </span>
                </a>
              </p>
              <p>
                <a
                  href="https://www.google.com/maps/place/700+Industrial+Ave+NE,+Albuquerque,+NM+87107/data=!4m2!3m1!1s0x872274a0d0e10f59:0xf7526e449bf4e4db?sa=X&ved=2ahUKEwi9ldDlz5jrAhV_B50JHZY1CXgQ8gEwAHoECAsQAQ"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <img
                    src="https://maps.googleapis.com/maps/api/staticmap?key=AIzaSyDjlt_jp92OXdVP7Bl90c4dGKfWZxmRbaw&size=540x200&zoom=14&style=&markers=size:mid|color:0xffb510|700+Industrial+Ave+NE+87107&style=feature:administrative|visibility:off&style=feature:all|saturation:-100"
                    alt="Google Map"
                    className="w-100"
                  />
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <footer
        className="text-dark w-100 text-center p-3"
        sx={{ backgroundColor: "primary" }}
      >
        <div className="container">
          <div>Copyright &copy; 2020 - All Rights Reserved</div>
          <div>
            <small>
              Designed and Developed by{" "}
              <a
                href="https://iteamnm.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark"
              >
                iTEAM Consulting
              </a>
              .
            </small>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
