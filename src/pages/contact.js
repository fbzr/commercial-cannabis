import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "./about.less"

const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <div className="container">
      <h1>Contact page</h1>
      <Link to="/">Go back to the homepage</Link>
    </div>
  </Layout>
)

export default Contact
