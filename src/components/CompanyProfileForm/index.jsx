import React from "react";
import { Col, Row, Form } from "react-bootstrap";

export default function CompanyProfileForm() {
  return (
    <div>
      <Form>
        <Row>
          <Col sm={8} xs={7}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>A/R Number*</Form.Label>
              <Form.Control type="email" placeholder="The account number" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Name*</Form.Label>
              <Form.Control type="text" placeholder="The company name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Name Alternate</Form.Label>
              <Form.Control
                type="text"
                placeholder="The company name alternate"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Category*</Form.Label>
              <Form.Control type="text" placeholder="The company category" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>VAT Number</Form.Label>
              <Form.Control type="text" placeholder="The company VAT number" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Payment terms (Days)*</Form.Label>
              <Form.Control type="number" placeholder="0" />
            </Form.Group>
          </Col>
          <Col sm={4} xs={5}>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Credit Limit (USD)</Form.Label>
              <Form.Control type="number" placeholder="0.00" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Current Balance (USD)</Form.Label>
              <Form.Control type="number" placeholder="0.00" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Current Group Balance (USD)</Form.Label>
              <Form.Control type="number" placeholder="0.00" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Days to Pay</Form.Label>
              <Form.Control type="number" placeholder="0.00" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Category Days to Pay</Form.Label>
              <Form.Control type="number" placeholder="0.00" />
            </Form.Group>
          </Col>
        </Row>
      </Form>
    </div>
  );
}
