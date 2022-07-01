/** @jsx jsx */
import React, { useState } from "react";
import { useClickOutside } from "react-click-outside-hook";
import { useWindowSize } from "../hooks/useWindowSize";
import { Nav, Container, Navbar } from "react-bootstrap";
import { jsx } from "theme-ui";
import { Link } from "gatsby";
import SubHeader from "./SubHeader";

const Header = ({ data }) => {
  const size = useWindowSize();
  const [ref, hasClickedOutside] = useClickOutside();
  const [isExpanded, setExpanded] = useState(false);

  return (
    <>
      <div
        className="w-100"
        sx={{
          backgroundColor: "primary",
          fontFamily: "navbar",
          whiteSpace: "nowrap",
          textTransform: "uppercase",
        }}
      >
        <Container className="p-2 d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start text-dark w-100">
          <Link className="navbar-brand" to="/">
            <img
              src={data}
              alt="Franklin's Earthmoving"
              style={{ height: "6rem" }}
            />
          </Link>
          <span className="d-inline-block text-right navbar-brand">
            <h3 className="pb-1 mb-1 border-bottom border-dark">
              Franklin's Earthmoving
            </h3>
            <h4 className="m-0">Since 1958</h4>
          </span>
          <span
            className="d-none d-lg-inline"
            style={{ flex: "1 1 0px" }}
          ></span>
          <div className="d-inline-block navbar-brand text-lg-right text-xl-center mt-3 mt-lg-0">
            <h5
              className="pb-1 mb-1 border-bottom border-dark"
              style={{ letterSpacing: "3px" }}
            >
              Turnkey Solutions Provider
            </h5>
            <div className="d-flex justify-content-between">
              <span>
                <Link className="text-dark" to="/services/earthmoving">
                  <small>Earthmoving</small>
                </Link>
              </span>
              <span>&bull;</span>
              <span>
                <Link className="text-dark" to="/services/utilities">
                  <small>Utilities</small>
                </Link>
              </span>
              <span>&bull;</span>
              <span>
                <Link className="text-dark" to="/services/concrete">
                  <small>Concrete</small>
                </Link>
              </span>
              <span>&bull;</span>
              <span>
                <Link className="text-dark" to="/services/paving">
                  <small>Paving</small>
                </Link>
              </span>
            </div>
          </div>
        </Container>
      </div>
      <Container fluid className="p-0 bg-dark sticky-top">
        <Container>
          <Navbar
            collapseOnSelect
            ref={ref}
            expand="lg"
            bg="dark"
            variant="dark"
            expanded={
              isExpanded && size.width <= 768 && !hasClickedOutside
                ? true
                : false
            }
          >
            <Navbar.Toggle
              onClick={() => setExpanded(!isExpanded)}
              aria-controls="responsive-navbar-nav"
              className="ml-auto"
            />
            <Navbar.Collapse id="responsive-navbar-nav">
              <SubHeader />
              <Nav.Item
                as={"a"}
                className="btn btn-light ml-auto mr-4 my-2"
                role="button"
                href="mailto:estimates@franklinsearthmoving.com?subject=Estimate%20Inquiry"
              >
                Need an Estimate
              </Nav.Item>
              <Nav.Item
                className="btn btn-light"
                as={Link}
                role="button"
                to="/jobs/apply-now"
              >
                Apply for Job
              </Nav.Item>
            </Navbar.Collapse>
          </Navbar>
        </Container>
      </Container>
    </>
  );
};

export default Header;
