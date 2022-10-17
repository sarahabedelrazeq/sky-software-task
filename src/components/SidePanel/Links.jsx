import { Card, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Links({ title, items }) {
  return (
    <Card className="rounded-0 links-card d-flex">
      <Card.Header className="bg-secondary text-white fs-5 rounded-0 d-flex justify-content-between mb-1">
        <span>{title}</span>
      </Card.Header>
      <ListGroup variant="flush" className="mx-3">
        {items &&
          items.map(({ title, link }, index) => (
            <ListGroup.Item className="px-0 border-0" key={index}>
              <Link to={link}>
                <span className="text-blue fs-6">{title}</span>
              </Link>
            </ListGroup.Item>
          ))}
      </ListGroup>
    </Card>
  );
}
