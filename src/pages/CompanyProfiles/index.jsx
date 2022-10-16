import { SidePanel, CompaniesTable } from "components";
import { Main } from "components/Layouts";
import { useFetch } from "hooks";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export default function CompanyProfiles() {
  const [companies, getCompanies] = useFetch({
    endpoint: "companies.json",
  });

  React.useEffect(() => {
    getCompanies();
  }, [getCompanies]);

  return (
    <Main
      id="company-profiles_page"
      breadcrumb={[
        { link: "/", title: "Home" },
        { link: "/company-profiles", title: "Company Profiles" },
      ]}
    >
      <section id="company-profiles-section">
        <Container>
          <Row className="justify-content-between g-4">
            <Col xl={9} lg={8} xs={12}>
              <CompaniesTable companies={companies.data} />
            </Col>
            <Col xl={3} lg={4} xs={12} className="d-none d-lg-block">
              <Row className="g-4">
                <Col xs={12}>
                  <SidePanel.Actions
                    title="Due Follow-Up"
                    items={[
                      {
                        name: "INN TOURS & TRAVEL",
                        description: "Collect 50% of Anwar event invoice",
                        date: " 01/02/2021 10:00 EST ",
                      },
                      {
                        name: "INN TOURS & TRAVEL",
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
                      {
                        title: "Companies exceeding credit lim",
                        link: "/",
                      },
                    ]}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </Main>
  );
}
