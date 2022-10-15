import React from "react";
import { Link } from "react-router-dom";

export default function Links({ title, items }) {
  return (
    <div className="gap-4 p-4 border border-2 border-gray-2 align-items-center rounded-2">
      <div>
        <div className="mb-2">
          <h6 className="fs-5">{title}</h6>
        </div>
        <div>
          <ul className="list-unstyled">
            {items &&
              items.map(({ text, link }, index) => (
                <li className="mb-1" key={index} >
                  <Link to={link} className="text-blue fs-6">
                    {text}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
