import { Cards, CompanyProfileForm, SidePanel } from "components";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <div>
      <Row className="justify-content-between g-4">
        <Col xl={9} lg={8} xs={12}>
          <div className="bg-gray-3 p-3 pb-4">
            <Row>
              <Col xs={12}>
                <CompanyProfileForm />
              </Col>
              <Col xs={12} className="mb-2">
                <div className="mb-2">
                  <Link to="/" className="tex-blue">
                    + Add contact
                  </Link>
                </div>
                <ul className="list-unstyled gap-4 d-flex m-0 p-0 overflow-auto pb-3">
                  <li>
                    <Cards.Contact
                      title="Raad Al Ali"
                      subtitle="Development Manager"
                      email="example@email.com"
                      phone="0790000000"
                    />
                  </li>
                  <li>
                    <Cards.Contact
                      title="Raad Al Ali"
                      subtitle="Development Manager"
                      email="example@email.com"
                      phone="0790000000"
                    />
                  </li>
                </ul>
              </Col>
              <Col xs={12} className="mb-2">
                <div className="mb-2">
                  <Link to="/" className="tex-blue">
                    + Add address
                  </Link>
                </div>
                <ul className="list-unstyled gap-4 d-flex m-0 p-0 overflow-auto pb-3">
                  <li>
                    <Cards.Address
                      title="Mailing & Physical"
                      address="Jordan, Amman, 111112, PO Box 123456 Tarawni St., Building 7"
                    />
                  </li>
                </ul>
              </Col>
            </Row>
          </div>
        </Col>
        <Col xl={3} lg={4} xs={12} className="d-none d-lg-block">
          <Row className="g-4">
            <Col xs={12}>
              <SidePanel.Actions
                title="Follow-Up"
                items={[
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
                title="Recent Actions"
                items={[
                  {
                    name: "SEND NEW INVOICE",
                    description: "Collect 50% of Anwar event invoice",
                    date: " 01/02/2021 10:00 EST ",
                  },
                ]}
              />
            </Col>
            <Col xs={12}>
              <SidePanel.Links
                title="Related Reports"
                items={[
                  {
                    title: "Statements of Account",
                    link: "/",
                  },
                ]}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}
