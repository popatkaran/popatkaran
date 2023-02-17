import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Col } from 'react-bootstrap'
import Clock from 'react-live-clock'

const MyClock = () => (
  <StaticQuery
    query={graphql`
      {
        allClocksYaml(filter: { clock: {} }, sort: { clock: { order: ASC } }) {
          nodes {
            clock {
              timezone
              title
            }
          }
        }
      }
    `}
    render={(data) => (
      <>
        {data.allClocksYaml.nodes.map((clockData, index) => {
          return (
            <Col sm={6} lg={6} className="gb-clock mobile-no-display">
              <div className="card-big-shadow">
                <div className="card">
                  <div className="content">
                    <h1>{clockData.clock.title}</h1>
                    <Clock
                      format={'dddd, MMMM Do YYYY, HH:mm:ss'}
                      ticking={true}
                      timezone={clockData.clock.timezone}
                      className="gb-clock"
                    />
                  </div>
                </div>
              </div>
            </Col>
          )
        })}
      </>
    )}
  ></StaticQuery>
)

export default MyClock
