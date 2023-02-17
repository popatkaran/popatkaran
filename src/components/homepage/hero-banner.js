import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'

import LogoLight from '../../../content/images/general/logo-dark.png'

export default function HeroBanner() {
  return (
    <Container
      className="welcome my-auto align-middle flex-container"
      id="welcome"
    >
      <Row className="text-center">
        <Col>
          <Image
            className="center-block  img-responsive"
            src={LogoLight}
            alt="Karan Popat"
          />
        </Col>
      </Row>
      <Row className="text-center">
        <Col>
          <span className="logo-text-light">Karan Popat | </span>
          <span className="workfunction">PHP & GO Backend Developer</span>
        </Col>
      </Row>
      <Row className="text-center bottom">
        <Col>
          {/* <Row>
            <Clock />
          </Row> */}
          <Row>
            <Col sm={12} md={4} className="home-dashboard-link">
              <a href={'/about'} title="About">
                About
              </a>
            </Col>
            <Col sm={12} md={4} className="home-dashboard-link">
              <a href={'/dashboard'} title="Dashboard">
                Dashboard
              </a>
            </Col>
            <Col sm={12} md={4} className="home-dashboard-link">
              <a href={'/contact'} title="Contact">
                Contact
              </a>
            </Col>
          </Row>
        </Col>
        {/* <Col sm={12} className="uppercase">
          the sky is shiny and glittery when we see from earth, one can
          experience darkness after reaching there
        </Col> */}
      </Row>
    </Container>
  )
}
