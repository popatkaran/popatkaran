import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export default function Dashboard({ data }) {
  return (
    <Container className="dashboard top-padding-required" id="dashboard">
      <Row data-masonry='{"percentPosition": true }'>
        {/* <DashboardCardImageAndTitle
              image={LogoLight}
              title={'Karan Popat'}
            /> */}
        {data.allMarkdownRemark.group.map((contentGroup, index) => {
          return (
            <Col
              xs={12}
              sm={6}
              md={6}
              lg={6}
              xl={4}
              xxl={3}
              className="dashboard-tile"
              id={index}
            >
              <div class="card-big-shadow">
                <div class="card card-text-only">
                  <div class="content">
                    <h3 class="title">{contentGroup.fieldValue}</h3>
                    <ul className="description">
                      {contentGroup.nodes.map((navigationLink) => {
                        return (
                          <li>
                            <a
                              href={navigationLink.frontmatter.slug}
                              title={navigationLink.frontmatter.title}
                            >
                              {navigationLink.frontmatter.title}
                            </a>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </Col>
          )
        })}
      </Row>
    </Container>
  )
}
