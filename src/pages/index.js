import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import homeContent from "../content/files/home.json"
import ReactMarkdown from "react-markdown"

import { Typography, Row, Col, Divider, Layout as AntLayout } from "antd"
import "./index.less"

const IndexPage = () => {
  const { Title, Paragraph } = Typography
  const { Content } = AntLayout

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
      <SEO title="Home" />
      <div className="top-container">
        <div
          className="logo-container"
          data-sal="fade"
          data-sal-duration="500"
          data-sal-easing="ease"
        >
          <Img
            fluid={images.logo.childImageSharp.fluid}
            alt="Commercial Cannabis Logo"
          />
        </div>
      </div>
      {homeContent.text_sections && (
        <Content className="main-content content-padding">
          {homeContent.text_sections.map((section, index) => (
            <>
              <Row
                gutter={48}
                className="section"
                justify="center"
                data-sal="fade"
                data-sal-duration="700"
                data-sal-easing="ease"
              >
                <Col
                  xs={{ span: 24, order: 1 }}
                  sm={{ span: 8, order: index % 2 === 0 ? 1 : 2 }}
                  className="artsy"
                >
                  <Title
                    level={2}
                    style={{
                      fontSize:
                        section.highlight.length < 80 ? "2rem" : "1.7rem",
                    }}
                  >
                    {section.highlight}
                  </Title>
                </Col>
                <Col
                  xs={{ span: 24, order: 2 }}
                  sm={{ span: 16, order: index % 2 === 0 ? 2 : 1 }}
                >
                  <Paragraph>
                    <ReactMarkdown source={section.paragraph} />
                  </Paragraph>
                </Col>
              </Row>
              <Divider />
            </>
          ))}

          <Paragraph
            data-sal="fade"
            data-sal-duration="700"
            data-sal-easing="ease"
            strong
            style={{ fontSize: "1rem", width: "100%", textAlign: "center" }}
          >
            Please <Link to="/about">click here</Link> to see bio and resume of
            the company’s CEO, James R. Bellile.
            <br />
            With over a decade and a half of verifiable proof, ethics over money
            ALWAYS, this is NEVER negotiable.
          </Paragraph>
        </Content>
      )}
    </Layout>
  )
}

export default IndexPage
