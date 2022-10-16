import { Pagination } from "components";
import React from "react";
import { Col, Row, Table } from "react-bootstrap";
import {
  CardList,
  Flag,
  Link as BootstrapLinkIcon,
} from "react-bootstrap-icons";
import { Link } from "react-router-dom";

export default function CompaniesTable({ companies }) {
  const [limit, setLimit] = React.useState(5);
  const [page, setPage] = React.useState(1);
  const [pagesCount, setPagesCount] = React.useState(1);

  React.useEffect(() => {
    const pagesCount = Math.ceil(
      companies?.length ? companies.length / limit : 0
    );
    setPagesCount(pagesCount);
  }, [limit, companies]);

  return (
    <div className="bg-gray-3">
      <Table responsive>
        <thead className="bg-secondary">
          <tr>
            <th>
              <h6 className="text-white fs-5">Company</h6>
            </th>
            <th className="d-none d-md-table-cell">
              <h6 className="text-white fs-5">Credit Limit </h6>
            </th>
            <th className="d-none d-md-table-cell">
              <h6 className="text-white fs-5">Balance</h6>
            </th>
            <th className="d-none d-md-table-cell">
              <h6 className="text-white fs-5"> </h6>
            </th>
          </tr>
        </thead>
        <tbody className="bg-gray-3 h-100">
          {companies &&
            companies
              .slice(limit * page - limit, limit * page)
              .map(({ id, name, address, contact, limit, balance }, index) => (
                <tr
                  className="border border-3 border-white align-middle"
                  key={index}
                >
                  <td className="d-md-none">
                    <Row>
                      <Col xs={12}>
                        <p className="fs-xs text-gray">Travel Agent</p>
                      </Col>
                      <Col xs={12} className="mb-1">
                        <p className="text-gray-4">
                          <span className="text-black">
                            A/R#{id}: {name}
                          </span>
                          - {address}
                        </p>
                      </Col>
                      <Col xs={12} className="mb-2">
                      <p className="text-gray-1">
                      contact: {contact.join(", ")}{" "}
                    </p>
                      </Col>
                      <Col xs={4} className="mb-2">
                        <p className="text-gray text-center">limit</p>
                        <p className="text-center">{limit} USD</p>
                      </Col>
                      <Col xs={4} className="mb-2">
                        <p className="text-gray text-center">balance</p>
                        <p className="text-center">{balance} USD</p>
                      </Col>
                      <Col xs={6} className="mb-2">
                        <ul className="d-flex list-unstyled gap-1 m-0 align-items-center">
                          <li>
                            <BootstrapLinkIcon className="fs-4" />
                          </li>
                          <li>
                            <Flag className="fs-5" />
                          </li>
                          <li>
                            <CardList className="fs-4" />
                          </li>
                        </ul>
                      </Col>
                      <Col xs={6} className="mb-2">
                      <Link to={`/company-profile/${name}`} className="text-blue">
                      Edit
                    </Link>
                      </Col>
                    </Row>
                  </td>
                  <td className="d-none d-md-table-cell" style={{ minWidth: 300 }}>
                    <p className="fs-xs text-gray">Travel Agent</p>
                    <p className="text-gray-4">
                      <span className="text-black">
                        A/R#{id}: {name}
                      </span>
                      - {address}
                    </p>
                    <p className="text-gray-1">
                      contact: {contact.join(", ")}{" "}
                    </p>
                    <Link to={`/company-profile/${name}`} className="text-blue">
                      Edit
                    </Link>
                  </td>
                  <td className="d-none d-md-table-cell">
                    <p className="fs-5">{limit} USD</p>
                  </td>
                  <td className="d-none d-md-table-cell">
                    <p className="fs-5">{balance} USD</p>
                  </td>
                  <td className="d-none d-md-table-cell">
                    <ul className="d-flex list-unstyled gap-2 justify-content-end m-0 align-items-center">
                      <li>
                        <BootstrapLinkIcon className="fs-4" />
                      </li>
                      <li>
                        <Flag className="fs-5" />
                      </li>
                      <li>
                        <CardList className="fs-4" />
                      </li>
                    </ul>
                  </td>
                </tr>
              ))}
        </tbody>
      </Table>
      <Pagination
        limit={limit}
        setLimit={setLimit}
        page={page}
        setPage={setPage}
        total={companies?.length}
        pagesCount={pagesCount}
      />
    </div>
  );
}
