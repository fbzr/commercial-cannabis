import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "./about.less"

const About = () => (
  <Layout>
    <SEO title="About" />
    <div className="container">
      <h1>About page</h1>
      <Link to="/">Go back to the homepage</Link>
    </div>
  </Layout>
)

export default About
