import React from "react";
import { Breadcrumb as BootstrapBreadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Breadcrumb({ breadcrumb, textClassName }) {
  return (
    <div className="breadcrumb-component">
      {breadcrumb && (
        <BootstrapBreadcrumb className="d-block">
          {breadcrumb
            .slice(0, breadcrumb.length - 1)
            .map(({ title, link }, index) => (
              <BootstrapBreadcrumb.Item as={Link} to={link} key={index}>
                <span className={`fs-6 text-nowrap ${textClassName}`}>
                  {title} /
                </span>
              </BootstrapBreadcrumb.Item>
            ))}

          <BootstrapBreadcrumb.Item
            as={Link}
            to={breadcrumb[breadcrumb.length - 1].link}
            className="w-100"
          >
            <h2 className={`fs-4 text-nowrap text-uppercase ${textClassName}`}>
              {breadcrumb[breadcrumb.length - 1].title
                .split(" ")
                .map((word) => {
                  const chars = word.split("");
                  console.log(chars);
                  return (
                    <>
                      <span className="fs-2">{chars[0]}</span>
                      {chars.slice(1, chars.length).join("")}{" "}
                    </>
                  );
                })}
            </h2>
          </BootstrapBreadcrumb.Item>
        </BootstrapBreadcrumb>
      )}
    </div>
  );
}
