import React from "react";
import { Card, ListGroup } from "react-bootstrap";

export default function Summary({ items }) {
  return (
    <Card className="rounded-0 actions-card d-flex">
      <Card.Header className="bg-secondary text-white fs-5 rounded-0 d-flex justify-content-between mb-1">
        <span> Summary </span>
      </Card.Header>
      <ListGroup variant="flush" className="mx-3">
        {items &&
          items.map(({ name, number, color }, index) => (
            <ListGroup.Item className="px-0 border-bottom " key={index}>
              <div>
                <p className="text-center fw-normal fs-6">{name}</p>
                <p
                  className={`text-center fw-normal fs-5 text-${
                    color || "gray"
                  }`}
                >
                  {number}{" "}
                </p>
              </div>
            </ListGroup.Item>
          ))}
      </ListGroup>
    </Card>
  );
}
