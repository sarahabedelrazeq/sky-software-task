import classNames from "classnames";
import React from "react";
import { Table, Pagination, Row, Col, Button } from "react-bootstrap";
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

            <th>
              <h6 className="text-white fs-5"> </h6>
            </th>
            <th>
              <h6 className="text-white fs-5">Amount </h6>
            </th>
            <th>
              <h6 className="text-white fs-5">Remaining</h6>
            </th>
            <th>
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
                    <td>
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
                    <td>
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
                    <td>
                      <p className="fs-5">{amount} USD</p>
                    </td>
                    <td>
                      <p className="fs-5">{remaining} USD</p>
                    </td>
                    <td>
                      <ul className="d-flex list-unstyled gap-2 justify-content-end m-0 align-items-center">
                        <li onClick={setDownload}>
                          <Button variant="text">
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
      <div className="border-top border-bottom border-gray-2 py-2 px-3">
        <Row>
          <Col xs={6}>
            <Pagination>
              <Pagination.Item
                active={limit === 5}
                onClick={() => setLimit(5)}
                className="table-pagination-item text-black"
              >
                5
              </Pagination.Item>
              <Pagination.Item
                active={limit === 20}
                onClick={() => setLimit(20)}
                className="table-pagination-item text-black"
              >
                20
              </Pagination.Item>
              <Pagination.Item
                active={limit === 50}
                onClick={() => setLimit(50)}
                className="table-pagination-item text-black"
              >
                50
              </Pagination.Item>
            </Pagination>
          </Col>
          <Col xs={3}>
            <p>
              Page {page} of 1 ({invoices?.length} items)
            </p>
          </Col>
          <Col xs={3}>
            <Pagination>
              <Pagination.Item
                disabled={page === 1}
                className={classNames("table-pagination-item", {
                  "text-gray": page === 1,
                  "text-black": page !== 1,
                })}
                onClick={() => setPage((prev) => prev - 1)}
              >
                <ChevronLeft />
              </Pagination.Item>
              {pagesCount <= 5 ? (
                Array(pagesCount)
                  .fill(0)
                  .map((_, index) => (
                    <Pagination.Item
                      active={index === page - 1}
                      className="table-pagination-item text-black"
                      onClick={() => setPage(index + 1)}
                      key={index}
                    >
                      {index + 1}
                    </Pagination.Item>
                  ))
              ) : (
                <>
                  {page !== 1 && (
                    <Pagination.Ellipsis
                      disabled
                      className="table-pagination-item text-black"
                    />
                  )}
                  <Pagination.Item
                    active
                    className="table-pagination-item text-black"
                    onClick={() => setPage(page)}
                  >
                    {page}
                  </Pagination.Item>
                  {page !== pagesCount && (
                    <Pagination.Ellipsis
                      disabled
                      className="table-pagination-item text-black"
                    />
                  )}
                </>
              )}
              <Pagination.Item
                disabled={page === pagesCount}
                className={classNames("table-pagination-item", {
                  "text-gray": page === pagesCount,
                  "text-black": page !== pagesCount,
                })}
                onClick={() => setPage((prev) => prev + 1)}
              >
                <ChevronRight />
              </Pagination.Item>
            </Pagination>
          </Col>
        </Row>
      </div>
    </div>
  );
}
