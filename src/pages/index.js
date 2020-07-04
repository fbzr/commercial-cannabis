import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

import { Typography, Row, Col, Layout as AntLayout } from "antd"
import "./index.less"

const IndexPage = () => {
  const { Title, Text, Paragraph } = Typography
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
        <div className="logo-container">
          <Img
            fluid={images.logo.childImageSharp.fluid}
            alt="Commercial Cannabis Logo"
          />
        </div>
      </div>
      <Content className="main-content content-padding">
        <Row gutter={24} className="section" justify="center">
          <Col xs={24} md={10}>
            <Title level={2}>
              Commercial Cannabis (Inc) is a Wholesale Marketing company.
            </Title>
          </Col>
          <Col xs={24} lg={14}>
            <Paragraph>
              From coast to coast in the United States and in many other
              countries around the world, the cannabis industry is growing
              rapidly and demand for cannabis products and services, along with
              industry related products and services, are growing phenomenally
              as well. Yet many growers, manufacturers, distributors, retailers,
              educators and angel investors are not nearly as successful as they
              could be and are needlessly wasting a lot of time, money,
              resources and energy finding the right connections.
            </Paragraph>
          </Col>
        </Row>
        <Row gutter={24} className="section">
          <Col xs={24} md={16}>
            <Paragraph>
              Maybe you’re a CBD dispensary in Maine? We’ve got your growers,
              extractors, and bottlers in Oregon, arguably the best soil and
              climate in the US for cannabis, providing you great products. Want
              to white label? We’ve got that too. Need money to get your
              operation going or get it to the next level? We can point you in
              the right direction. Are you a seasoned cannabis business operator
              and want to teach others? We’ll find your students. Whatever your
              goals are in the cannabis industry, as long as it’s legal and
              helps the world, we’ll give it a go to assist.
            </Paragraph>
          </Col>
          <Col xs={24} md={8}>
            <Title level={2}>
              Using it’s nationally spread force, Commercial Cannabis Inc
              matches each type of business and products with the right
              partner(s).
            </Title>
          </Col>
        </Row>

        <Row gutter={36} className="section">
          <Col xs={24} md={8}>
            <Title level={2}>
              We Introduce Good People in the Cannabis Industry and ‘Cultivate’
              Business to Business Relations.
            </Title>
          </Col>
          <Col xs={24} md={16}>
            <Paragraph>
              Simply put, “We Introduce Good People in the Cannabis Industry”
              and “We ‘Cultivate’ Business to Business Relations” that benefit
              our clients. We do this with no upfront payment from our clients.
              We get paid only after we find you the connecting business, which
              matches what your business’ need, and that discovered relationship
              culminates in <Text strong>YOU GETTING PAID FIRST</Text>. So try
              us, we know A LOT of the right people and, probably a few of them,
              want to do business with <Text strong>YOUR BUSINESS</Text>.
            </Paragraph>
          </Col>
        </Row>

        <Paragraph
          strong
          style={{ fontSize: "1rem", width: "100%", textAlign: "left" }}
        >
          Please see bio and resume of the company’s CEO, James R. Bellile; with
          over a decade and a half of verifiable proof; ethics over money
          ALWAYS, this is NEVER negotiable.
        </Paragraph>
      </Content>
    </Layout>
  )
}

export default IndexPage
