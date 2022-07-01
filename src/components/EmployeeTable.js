/** @jsx jsx */
import React from "react";
import { jsx } from "theme-ui";
import { Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const EmployeeTable = ({ data }) => {
  const memoRows = data.nodes.map(
    ({ childMarkdownRemark: { frontmatter } }, index) => (
      <tr key={index}>
        <td className="text-left">
          <FontAwesomeIcon icon="file-pdf" className="mr-2" />
          <a
            href={frontmatter.file}
            sx={{
              color: "primary",
              "&:hover, &:focus": {
                color: "primary",
                filter: "brightness(.8)",
              },
            }}
          >
            {frontmatter.title}
          </a>
        </td>
        <td className="text-right text-light">{frontmatter.publishedDate}</td>
      </tr>
    )
  );

  return (
    <Table striped variant="dark">
      <tbody sx={{ color: "primary" }}>{memoRows}</tbody>
    </Table>
  );
};

export default EmployeeTable;
