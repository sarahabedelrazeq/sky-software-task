import classNames from "classnames";
import React from "react";
import { Col, Pagination as BootstrapPagination, Row } from "react-bootstrap";
import { ChevronLeft, ChevronRight } from "react-bootstrap-icons";

export default function Pagination({
  limit,
  setLimit,
  page,
  setPage,
  total,
  pagesCount,
}) {
  return (
    <div className="border-top border-bottom border-gray-2 py-2 px-3">
      <Row>
        <Col md={6} xs={4}>
          <BootstrapPagination>
            <BootstrapPagination.Item
              active={limit === 5}
              onClick={() => setLimit(5)}
              className="table-pagination-item text-black"
            >
              5
            </BootstrapPagination.Item>
            <BootstrapPagination.Item
              active={limit === 20}
              onClick={() => setLimit(20)}
              className="table-pagination-item text-black"
            >
              20
            </BootstrapPagination.Item>
            <BootstrapPagination.Item
              active={limit === 50}
              onClick={() => setLimit(50)}
              className="table-pagination-item text-black"
            >
              50
            </BootstrapPagination.Item>
          </BootstrapPagination>
        </Col>
        <Col md={6} xs={8} className="d-flex gap-4 align-items-center justify-content-end">
          <div className="d-none d-sm-block">
            <p>
              Page {page} of 1 ({total} items)
            </p>
          </div>
          <div>
            <BootstrapPagination>
              <BootstrapPagination.Item
                disabled={page === 1}
                className={classNames("table-pagination-item", {
                  "text-gray": page === 1,
                  "text-black": page !== 1,
                })}
                onClick={() => setPage((prev) => prev - 1)}
              >
                <ChevronLeft />
              </BootstrapPagination.Item>
              {pagesCount <= 5 ? (
                Array(pagesCount)
                  .fill(0)
                  .map((_, index) => (
                    <BootstrapPagination.Item
                      active={index === page - 1}
                      className="table-pagination-item text-black"
                      onClick={() => setPage(index + 1)}
                      key={index}
                    >
                      {index + 1}
                    </BootstrapPagination.Item>
                  ))
              ) : (
                <>
                  {page !== 1 && (
                    <BootstrapPagination.Ellipsis
                      className="table-pagination-item text-black"
                      disabled
                    />
                  )}
                  <BootstrapPagination.Item
                    active
                    className="table-pagination-item text-black"
                    onClick={() => setPage(page)}
                  >
                    {page}
                  </BootstrapPagination.Item>
                  {page !== pagesCount && (
                    <BootstrapPagination.Ellipsis
                      className="table-pagination-item text-black"
                      disabled
                    />
                  )}
                </>
              )}
              <BootstrapPagination.Item
                disabled={page === pagesCount}
                className={classNames("table-pagination-item", {
                  "text-gray": page === pagesCount,
                  "text-black": page !== pagesCount,
                })}
                onClick={() => setPage((prev) => prev + 1)}
              >
                <ChevronRight />
              </BootstrapPagination.Item>
            </BootstrapPagination>
          </div>
        </Col>
      </Row>
    </div>
  );
}
