import { Breadcrumb } from "components";
import { useTheme } from "hooks";
import React from "react";
import {
  Col,
  Container,
  InputGroup,
  Row,
  Form,
  ButtonGroup,
  Button,
} from "react-bootstrap";
import {
  Funnel,
  Search,
  ThreeDotsVertical,
  Translate,
} from "react-bootstrap-icons";
import Footer from "../Footer";
import Header from "../Header";

export default function Main({ id, children, breadcrumb }) {
  const theme = useTheme();
  return (
    <div id="main-layout" className="layout" style={{ background: theme.bg }}>
      <Header />
      {breadcrumb && (
        <section id="breadcrumb-section" className="bg-secondary pt-4 pb-3 mb-4">
          <Container>
            <Row className="align-items-end">
              <Col lg={4} xs={12}>
                <Breadcrumb
                  textClassName="text-white"
                  breadcrumb={breadcrumb}
                />
              </Col>
              <Col
                lg={8}
                xs={12}
                className="d-none d-lg-flex gap-4 justify-content-end"
              >
                <div>
                  <ButtonGroup aria-label="Basic example">
                    <Button variant="white" className="tex-primary bg-white">
                      <span className="px-1">
                        <Translate className="fs-4 text-primary" />
                      </span>
                      <span className="px-1">Order By</span>
                    </Button>
                    <Button
                      variant="white"
                      className="tex-primary bg-white border border-top-0 border-bottom-0"
                    >
                      <span className="px-1">
                        <Funnel className="fs-4 text-primary" />
                      </span>
                      <span className="px-1">Filter</span>
                    </Button>
                    <Button variant="white" className="tex-primary bg-white">
                      <span className="px-1">
                        <ThreeDotsVertical className="fs-4 text-gray" />
                      </span>
                    </Button>
                  </ButtonGroup>
                </div>
                <div>
                  <Form>
                    <InputGroup>
                      <InputGroup.Text
                        className="bg-white border-0 py-2"
                        id="search"
                      >
                        <Search className="fs-4 text-gray" />
                      </InputGroup.Text>
                      <Form.Control
                        placeholder="Search..."
                        aria-label="search"
                        aria-describedby="search"
                        className="bg-white border-0 py-2"
                      />
                    </InputGroup>
                  </Form>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      )}
      {breadcrumb && (
        <section id="phone-search-section" className="d-lg-none">
          <Container>
            <Row className="align-items-end">
              <Col xs={12} className="d-flex gap-4 justify-content-end">
                <div>
                  <ButtonGroup aria-label="Basic example" className=" border border-gray-2">
                    <Button variant="white" className="tex-primary bg-white">
                      <span>
                        <ThreeDotsVertical className="fs-4 text-gray" />
                      </span>
                    </Button>
                  </ButtonGroup>
                </div>
                <div className="w-100">
                  <Form>
                    <InputGroup className="bg-white rounded border border-gray-2 px-3">
                      <InputGroup.Text
                        className="bg-white border-0 p-2"
                        id="search"
                      >
                        <Search className="fs-4 text-gray" />
                      </InputGroup.Text>
                      <Form.Control
                        placeholder="Search..."
                        aria-label="search"
                        aria-describedby="search"
                        className="bg-white border-0"
                      />
                    </InputGroup>
                  </Form>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      )}
      <div className="page-container pb-5 pt-4" id={id ? id : "page"}>
        {children}
      </div>
      <Footer />
    </div>
  );
}
