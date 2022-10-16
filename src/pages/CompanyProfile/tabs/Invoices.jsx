import { InvoicesTable, SidePanel } from "components";
import AgingChart from "components/SidePanel/AgingChart";
import { useFetch } from "hooks";
import React from "react";
import { Col, Row } from "react-bootstrap";

export default function Invoices() {
  const [invoices, getInvoices] = useFetch({
    endpoint: "invoices.json",
  });

  React.useEffect(() => {
    getInvoices();
  }, [getInvoices]);
  return (
    <div>
      <Row className="justify-content-between g-4">
        <Col lg={9} xs={12}>
          <InvoicesTable invoices={invoices.data} />
        </Col>
        <Col xl={3} lg={4} xs={12} className="d-none d-lg-block">
          <Row className="g-4">
            <Col xs={12}>
              <SidePanel.Aging />
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
