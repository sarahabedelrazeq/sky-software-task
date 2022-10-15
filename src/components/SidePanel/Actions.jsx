import { Button, Card, ListGroup } from "react-bootstrap";
import { ArrowRight } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

function Actions({ items, title }) {
  return (
    <Card className="rounded-0 reports-card">
      <Card.Header className="bg-secondary text-white fs-5 rounded-0">
        {title}
      </Card.Header>
      <div>
        <ListGroup variant="flush" className="px-3">
          {items &&
            items.map(({ name, description, date }, index) => (
              <ListGroup.Item className="px-0" key={index} >
                <div>
                  <p className="text-gray">
                    <span className="text-black">{name}</span> - {description}
                  </p>
                  <p className="text-gray-1 fs-xs">Due by: {date}</p>
                  <p className="text-blue">
                    <Button variant="text" className="text-blue p-0">
                      Close
                    </Button>
                    |
                    <Button variant="text" className="text-blue p-0">
                      Dismiss
                    </Button>
                  </p>
                </div>
              </ListGroup.Item>
            ))}
        </ListGroup>
      </div>

      <Card.Footer className="bg-transparent border-0">
        <p className="text-end">
          <Link className="text-red align-middle" to="">
            EXPLORE <ArrowRight className="fs-4" />
          </Link>
        </p>
      </Card.Footer>
    </Card>
  );
}

export default Actions;
