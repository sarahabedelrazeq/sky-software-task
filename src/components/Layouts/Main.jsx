import { Breadcrumb } from "components";
import { useTheme } from "hooks";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "../Footer";
import Header from "../Header";

const Main = ({ id, children, breadcrumb }) => {
  const theme = useTheme();
  return (
    <div id="main-layout" className="layout" style={{ background: theme.bg }}>
      <Header />
      <section className="bg-secondary pt-4">
        <Container>
          <Row>
            <Col>
              {breadcrumb && (
                <Breadcrumb
                  textClassName="text-white"
                  breadcrumb={breadcrumb}
                />
              )}
            </Col>
          </Row>
        </Container>
      </section>
      <div className="page-container pt-5" id={id ? id : "page"}>
        {children}
      </div>
      <Footer />
    </div>
  );
};
export default Main;
