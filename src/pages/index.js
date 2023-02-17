import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'

import LogoLight from '../../content/images/general/logo-dark.png'
import MyClock from '../components/clock'

const Home = () => (
  <Layout>
    <Helmet>
      <title>Karan Popat</title>
      <meta name="title" value="Karan Popat" />
      <script
        src="https://cdn.jsdelivr.net/npm/masonry-layout@4.2.2/dist/masonry.pkgd.min.js"
        integrity="sha384-GNFwBvfVxBkLMJpYMOABq3c+d3KnQxudP/mGPkzpZSTYykLBNsZEnG2D9G/X/+7D"
        crossorigin="anonymous"
        async
      ></script>
    </Helmet>
    <Container className="top-padding-required" id="welcome">
      <Row>
        <Col className="text-center">
          <Image
            className="center-block img-responsive"
            src={LogoLight}
            title="Karan Popat"
          />
        </Col>
      </Row>
      <Row className="index-footer">
        <MyClock />
      </Row>
    </Container>
  </Layout>
)
export default Home
