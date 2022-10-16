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

export default function Home() {
  return (
    <Main id="home_page">
      <section id="home-section">
        <Container>
          <Row className="justify-content-between g-4">
            <Col xl={7} lg={8} xs={12}>
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
                    title="Settings & Preferences"
                    items={[
                      {
                        text: "Change login settings",
                        link: "/",
                      },
                      {
                        text: "Set and Edit User Permissions",
                        link: "/",
                      },
                      {
                        text: "Notification Preferences",
                        link: "/",
                      },
                      {
                        text: "Update your account information",
                        link: "/",
                      },
                      {
                        text: "Master settings",
                        link: "/",
                      },
                    ]}
                  />
                </Col>
              </Row>
            </Col>
            <Col xl={3} lg={4} xs={12} className="d-none d-lg-block">
              <Row className="g-4">
                <Col xs={12}>
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
                <Col xs={12}>
                  <SidePanel.Actions
                    title="Due Follow-Up"
                    items={[
                      {
                        name: "SEND NEW INVOICE",
                        description: "Invoice #25147 / Inn Tours & Travel",
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
}
