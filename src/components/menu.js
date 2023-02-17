import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import { StaticQuery, graphql, Link } from 'gatsby'
import { slide as Menu } from 'react-burger-menu'

import LogoLight from '../../content/images/general/logo-dark.png'

export default function HamburgerMenu() {
  return (
    <StaticQuery
      query={graphql`
        {
          allMenuLinksYaml {
            nodes {
              link {
                title
                url
              }
            }
          }
        }
      `}
      render={(data) => (
        <Menu right className="mobile-menu">
          <Container className="text-center">
            <Row className="brand-logo">
              <Col>
                <Image
                  className="center-block img-responsive"
                  src={LogoLight}
                  alt="Karan Popat"
                />
              </Col>
            </Row>
            <Row className="brand-tagline">
              <Col>
                <span>Karan Popat</span>
              </Col>
            </Row>
            <Row className="menu-links">
              <Col>
                <ul>
                  {data.allMenuLinksYaml.nodes.map((menuItem) => {
                    return (
                      <li>
                        <Link
                          className="links"
                          to={menuItem.link.url}
                          title={menuItem.link.title}
                        >
                          {menuItem.link.title}
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </Col>
            </Row>
          </Container>
        </Menu>
      )}
    ></StaticQuery>
  )
}
