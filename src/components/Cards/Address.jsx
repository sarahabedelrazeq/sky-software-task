import React from "react";
import { Card } from "react-bootstrap";

export default function Address({ title, address }) {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Header  className="border-0">
          <h6 className="fs-5 fw-normal">{title}</h6>
        </Card.Header>
        <Card.Body>
          <p className="fs-6">{address}</p>
        </Card.Body>
      </Card>
    </div>
  );
}
