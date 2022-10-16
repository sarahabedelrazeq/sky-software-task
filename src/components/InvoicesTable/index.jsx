import classNames from "classnames";
import { Pagination } from "components";
import React from "react";
import { Table, Row, Col, Button } from "react-bootstrap";
import {
  CardList,
  ChevronLeft,
  ChevronRight,
  Download,
  Flag,
  Link45deg,
  SendFill,
} from "react-bootstrap-icons";

export default function InvoicesTable({ invoices, setDownload }) {
  const [limit, setLimit] = React.useState(5);
  const [page, setPage] = React.useState(1);
  const [pagesCount, setPagesCount] = React.useState(1);

  React.useEffect(() => {
    const pagesCount = Math.ceil(
      invoices?.length ? invoices.length / limit : 0
    );
    setPagesCount(pagesCount);
  }, [limit, invoices]);

  return (
    <div className="bg-gray-3">
      <Table responsive>
        <thead className="bg-secondary">
          <tr>
            <th>
              <h6 className="text-white fs-5">Invoice</h6>
            </th>

            <th className="d-none d-md-table-cell">
              <h6 className="text-white fs-5"> </h6>
            </th>
            <th className="d-none d-md-table-cell">
              <h6 className="text-white fs-5">Amount </h6>
            </th>
            <th className="d-none d-md-table-cell">
              <h6 className="text-white fs-5">Remaining</h6>
            </th>
            <th className="d-none d-md-table-cell">
              <h6 className="text-white fs-5"> </h6>
            </th>
          </tr>
        </thead>
        <tbody className="h-100">
          {invoices &&
            invoices
              .slice(limit * page - limit, limit * page)
              .map(
                (
                  { id, date, name, note, amount, remaining, status, folio },
                  index
                ) => (
                  <tr
                    className="border border-3 border-white align-middle"
                    key={index}
                  >
                    <td className="d-md-none">
                      <Row>
                        <Col xs={12}>
                          <p className="fs-xs text-gray">{date}</p>
                        </Col>
                        <Col xs={12} className="mb-1">
                          <p className="fs-6 text-gray-4">
                            <span className="text-black fw-normal fs-6">
                              INV#{id}: {name} -{" "}
                            </span>
                            <span className="d">
                              {status === -1 ? (
                                <Button
                                  className="fs-xs text-white py-0 px-2"
                                  style={{ width: 80 }}
                                  variant="red"
                                >
                                  Issued
                                </Button>
                              ) : status === 1 ? (
                                <Button
                                  className="fs-xs text-white py-0 px-2"
                                  style={{ width: 80 }}
                                  variant="primary"
                                >
                                  Submitted
                                </Button>
                              ) : (
                                <Button
                                  className="fs-xs text-white py-0 px-2"
                                  style={{ width: 80 }}
                                  variant="green"
                                >
                                  Paid
                                </Button>
                              )}
                              <br />
                            </span>
                          </p>
                        </Col>
                        <Col xs={12} className="mb-2">
                          <p className="fs-6 text-gray-1">
                            Folio #, {folio}
                            {note}
                          </p>
                        </Col>
                        <Col xs={4} className="mb-2">
                          <p className="text-gray text-center">Amount</p>
                          <p className="text-center">{amount} USD</p>
                        </Col>
                        <Col xs={4} className="mb-2">
                          <p className="text-gray text-center">Remaining</p>
                          <p className="text-center">{remaining} USD</p>
                        </Col>
                        <Col xs={12} className="mb-2">
                          <ul className="d-flex list-unstyled gap-1 m-0 p-0 align-items-center">
                            <li onClick={setDownload}>
                              <Button variant="text" className="p-0 border-0">
                                <Download className="fs-4" />
                              </Button>
                            </li>
                            <li>
                              <SendFill className="fs-5" />
                            </li>
                            <li>
                              <Link45deg className="fs-4" />
                            </li>
                            <li>
                              <Flag className="fs-4" />
                            </li>
                            <li>
                              <CardList className="fs-4" />
                            </li>
                          </ul>
                        </Col>
                      </Row>
                    </td>
                    <td className="d-none d-md-table-cell" style={{ minWidth: 300 }}>
                      {" "}
                      <div>
                        <p className="fs-xs text-gray">{date}</p>
                        <p className="text-gray-4">
                          <span className="text-black fw-normal">
                            INV#{id}: {name}
                          </span>
                          - Folio #{folio}
                        </p>
                        <p className="text-gray-1">{note}</p>
                      </div>
                    </td>
                    <td className="d-none d-md-table-cell">
                      {status === -1 ? (
                        <Button
                          className="fs-xs text-white py-0"
                          style={{ width: 100 }}
                          variant="red"
                        >
                          Issued
                        </Button>
                      ) : status === 1 ? (
                        <Button
                          className="fs-xs text-white py-0"
                          style={{ width: 100 }}
                          variant="primary"
                        >
                          Submitted
                        </Button>
                      ) : (
                        <Button
                          className="fs-xs text-white py-0"
                          style={{ width: 100 }}
                          variant="green"
                        >
                          Paid
                        </Button>
                      )}
                    </td>
                    <td className="d-none d-md-table-cell">
                      <p className="fs-5">{amount} USD</p>
                    </td>
                    <td className="d-none d-md-table-cell">
                      <p className="fs-5">{remaining} USD</p>
                    </td>
                    <td className="d-none d-md-table-cell">
                      <ul className="d-flex list-unstyled gap-2 justify-content-end m-0 align-items-center">
                        <li onClick={setDownload}>
                          <Button variant="text" className="p-0 border-0">
                            <Download className="fs-4" />
                          </Button>
                        </li>
                        <li>
                          <SendFill className="fs-5" />
                        </li>
                        <li>
                          <Link45deg className="fs-4" />
                        </li>
                        <li>
                          <Flag className="fs-4" />
                        </li>
                        <li>
                          <CardList className="fs-4" />
                        </li>
                      </ul>
                    </td>
                  </tr>
                )
              )}
        </tbody>
      </Table>
      <Pagination
        limit={limit}
        setLimit={setLimit}
        page={page}
        setPage={setPage}
        total={invoices?.length}
        pagesCount={pagesCount}
      />
    </div>
  );
}
