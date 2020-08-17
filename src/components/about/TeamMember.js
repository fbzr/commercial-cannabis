import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Typography, Row, Col, Divider } from "antd"
import ReactMarkdown from "react-markdown"

import BackgroundTimeline from "./backgroundTimeline"

const TeamMember = ({ member }) => {
  const { Title, Paragraph } = Typography
  const { name, bio, photos, timeline, position } = member
  const { paragraphs } = bio

  const images = useStaticQuery(graphql`
    query {
      images: allFile(filter: { sourceInstanceName: { eq: "about" } }) {
        edges {
          node {
            relativePath
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `).images.edges

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
          sm={photos.length ? 14 : 24}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <Title level={2}>{bio.title || name}</Title>
          {paragraphs?.length && (
            <Paragraph>
              <ReactMarkdown>{paragraphs[0]}</ReactMarkdown>
            </Paragraph>
          )}
        </Col>
        {photos.length && (
          <Col xs={24} sm={10}>
            <Img
              className="profile-photo"
              fluid={
                images.find(e => e.node.relativePath === photos[0].image).node
                  .childImageSharp.fluid
              }
              alt={photos[0].description}
            />
          </Col>
        )}
      </Row>
      {paragraphs?.slice(1, paragraphs.length - 2)?.map((paragraph, index) => (
        <Paragraph
          key={index}
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
                fluid={
                  images.find(e => e.node.relativePath === photos[1].image).node
                    .childImageSharp.fluid
                }
                alt={photos[1].description}
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
      <BackgroundTimeline name={name} data={timeline} />
    </>
  )
}

export default TeamMember
