import React from "react";
import { Card, ListGroup } from "react-bootstrap";

export default function Address({ title, subtitle, items }) {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Header>
          <h6>{title}</h6>
          <p>{subtitle}</p>
        </Card.Header>
        <div>
          <ListGroup variant="flush" className="px-3">
            {items &&
              items.map(({ text, icon }, index) => (
                <ListGroup.Item className="px-0" key={index}>
                  <div>
                    {icon}
                    {text}
                  </div>
                </ListGroup.Item>
              ))}
          </ListGroup>
        </div>
      </Card>
    </div>
  );
}
