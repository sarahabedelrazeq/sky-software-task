import React from "react";
import { Link } from "react-router-dom";

export default function Icon({ icon, title, text, count, link }) {
  return (
    <Link to={link || "/"} >
      <div className="icon-card d-flex gap-4 p-4 border border-2 border-gray-2 align-items-center rounded-2">
        <div>
          <Link to={link || "/"} className="fs-1 text-blue-light d-flex">
            {icon}
          </Link>
        </div>
        <div className="w-100">
          <div className="mb-2 position-relative">
            <h6 className="text-black fw-normal fs-5 text-overflow-2">{title}</h6>
            {count ? (
              <span className="position-absolute top end bg-red rounded-circle text-white px-1 fs-xs">
                {count}
              </span>
            ) : null}
          </div>
          <div>
            <p className="text-gray fs-6 text-overflow-2">{text}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
