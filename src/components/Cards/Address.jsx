import React from "react";
import { Card } from "react-bootstrap";

export default function Address({ title, address }) {
  return (
    <div>
      <Card style={{ width: "22rem" }}>
        <Card.Header className="border-0">
          <div className="p-2">
            <h6 className="fs-5 fw-normal">{title}</h6>
          </div>
        </Card.Header>
        <Card.Body>
          <div className="p-2">
            <p className="fs-6">{address}</p>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
