/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import { Layout as AntLayout } from "antd"

import Header from "./header"

const Layout = ({ children }) => {
  const { Content, Footer } = AntLayout

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />

      <Content>{children}</Content>
      <Footer>
        © {new Date().getFullYear()}, Built by
        {` `}
        <a href="https://www.fabriciobezerra.com">Fabricio Bezerra</a>
      </Footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
