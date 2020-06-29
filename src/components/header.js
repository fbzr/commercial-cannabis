import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./header.less"
import { Menu } from "antd"

const Header = ({ siteTitle }) => {
  const url = typeof window !== "undefined" ? window.location.href : ""
  const selected = url.includes("/about") ? ["about"] : ["home"]

  return (
    <header className="navbar">
      <Menu selectedKeys={selected} className="menu" mode="horizontal">
        <Menu.Item key="home">
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="about">
          <Link to="/about">About</Link>
        </Menu.Item>
      </Menu>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Commercial Cannabis Inc.`,
}

export default Header
