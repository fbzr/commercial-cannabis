import React from "react"

import { Layout, Space, Row, Col, Typography } from "antd"
import { createFromIconfontCN } from "@ant-design/icons"
import "./footer.less"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Footer = () => {
  const { Text } = Typography

  const IconFont = createFromIconfontCN({
    scriptUrl: "//at.alicdn.com/t/font_1924584_aexiew2uowj.js",
  })

  const images = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "commercial-cannabis.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout.Footer>
      <Row gutter={36} justify="center" align="center">
        <Col xs={18} md={6} className="img-col">
          <Img
            fluid={images.logo.childImageSharp.fluid}
            alt="Commercial Cannabis Logo"
            style={{ marginBottom: "1rem" }}
          />
        </Col>

        <Col xs={24} md={6} className="info">
          <Space direction="vertical">
            <div style={{ display: "flex", alignItems: "center" }}>
              <IconFont
                className="icon"
                type="icon-phone"
                style={{ marginRight: "4px" }}
              />
              702-222-0815
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <IconFont
                className="icon"
                type="icon-email"
                style={{ marginRight: "4px" }}
              />
              commercialcannabisinc@gmail.com
            </div>
            <div style={{ display: "flex", alignItems: "flex-start" }}>
              <IconFont
                className="icon"
                type="icon-location"
                style={{ marginRight: "4px" }}
              />
              <Text>
                4660 S. Eastern Ave Suite #103
                <br />
                Las Vegas, NV 89119
              </Text>
            </div>
            {/* <a target="__blank" to="https://www.facebook.com/james.bellile">
                <IconFont className="icon clickable" type="icon-facebook" />
              </a>
              <a target="__blank" to="https://www.instagram.com/jamesbellile/">
                <IconFont className="icon clickable" type="icon-instagram" />
              </a> */}
          </Space>
        </Col>
      </Row>
      {/* <Row justify="center">
        <Col>
          <Paragraph style={{ marginBottom: 0 }}>
            © {new Date().getFullYear()}, Built by
            {` `}
            <a target="__blank" href="https://www.fabriciobezerra.com">
              Fabricio Bezerra
            </a>
          </Paragraph>
        </Col>
      </Row> */}
    </Layout.Footer>
  )
}

export default Footer
