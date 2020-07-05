import React from "react"

import { Layout } from "antd"

import "./footer.less"

const footer = () => {
  return (
    <Layout.Footer>
      <div>test</div>
      <div>
        © {new Date().getFullYear()}, Built by
        {` `}
        <a href="https://www.fabriciobezerra.com">Fabricio Bezerra</a>
      </div>
    </Layout.Footer>
  )
}

export default footer
