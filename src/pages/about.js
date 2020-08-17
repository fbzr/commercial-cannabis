import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

import SEO from "../components/seo"
import { Layout as AntLayout } from "antd"
import aboutContent from "../content/files/about.json"
import TeamMember from "../components/about/TeamMember"

const About = () => {
  const { Content } = AntLayout
  const team = aboutContent.team

  return (
    <Layout>
      <SEO title="About" />
      <Content
        id="about"
        className="main-content content-padding"
        style={{ paddingBottom: 0 }}
      >
        {team.map((member, index) => (
          <TeamMember key={index} member={member} />
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
