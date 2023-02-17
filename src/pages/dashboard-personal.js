import { StaticQuery, graphql } from 'gatsby'
import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'

import Dashboard from '../templates/dashboard'

const DashboardPersonal = () => (
  <StaticQuery
    query={graphql`
      {
        allMarkdownRemark(
          sort: { frontmatter: { order: ASC } }
          filter: { frontmatter: { type: { eq: "personal" } } }
        ) {
          group(field: { frontmatter: { category: SELECT } }) {
            nodes {
              frontmatter {
                title
                slug
              }
            }
            fieldValue
          }
        }
      }
    `}
    render={(data) => (
      <Layout>
        <Helmet>
          <title>Dashboard | Karan Popat</title>
          <meta name="title" value="Dashboard" />
          <meta name="Dashboard" />
          <script
            src="https://cdn.jsdelivr.net/npm/masonry-layout@4.2.2/dist/masonry.pkgd.min.js"
            integrity="sha384-GNFwBvfVxBkLMJpYMOABq3c+d3KnQxudP/mGPkzpZSTYykLBNsZEnG2D9G/X/+7D"
            crossorigin="anonymous"
            async
          ></script>
        </Helmet>
        <Dashboard data={data} />
      </Layout>
    )}
  ></StaticQuery>
)

export default DashboardPersonal
