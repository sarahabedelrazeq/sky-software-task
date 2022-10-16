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
              <BootstrapBreadcrumb.Item key={index}>
                <Link to={link}>
                  <span className={`fs-6 text-nowrap ${textClassName}`}>
                    {title}
                  </span>
                  <span className="px-1 text-white">/</span>
                </Link>
              </BootstrapBreadcrumb.Item>
            ))}

          <BootstrapBreadcrumb.Item className="w-100">
            <Link to={breadcrumb[breadcrumb.length - 1].link}>
              <h2
                className={`fs-4 text-nowrap text-uppercase ${textClassName}`}
              >
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
            </Link>
          </BootstrapBreadcrumb.Item>
        </BootstrapBreadcrumb>
      )}
    </div>
  );
}
