import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./header.less"
import { Menu, Layout } from "antd"

const Header = () => {
  const url = typeof window !== "undefined" ? window.location.href : ""
  const selected = url.includes("/about")
    ? ["about"]
    : url.includes("/contact")
    ? ["contact"]
    : ["home"]

  return (
    <Layout.Header className="navbar">
      <Menu selectedKeys={selected} className="menu" mode="horizontal">
        <Menu.Item key="home">
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="about">
          <Link to="/about">About</Link>
        </Menu.Item>
        <Menu.Item key="contact">
          <Link to="/contact">Contact</Link>
        </Menu.Item>
      </Menu>
    </Layout.Header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Commercial Cannabis Inc.`,
}

export default Header
