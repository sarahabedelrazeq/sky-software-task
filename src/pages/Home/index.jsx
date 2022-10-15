import { Cards, SidePanel } from "components";
import { Main } from "components/Layouts";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  BagDashFill,
  FileEarmarkBarGraphFill,
  Receipt,
  Reception3,
} from "react-bootstrap-icons";

const Home = () => {
  return (
    <Main id="home_page">
      <section>
        <Container>
          <Row className="justify-content-between g-4">
            <Col xxl={7} xl={8} xs={12}>
              <Row className="g-4 mb-5">
                <Col xs={6}>
                  <Cards.Icon
                    icon={<BagDashFill />}
                    count={76}
                    title="Company Profiles"
                    text="The A/R Account"
                    link="/company-profiles"
                  />
                </Col>
                <Col xs={6}>
                  <Cards.Icon
                    icon={<Receipt />}
                    count={0}
                    title="Invoices"
                    text="Invoices with standing balance"
                  />
                </Col>
                <Col xs={6}>
                  <Cards.Icon
                    icon={<FileEarmarkBarGraphFill />}
                    count={0}
                    title="Payments"
                    text="Received payments & Settlments"
                  />
                </Col>
                <Col xs={6}>
                  <Cards.Icon
                    icon={<FileEarmarkBarGraphFill />}
                    count={0}
                    title="Aging"
                    text="Invoice Aging"
                  />
                </Col>
                <Col xs={6}>
                  <Cards.Icon
                    icon={<Reception3 />}
                    count={0}
                    title="Reports"
                    text="Current & History reports"
                  />
                </Col>
              </Row>
              <Row>
                <Col xs={6}>
                  <Cards.Links
                    title="Due Follow-Up"
                    items={[
                      {
                        text: "Invoices with standing balance",
                        link: "/",
                      },
                      {
                        text: "Invoices with standing balance",
                        link: "/",
                      },
                    ]}
                  />
                </Col>
              </Row>
            </Col>
            <Col xxl={3} xl={3} lg={4} xs={12}>
              <Row className="g-4">
                <Col xl={12} xs={6}>
                  <SidePanel.Actions
                    title="Due Follow-Up"
                    items={[
                      {
                        name: "INN TOURS & TRAVEL",
                        description: "Collect 50% of Anwar event invoice",
                        date: " 01/02/2021 10:00 EST ",
                      },
                      {
                        name: "INN TOURS & TRAVEL",
                        description: "Collect 50% of Anwar event invoice",
                        date: " 01/02/2021 10:00 EST ",
                      },
                    ]}
                  />
                </Col>
                <Col xl={12} xs={6}>
                  <SidePanel.Actions
                    title="Due Follow-Up"
                    items={[
                      {
                        name: "INN TOURS & TRAVEL",
                        description: "Collect 50% of Anwar event invoice",
                        date: " 01/02/2021 10:00 EST ",
                      },
                      {
                        name: "INN TOURS & TRAVEL",
                        description: "Collect 50% of Anwar event invoice",
                        date: " 01/02/2021 10:00 EST ",
                      },
                    ]}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </Main>
  );
};

export default Home;