import React from "react";
import { Col, Row, Button, Offcanvas } from "react-bootstrap";

export default function SideBar({
  hiddenOn,
  show,
  setShow,
  icon,
  title,
  children,
}) {
  return (
    <div className={`d-${hiddenOn}-none`}>
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <Button
            variant="none"
            className="w-100 p-0 text-center"
            onClick={setShow}
          >
            {icon}
          </Button>

          <Offcanvas show={show} onHide={setShow} placement="end" scroll>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>{title}</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>{children}</Offcanvas.Body>
          </Offcanvas>
        </Col>
      </Row>
    </div>
  );
}
