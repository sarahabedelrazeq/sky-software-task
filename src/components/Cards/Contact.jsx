import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import { EnvelopeFill, TelephoneFill } from "react-bootstrap-icons";

export default function Address({ title, subtitle, phone, email }) {
  return (
    <div>
      <Card style={{ width: "22rem" }}>
        <Card.Header className="border-0">
          <div className="p-2">
            <h6 className="fs-5 fw-normal">{title}</h6>
            <p>{subtitle}</p>
          </div>
        </Card.Header>
        <div className="p-2">
          <ListGroup variant="flush" className="px-3">
            <ListGroup.Item className="px-0 border-0">
              <EnvelopeFill className="text-blue fs-4" />
              <span className="px-3 fs-6">{phone}</span>
            </ListGroup.Item>
            <ListGroup.Item className="px-0">
              <TelephoneFill className="text-blue fs-4" />
              <span className="px-3 fs-6">{email}</span>
            </ListGroup.Item>
          </ListGroup>
        </div>
      </Card>
    </div>
  );
}
