import React from "react";
import { Card } from "react-bootstrap";
import { ArrowRight, SquareFill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import AgingChart from "./AgingChart";

function Aging() {
  return (
    <Card className="rounded-0 actions-card d-flex">
      <Card.Header className="bg-secondary text-white fs-5 rounded-0 d-flex justify-content-between mb-4">
        <span>Aging</span>
      </Card.Header>
      <div>
        <p className="fs-xs text-center">
          <span className="px-2">
            <SquareFill className="text-aging-1" /> 30 Days
          </span>
          <span className="px-2">
            <SquareFill className="text-aging-2" /> 60 Days
          </span>
          <span className="px-2">
            <SquareFill className="text-aging-3" /> 90 Days
          </span>
        </p>
      </div>

      <div style={{ height: 250 }}>
        <AgingChart />
      </div>

      <Card.Footer className="bg-transparent border-0 mt-auto">
        <p className="text-end">
          <Link className="text-primary align-middle" to="">
            EXPLORE <ArrowRight className="fs-4" />
          </Link>
        </p>
      </Card.Footer>
    </Card>
  );
}

export default Aging;
