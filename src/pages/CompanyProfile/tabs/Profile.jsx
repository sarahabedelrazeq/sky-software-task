import { Cards } from "components";
import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <div>
      <Row>
        <Col xs={8}>
          <div className="bg-gray-3 p-3">
            <Row>
              <Col xs={12}>
                <Form>
                  <Row>
                    <Col xs={6}>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>A/R Number*</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="The account number"
                        />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Name*</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="The company name"
                        />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Name Alternate</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="The company name alternate"
                        />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Category*</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="The company category"
                        />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>VAT Number</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="The company VAT number"
                        />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Payment terms (Days)*</Form.Label>
                        <Form.Control type="number" placeholder="0" />
                      </Form.Group>
                    </Col>
                    <Col xs={6}>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Credit Limit (USD)</Form.Label>
                        <Form.Control type="number" placeholder="0.00" />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Current Balance (USD)</Form.Label>
                        <Form.Control type="number" placeholder="0.00" />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Current Group Balance (USD)</Form.Label>
                        <Form.Control type="number" placeholder="0.00" />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Days to Pay</Form.Label>
                        <Form.Control type="number" placeholder="0.00" />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Category Days to Pay</Form.Label>
                        <Form.Control type="number" placeholder="0.00" />
                      </Form.Group>
                    </Col>
                  </Row>
                </Form>
              </Col>
              <Col xs={12}>
                <div className="mb-3">
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
              <Col xs={12}>
                <div className="mb-3">
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
      </Row>
    </div>
  );
}
