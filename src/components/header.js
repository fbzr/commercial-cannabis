import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./header.less"
import { Menu } from "antd"

const Header = ({ siteTitle }) => {
  return (
    <header className="navbar">
      <Menu className="menu" mode="horizontal">
        <Menu.Item key="/">
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="/about">
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
  siteTitle: ``,
}

export default Header
