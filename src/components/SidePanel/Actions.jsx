import { Button, Card, ListGroup } from "react-bootstrap";
import {
  ArrowRight,
  PlusSquareFill,
  ThreeDotsVertical,
} from "react-bootstrap-icons";
import { Link } from "react-router-dom";

export default function Actions({ items, title }) {
  return (
    <Card className="rounded-0 actions-card d-flex">
      <Card.Header className="bg-secondary text-white fs-5 rounded-0 d-flex justify-content-between mb-1">
        <span>{title}</span>
        <span>
          <PlusSquareFill className="fs-4 text-white" />{" "}
          <ThreeDotsVertical className="fs-4 text-white" />
        </span>
      </Card.Header>
      <ListGroup variant="flush" className="mx-3">
        {items &&
          items.map(({ name, description, date }, index) => (
            <ListGroup.Item className="px-0 border-bottom " key={index}>
              <div>
                <p className="text-gray">
                  <span className="text-black fs-6">{name}</span> -{" "}
                  {description}
                </p>
                <p className="text-gray-1 fs-xs">Due by: {date}</p>
                <p className="text-blue">
                  <Button variant="text" className="text-blue p-0">
                    Close
                  </Button>
                  {" | "}
                  <Button variant="text" className="text-blue p-0">
                    Dismiss
                  </Button>
                </p>
              </div>
            </ListGroup.Item>
          ))}
      </ListGroup>

      <Card.Footer className="bg-transparent border-0 mt-auto pt-3">
        <p className="text-end">
          <Link className="text-red align-middle" to="">
            EXPLORE <ArrowRight className="fs-4" />
          </Link>
        </p>
      </Card.Footer>
    </Card>
  );
}

