/** @jsx jsx */
import React from "react";
import { jsx, Styled } from "theme-ui";
import { Pagination } from "react-bootstrap";

const ProjectsPagination = ({ pageContext }) => {
  const { numPages, currentPage } = pageContext;
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage =
    currentPage - 1 === 1 ? "/projects" : `/projects/${currentPage - 1}`;
  const nextPage = `/projects/${currentPage + 1}`;

  return (
    <div className="mx-auto">
      <Pagination>
        {!isFirst && numPages && (
          <Pagination.Prev
            href={prevPage}
            sx={{
              "& > a": { color: "black", "&:hover": { color: "black" } },
            }}
          />
        )}
        {Array.from({ length: numPages }, (_, index) => (
          <Pagination.Item
            href={`/projects/${index === 0 ? "" : index + 1}`}
            key={index}
            sx={{
              "& > a": { color: "black", "&:hover": { color: "black" } },
            }}
          >
            {index + 1}
          </Pagination.Item>
        ))}
        {!isLast && (
          <Pagination.Next
            href={nextPage}
            sx={{
              "& > a": { color: "black", "&:hover": { color: "black" } },
            }}
          />
        )}
      </Pagination>
    </div>
  );
};

export default ProjectsPagination;
