import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import BackgroundTimeline from "../components/backgroundTimeline"
import SEO from "../components/seo"
import { Typography, Row, Col, Divider, Layout as AntLayout } from "antd"

const About = () => {
  const { Title, Paragraph } = Typography
  const { Content } = AntLayout

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
            <Title level={2}>Meet the CEO of Commercial Cannabis (Inc.)</Title>

            <Paragraph>
              James Bellile grew up in Wisconsin and left to join the Army, as a
              logistical officer, after finishing college in 2001. 90 days
              later, 9-11 changed the world and, after completing his four years
              of honorable service on Active Duty, James moved to Las Vegas to
              start a civilian life in 2005. In the Army, among many things,
              James learned the officer’s code LDRSHIP, which stands for
              Loyalty, Duty, Respect, Selfless Service, Honor, Integrity and
              Personal Courage. He is one of those rare humans still left out
              there where you can still agree on terms, shake hands, and he’ll
              never under deliver. He is the respected real estate broker,
              founder and operator of Modern Times Realty, which is based out of
              Las Vegas, Nevada, and has been an entrepreneur for over a decade
              and half.
            </Paragraph>
          </Col>
          <Col xs={24} sm={10}>
            <Img
              className="profile-photo"
              fluid={images.profile.childImageSharp.fluid}
              alt="James"
            />
          </Col>
        </Row>
        <Divider />
        <Paragraph
          className="section"
          data-sal="fade"
          data-sal-duration="500"
          data-sal-easing="ease"
        >
          In real estate, James first became interested in the cannabis industry
          while trading stocks and, after studying the publically traded
          companies, noticed some anomalies in the national economy. He then
          decided to specialize in the cannabis sector for his local commercial
          real estate clients. James has also always been interested in
          incorporating green energy into real estate and industrial hemp is one
          future material he’d like to use consistently in homes. He sees a
          nearly unlimited potential for the uses of cannabis and is very
          excited to be at the forefront of a time in our nation’s history when
          falsely demonized plants will rise from the ashes to create a shift in
          the global economy by disrupting many inefficient and outdated
          industries. Furthermore, having been an athlete for many years prior
          to his military service, sustaining many injuries, which required
          multiple surgeries, and witnessing, first hand, the often outright
          dangerous policies and procedures of the Veteran’s Administration
          medical facilities, James is personally passionate about seeing
          cannabis used as one more natural healing remedy that is accessible to
          all people.
        </Paragraph>
        <Paragraph
          className="section"
          data-sal="fade"
          data-sal-duration="500"
          data-sal-easing="ease"
        >
          Commercial Cannabis Inc is his brainchild after the COVID-19 pandemic
          placed the world on its ear and gave him a new direction to focus. He
          noticed along his real estate journey that, although the cannabis
          industry is very large, by and large it is a very unorganized group of
          two polarities, either people only concerned about making money or
          people who truly love cannabis and are passionate about their
          products, but unable to join the business world enough to do much more
          than struggle with their business ventures. James thoroughly believes
          that the potentially massive cannabis industry will soon spread like
          wildfire. He intends to find those business owners, who are as
          passionate as he is about the good of cannabis, and introduce them to
          one another so they can supply the world, while, simultaneously,
          putting the people concerned with just making money, out of business.
        </Paragraph>
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
          <Col xs={24} sm={18}>
            <Paragraph>
              A wise person once told James, “People will forget what you say,
              they will forget what you do, but they will NEVER forget how you
              made them feel.” The folks at Commercial Cannabis Inc intend to
              prove that we are different in the sense that you, our valued
              customers and, hopefully, eventual friends, will always enjoy
              doing business with us and never ever have to question that we are
              truly trying to do the right thing and intend on bringing about a
              little better world, while making an honest living. We hope to
              meet you soon.
            </Paragraph>
          </Col>
        </Row>
        <Divider />
        <BackgroundTimeline />
        {/* <Paragraph>
          On a side note, James is also learning Spanish, construction, and
          international business.
        </Paragraph>
        <Paragraph>
          Romans 8:31 James 1:12 Galatians 6 Psalms 23 Psalms 37
          <br />
          LOVE — HOPE — FAITH
        </Paragraph> */}
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
