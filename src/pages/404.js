import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import { Helmet } from "react-helmet"

const PageNotFound = () => (
  <>
    <Helmet>
      <title>Home | Karan Popat</title>
      <meta name="title" value="Home" />
      <meta name="Home" />
    </Helmet>
    <Container
      className="welcome my-auto align-middle flex-container"
      id="welcome"
    >
      <Row className="text-center">
        <Col sm={12}>
          <a href={"/dashboard"} title="About me">
            Dashboard
          </a>
        </Col>
      </Row>
    </Container>
  </>
)

export default PageNotFound
