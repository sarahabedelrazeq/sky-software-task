import { InvoicesTable, SidePanel } from "components";
import { useFetch } from "hooks";
import React from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import { FileEarmarkPdf } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

export default function Invoices() {
  const [invoices, getInvoices] = useFetch({
    endpoint: "invoices.json",
  });
  const [download, setDownload] = React.useState(false);
  const [submit, setSubmit] = React.useState(false);

  React.useEffect(() => {
    getInvoices();
  }, [getInvoices]);
  return (
    <div>
      <Row className="justify-content-between g-4">
        <Col xl={9} lg={8} xs={12}>
          <InvoicesTable
            setDownload={() => setDownload(true)}
            invoices={invoices.data}
          />
        </Col>
        <Col xl={3} lg={4} xs={12} className="d-none d-lg-block">
          <Row className="g-4">
            <Col xs={12}>
              <SidePanel.Summary
                items={[
                  {
                    name: "Standing Balance (USD)",
                    color: "red",
                    number: "24,200",
                  },
                  {
                    name: "Days to Pay",
                    color: "green",
                    number: "127",
                  },
                  {
                    name: "Category Days to Pay",
                    color: "black",
                    number: "145",
                  },
                ]}
              />
            </Col>
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
      <Modal
        show={download}
        onHide={() => setDownload(false)}
        size="lg"
        centered
      >
        <Modal.Header className="px-xl-5 border-0">
          <Modal.Title className="fs-2 fw-lighter">
            Download Invoice Copy
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="px-xl-5">
          <div className="d-flex bg-gray-3 border border-gray-2 py-2 px-3 mb-4">
            <div>
              <p className="fs-xs text-gray">30/10/2021</p>
              <p className="text-gray-4">
                <span className="text-black fw-normal">
                  INV #14532: HUSSAM AL-KHALDI
                </span>
                - Folio #1254,
              </p>
              <p className="text-gray-1">
                Additional notes on the invoice (i.e. the supplement)
              </p>
            </div>
            <div>
              <Button
                className="fs-xs text-white py-0"
                style={{ width: 100 }}
                variant="red"
              >
                Issued
              </Button>
            </div>
          </div>
          <div>
            <Form.Group className="mb-3 w-50">
              <Form.Label className="text-gray">Excel Template *</Form.Label>
              <Form.Select className="text-gray-2" defaultValue={0}>
                <option value={0} disabled>
                  select ...
                </option>
              </Form.Select>
            </Form.Group>
          </div>
        </Modal.Body>
        <Modal.Footer className="px-xl-5">
          <Button
            variant="primary"
            className="text-white"
            onClick={() => {
              setDownload(false);
              setSubmit(true);
            }}
          >
            Download
          </Button>
          <Button
            variant="white"
            className="border-gray-2"
            onClick={() => setDownload(false)}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={submit} onHide={() => setSubmit(false)} size="lg" centered>
        <Modal.Header className="px-xl-5 border-0">
          <Modal.Title className="fs-2 fw-lighter">
            Submit Invoice Copy
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="px-xl-5">
          <div className="d-flex bg-gray-3 border border-gray-2 py-2 px-3 mb-4">
            <div>
              <p className="fs-xs text-gray">30/10/2021</p>
              <p className="text-gray-4">
                <span className="text-black fw-normal">
                  INV #14532: HUSSAM AL-KHALDI
                </span>
                - Folio #1254,
              </p>
              <p className="text-gray-1">
                Additional notes on the invoice (i.e. the supplement)
              </p>
            </div>
            <div>
              <Button
                className="fs-xs text-white py-0"
                style={{ width: 100 }}
                variant="red"
              >
                Issued
              </Button>
            </div>
          </div>
          <div className="mb-4">
            <Form.Group className="mb-3 w-50">
              <Form.Label className="text-gray">Contact *</Form.Label>
              <Form.Select className="text-gray-2" defaultValue={0}>
                <option value={0} disabled>
                  select ...
                </option>
              </Form.Select>
            </Form.Group>
          </div>
          <div>
            <p className="fs-6">Invoice Copy</p>
            <div className="bg-gray-3 border border-gray-2 py-2 px-3 mb-4 d-flex gap-2 justify-content-center">
              <div>
                <FileEarmarkPdf className="fs-3" />
              </div>
              <div>
                <p className="text-center text-gray-1">
                  Drop your Invoice here to upload
                </p>
                <Link to="/" className="text-center d-block">
                  Upload
                </Link>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="px-xl-5">
          <Button
            variant="primary"
            className="text-white"
            onClick={() => setSubmit(false)}
          >
            Submit
          </Button>
          <Button
            variant="white"
            className="border-gray-2"
            onClick={() => setSubmit(false)}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
