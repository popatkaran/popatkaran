import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'

const Vishva = () => (
  <Layout>
    <Helmet>
      <title>Vishva Pujara</title>
      <meta name="title" value="Karan Popat" />
      <script
        src="https://cdn.jsdelivr.net/npm/masonry-layout@4.2.2/dist/masonry.pkgd.min.js"
        integrity="sha384-GNFwBvfVxBkLMJpYMOABq3c+d3KnQxudP/mGPkzpZSTYykLBNsZEnG2D9G/X/+7D"
        crossorigin="anonymous"
        async
      ></script>
    </Helmet>
    <Container className="top-padding-required" id="vishva-resume">
      <Row>
        <Col lg={1}></Col>
        <Col lg={7} className="col-left">
          <Row>
            <Col>
              <h2>Professional Summary</h2>
              <div className="text">
                I am a Data Science intern inspired by automation technologies
                during my job as Finance Executive at Axis bank India. I learned
                Python and completed a Data Science Bootcamp to direct my career
                as a Data Scientist. Looking forwards to helping the community
                by processing large-scale data with automation using Machine
                learning & AI.
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <h2>Experience</h2>
              <h4>Data Science Intern: December 2022</h4>
              <ul>
                <li>Power Bi in Data Analytics Virtual Case Experience</li>
              </ul>
              <h4>Career break: October 2019 - September 2022</h4>
              <h4>Axis bank Pvt. Ltd.: June 2018 - September 2019</h4>
              <ul>
                <li>
                  Handled corporate account Bank Reconciliation, managed their
                  accounts and offered financial advice regarding investments
                  and savings.
                </li>
                <li>
                  CRM of privileged account holders and Advice customers for
                  financial investment via bank
                </li>
                <li>
                  Cross-selling of banking products like insurance, investments,
                  account opening, and credit cards
                </li>
                <li>
                  I'm handling the daily reconciliation of payments as well as
                  maintaining incoming and outgoing cash records.
                </li>
              </ul>
            </Col>
          </Row>
          <Row>
            <Col>
              <h2>Education</h2>
              <h4>Data Science Bootcamp: October 2022- December 2022</h4>
            </Col>
          </Row>
          <Row>
            <Col>Row 4</Col>
          </Row>
          <Row>
            <Col>Row 5</Col>
          </Row>
        </Col>
        <Col lg={3} className="col-right">
          <Row>
            <Col>
              <h2>Professional Summary</h2>
              <div className="text">
                I am a Data Science intern inspired by automation technologies
                during my job as Finance Executive at Axis bank India. I learned
                Python and completed a Data Science Bootcamp to direct my career
                as a Data Scientist. Looking forwards to helping the community
                by processing large-scale data with automation using Machine
                learning & AI.
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <h2>Experience</h2>
              <h4>Data Science Intern: December 2022</h4>
              <ul>
                <li>Power Bi in Data Analytics Virtual Case Experience</li>
              </ul>
              <h4>Career break: October 2019 - September 2022</h4>
              <h4>Axis bank Pvt. Ltd.: June 2018 - September 2019</h4>
              <ul>
                <li>
                  Handled corporate account Bank Reconciliation, managed their
                  accounts and offered financial advice regarding investments
                  and savings.
                </li>
                <li>
                  CRM of privileged account holders and Advice customers for
                  financial investment via bank
                </li>
                <li>
                  Cross-selling of banking products like insurance, investments,
                  account opening, and credit cards
                </li>
                <li>
                  I'm handling the daily reconciliation of payments as well as
                  maintaining incoming and outgoing cash records.
                </li>
              </ul>
            </Col>
          </Row>
          <Row>
            <Col>
              <h2>Education</h2>
              <h4>Data Science Bootcamp: October 2022- December 2022</h4>
            </Col>
          </Row>
          <Row>
            <Col>Row 4</Col>
          </Row>
          <Row>
            <Col>Row 5</Col>
          </Row>
        </Col>
        <Col lg={1}></Col>
      </Row>
    </Container>
  </Layout>
)
export default Vishva
