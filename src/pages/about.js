import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import BackgroundTimeline from "../components/backgroundTimeline"
import SEO from "../components/seo"
import { Typography, Row, Col, Divider, Layout as AntLayout } from "antd"
import aboutContent from "../content/files/about.json"
import ReactMarkdown from "react-markdown"

const About = () => {
  const { Title, Paragraph } = Typography
  const { Content } = AntLayout
  const team = aboutContent.team

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
    <Layout>
      <SEO title="About" />
      <Content
        id="about"
        className="main-content content-padding"
        style={{ paddingBottom: 0 }}
      >
        {team.map(member => (
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
                <Title level={2}>{member.bio.title}</Title>
                {member.bio.paragraphs?.length && (
                  <Paragraph>
                    <ReactMarkdown>{member.bio.paragraphs[0]}</ReactMarkdown>
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
            {member.bio.paragraphs
              ?.slice(1, member.bio.paragraphs.length - 2)
              ?.map(paragraph => (
                <Paragraph
                  className="section"
                  data-sal="fade"
                  data-sal-duration="500"
                  data-sal-easing="ease"
                >
                  <ReactMarkdown>{paragraph}</ReactMarkdown>
                </Paragraph>
              ))}

            {member.bio?.paragraphs?.length > 1 && (
              <Row
                gutter={36}
                className="section"
                justify="center"
                data-sal="fade"
                data-sal-duration="500"
                data-sal-easing="ease"
              >
                <Col xs={24} sm={6}>
                  <Img
                    fluid={images.army.childImageSharp.fluid}
                    alt="James's photo in Army"
                  />
                </Col>
                <Col xs={24} sm={18} style={{ flexGrow: 1 }}>
                  <Paragraph>
                    <ReactMarkdown>
                      {member.bio.paragraphs[member.bio.paragraphs.length - 1]}
                    </ReactMarkdown>
                  </Paragraph>
                </Col>
              </Row>
            )}

            <Divider />
            <BackgroundTimeline />
          </>
        ))}
      </Content>
      <div
        className="content-padding"
        style={{ paddingTop: 0, textAlign: "right" }}
      >
        <Link to="/">Go back to the homepage</Link>
      </div>
    </Layout>
  )
}

export default About
