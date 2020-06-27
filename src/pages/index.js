import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

import { Button } from "antd"
import "./index.less"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "logo-transparent.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Home" />
      <div className="top-container">
        <div className="logo-container">
          <Img fluid={data.placeholderImage.childImageSharp.fluid} alt="Logo" />
        </div>
      </div>
      <Button type="primary">Primary</Button>
    </Layout>
  )
}

export default IndexPage
