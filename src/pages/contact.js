import React, { useState } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Typography, Layout as AntLayout, Row, Col, Divider } from "antd"
import ContactForm from "../components/contact/contactForm"
import { createFromIconfontCN } from "@ant-design/icons"
import "./contact.less"

const Contact = () => {
  const { Content } = AntLayout
  const { Paragraph, Title } = Typography

  const IconFont = createFromIconfontCN({
    scriptUrl: "//at.alicdn.com/t/font_1924584_aexiew2uowj.js",
  })

  const images = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo-transparent.png" }) {
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
      <SEO title="Contact" />
      <Content
        id="contact"
        className="content-padding main-content"
        data-sal="fade"
        data-sal-duration="700"
        data-sal-easing="ease"
      >
        <Row justify="center" gutter={52}>
          <Col xs={24} md={12}>
            <div style={{ maxWidth: 350, margin: "auto" }}>
              <Img
                fluid={images.logo.childImageSharp.fluid}
                alt="Commercial Cannabis Logo"
                style={{ marginBottom: 70 }}
              />
            </div>

            <ContactForm />
          </Col>
        </Row>

        <div style={{ textAlign: "right" }}>
          <Link to="/">Go back to the homepage</Link>
        </div>
      </Content>
    </Layout>
  )
}

export default Contact
