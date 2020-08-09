import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Typography, Row, Col, Divider } from "antd"
import ReactMarkdown from "react-markdown"

import BackgroundTimeline from "./backgroundTimeline"

const TeamMember = ({ member }) => {
  const { Title, Paragraph } = Typography
  const { name, bio, photos, timeline } = member
  const { paragraphs } = bio

  const images = useStaticQuery(graphql`
    query {
      profile: file(relativePath: { eq: "james-bellile.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      army: file(relativePath: { eq: "james-bellile-army.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <>
      <Row
        gutter={36}
        className="section"
        justify="center"
        style={{ marginTop: 0 }}
        data-sal="fade"
        data-sal-duration="500"
        data-sal-easing="ease"
      >
        <Col
          xs={24}
          sm={14}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <Title level={2}>{bio.title || name}</Title>
          {paragraphs?.length && (
            <Paragraph>
              <ReactMarkdown>{paragraphs[0]}</ReactMarkdown>
            </Paragraph>
          )}
        </Col>
        <Col xs={24} sm={10}>
          <Img
            className="profile-photo"
            fluid={images.profile.childImageSharp.fluid}
            alt="James"
          />
        </Col>
      </Row>
      {paragraphs?.slice(1, paragraphs.length - 2)?.map(paragraph => (
        <Paragraph
          className="section"
          data-sal="fade"
          data-sal-duration="500"
          data-sal-easing="ease"
        >
          <ReactMarkdown>{paragraph}</ReactMarkdown>
        </Paragraph>
      ))}

      {paragraphs?.length > 1 && (
        <Row
          gutter={36}
          className="section"
          justify="center"
          data-sal="fade"
          data-sal-duration="500"
          data-sal-easing="ease"
        >
          {photos.length > 1 && (
            <Col xs={24} sm={6}>
              <Img
                fluid={images.army.childImageSharp.fluid}
                alt="James's photo in Army"
              />
            </Col>
          )}

          <Col xs={24} sm={photos.length > 1 ? 18 : 24}>
            <Paragraph>
              <ReactMarkdown>{paragraphs[paragraphs.length - 1]}</ReactMarkdown>
            </Paragraph>
          </Col>
        </Row>
      )}

      <Divider />
      <BackgroundTimeline />
    </>
  )
}

export default TeamMember
