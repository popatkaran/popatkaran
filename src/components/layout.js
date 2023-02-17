import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql, withPrefix } from 'gatsby'
import HamburgerMenu from './menu'

import '../assets/css/popatkaran.css'

import Header from './header'
import LogoHeader from '../../content/images/general/logo-dark.png'

//import Footer from './footer';
//import LogoFooter from '../../content/images/general/logo-light.png';

class Layout extends Component {
  render() {
    const { children } = this.props
    return (
      <StaticQuery
        query={graphql`
          {
            site {
              siteMetadata {
                title
                description
                keywords
                author
                url
              }
            }
          }
        `}
        render={(data) => (
          <>
            <Helmet
              title={data.site.siteMetadata.title}
              meta={[
                {
                  name: 'description',
                  content: `${data.site.siteMetadata.description}`,
                },
                {
                  name: 'keywords',
                  content: `${data.site.siteMetadata.keywords}`,
                },
              ]}
            >
              <script src={withPrefix('script.js')} type="text/javascript" />
              <html lang="en" />
            </Helmet>
            <div className="page-wrapper">
              <HamburgerMenu />

              <Header siteInfo={data.site.siteMetadata} logo={LogoHeader} />
              {children}
              {/* <Footer siteInfo={data.site.siteMetadata} logo={LogoFooter} /> */}
            </div>
          </>
        )}
      />
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
