/** @jsx jsx */
import React from "react";
import { jsx, Styled } from "theme-ui";
import ApplyNowForm from "../components/ApplyNowForm";

const ApplyNowTemplate = ({ pageContext }) => (
  <ApplyNowForm pageContext={pageContext} />
);

export default ApplyNowTemplate;
