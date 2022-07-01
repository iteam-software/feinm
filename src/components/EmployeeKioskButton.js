/** @jsx jsx */
import React from "react";
import { Button } from "react-bootstrap";
import { jsx } from "theme-ui";

const EmployeeKioskButton = () => (
  <div className="text-center">
    <Button
      href="https://spectrum.franklinsearthmoving.com/"
      target="_blank"
      rel="noreferrer noopener"
      className="btn btn-lg text-dark"
      sx={{
        backgroundColor: "primary",
        borderColor: "primary",
        "&:hover, &:focus": {
          filter: "brightness(.9)",
          backgroundColor: "primary",
          borderColor: "primary",
        },
      }}
    >
      Employee Kiosk (Paychecks)
    </Button>
  </div>
);

export default EmployeeKioskButton;
