import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Typography, Layout as AntLayout, Row, Col } from "antd"
import { Form, Input, Button, InputNumber } from "antd"

import ContactForm from "../components/contactForm"
import "./contact.less"

const Contact = () => {
  const { Content } = AntLayout
  const { Paragraph, Title } = Typography

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
      <Content id="contact" className="content-padding main-content">
        <Row justify="center" className="section">
          <Col>
            <Img
              fluid={images.logo.childImageSharp.fluid}
              alt="Commercial Cannabis Logo"
            />
            <Title className="title" level={3}>
              Get in touch
            </Title>

            <Form>
              <Form.Item
                label="name"
                name="name"
                rules={[{ required: true, message: "Name is required" }]}
              >
                <Input />
              </Form.Item>
              <Form.Item label="Company" name="companyName">
                <Input />
              </Form.Item>
              <Form.Item
                label="Location"
                name="location"
                rules={[{ required: true, message: "Location is required" }]}
              >
                <Input />
              </Form.Item>
              <Form.Item label="Phone" name="phone">
                <InputNumber
                  formatter={value =>
                    value.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3")
                  }
                />
              </Form.Item>
            </Form>

            <Paragraph>
              4660 S. Eastern Ave Suite #103 Las Vegas, NV 89119
            </Paragraph>
            <Paragraph>commercialcannabisinc@gmail.com</Paragraph>
            <Paragraph>
              P: 702-222-0815
              <br />
              No Faxes Please; it’s a decade passed even 2010. Upgrade already!
            </Paragraph>
          </Col>
        </Row>

        <Link to="/">Go back to the homepage</Link>
      </Content>
    </Layout>
  )
}

export default Contact
