import { SideBar } from "components";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  Grid3x3,
  List,
  Person,
  Power,
  SquareFill,
} from "react-bootstrap-icons";
import { Link } from "react-router-dom";

export default function Header() {
  const [show, setShow] = React.useState(false);
  return (
    <header className="bg-secondary-dark py-2">
      <Container>
        <Row className="align-items-center">
          <Col xl={6} lg={6} xs={8}>
            <h2 className="text-white fs-5">Account Receivable</h2>
          </Col>
          <Col xl={6} lg={6} xs={4}>
            <ul className="d-flex list-unstyled gap-2 gap-lg-4 justify-content-end m-0 align-items-center">
              <li className="d-none d-lg-block">
                <Link to="/" className="text-white fs-6">
                  <Grid3x3 className="fs-4" />
                  <span className="align-middle mx-2"> Sky Software </span>
                </Link>
              </li>
              <li className="d-none d-lg-block">
                <Link to="/" className="text-white fs-6">
                  <Person className="fs-4" />
                  <span className="align-middle mx-2"> User Name </span>
                </Link>
              </li>
              <li>
                <Link to="/" className="text-white fs-6">
                  <SquareFill className="fs-4" />
                </Link>
              </li>
              <li>
                <Link to="/" className="text-white fs-6">
                  <Power className="fs-4" />
                </Link>
              </li>
              <li>
                <SideBar
                  hiddenOn="lg"
                  show={show}
                  setShow={setShow}
                  icon={<List color="white" className="fs-4" />}
                  title
                >
                  <ul className="list-unstyled m-0">
                    <li className="mb-3">
                      <Link to="/" className="text-black fs-6">
                        <Grid3x3 className="fs-4" />
                        <span className="align-middle mx-2">Sky Software</span>
                      </Link>
                    </li>
                    <li className="mb-3">
                      <Link to="/" className="text-black fs-6">
                        <Person className="fs-4" />
                        <span className="align-middle mx-2"> User Name </span>
                      </Link>
                    </li>
                  </ul>
                </SideBar>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </header>
  );
}
