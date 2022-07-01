/** @jsx jsx */
import React from "react";
import { Link } from "gatsby";
import { jsx } from "theme-ui";
import { Nav, NavDropdown } from "react-bootstrap";

const SubHeader = () => {
  return (
    <>
      <NavDropdown
        title="Services"
        sx={{
          a: {
            color: "navLink",
            padding: "4px 20px",
            display: "block",
            justifySelf: "center",
            "&:hover, &:focus": {
              filter: "brightness(0.8)",
            },
          },
        }}
      >
        <NavDropdown.Item
          as={Link}
          to="/services/earthmoving"
          className="dropDownItem text-dark"
          sx={{
            "&:active": {
              backgroundColor: "#ffb510",
              color: "white",
            },
          }}
        >
          Earthmoving
        </NavDropdown.Item>
        <NavDropdown.Item
          as={Link}
          className="dropDownItem"
          to="/services/utilities"
          sx={{
            color: "black !important",
            "&:active, &:focus": {
              backgroundColor: "#ffb510",
              color: "white",
            },
          }}
        >
          Utilities
        </NavDropdown.Item>
        <NavDropdown.Item
          as={Link}
          className="dropDownItem text-dark"
          to="/services/concrete"
          sx={{
            "&:active": {
              backgroundColor: "#ffb510",
              color: "white",
            },
          }}
        >
          Concrete
        </NavDropdown.Item>
        <NavDropdown
          title="Paving"
          id="paving"
          drop="right"
          sx={{
            a: {
              color: "#343a40",
              "&:hover, &:focus": {
                backgroundColor: "#f8f9fa",
              },
            },
          }}
        >
          <NavDropdown.Item as={Link} to="/services/paving#">
            General
          </NavDropdown.Item>
          <NavDropdown.Item
            as={Link}
            to="/services/paving#crack-seal"
            width="400px"
          >
            Crack Seal
          </NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/services/paving#fog-seal">
            Fog Seal
          </NavDropdown.Item>
        </NavDropdown>
      </NavDropdown>

      <Nav.Link
        as={Link}
        to="/projects"
        sx={{
          color: "navLink",
          padding: "4px 20px",
          "&:hover, &:focus": { color: "navLink", filter: "brightness(0.9)" },
        }}
      >
        Projects
      </Nav.Link>

      <Nav.Link
        as={Link}
        to="/jobs"
        sx={{
          color: "navLink",
          padding: "4px 20px",
          "&:hover, &:focus": { color: "navLink", filter: "brightness(0.9)" },
        }}
      >
        Jobs
      </Nav.Link>
      <NavDropdown
        title="About Us"
        sx={{
          a: {
            color: "navLink",
            display: "block",
            padding: "4px 20px",
            justifySelf: "center",
            "&:hover, &:focus": {
              filter: "brightness(0.8)",
            },
          },
        }}
      >
        <Nav.Link
          as={Link}
          to="/about"
          className="dropDownItem"
          sx={{
            "&.dropDownItem": {
              color: "black",
              "&:hover, &:focus": {
                backgroundColor: "#f8f9fa",
              },
            },
          }}
        >
          About
        </Nav.Link>
        <Nav.Link
          as={Link}
          to="/about#news"
          className="dropDownItem"
          sx={{
            "&.dropDownItem": {
              color: "black",
              "&:hover, &:focus": {
                backgroundColor: "#f8f9fa",
              },
            },
          }}
        >
          News
        </Nav.Link>
      </NavDropdown>

      <Nav.Link
        as={Link}
        to="/contact"
        sx={{
          color: "navLink",
          padding: "4px 20px",
          "&:hover, &:focus": { color: "navLink", filter: "brightness(0.9)" },
        }}
      >
        Contact
      </Nav.Link>
    </>
  );
};

export default SubHeader;
