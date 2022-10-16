import { SidePanel } from "components";
import { Main } from "components/Layouts";
import React from "react";
import { Col, Container, Row, Tab, Tabs } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Invoices from "./tabs/Invoices";
import Profile from "./tabs/Profile";

export default function CompanyProfile() {
  const { company } = useParams();

  return (
    <Main
      id="company-profiles_page"
      breadcrumb={
        company && [
          { link: "/", title: "Home" },
          { link: "/company-profiles", title: "Company Profiles" },
          { link: `/company-profile/${company}`, title: company },
        ]
      }
    >
      <section>
        <Container>
          <Row className="justify-content-between g-4">
            <Col xs={12}>
              <Tabs
                defaultActiveKey="profile"
                id="uncontrolled-tab-example"
                className="mb-3"
              >
                <Tab
                  eventKey="profile"
                  tabClassName="underline-active-tap"
                  title={<p className="px-5">Profile</p>}
                >
                  <div className="pt-3">
                    <Profile />
                  </div>
                </Tab>
                <Tab
                  eventKey="invoices"
                  tabClassName="underline-active-tap"
                  title={<p className="px-5">Invoices</p>}
                >
                  <div className="pt-3">
                    <Invoices />
                  </div>
                </Tab>
              </Tabs>
            </Col>
          </Row>
        </Container>
      </section>
    </Main>
  );
}
