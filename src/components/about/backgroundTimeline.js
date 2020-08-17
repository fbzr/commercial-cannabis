import React from "react"
import { Timeline, Typography } from "antd"
import ReactMarkdown from "react-markdown"

import "./backgroundTimeline.less"

const backgroundTimeline = ({ name, data }) => {
  const { Title } = Typography

  return (
    data?.length && (
      <div>
        <Title level={2} style={{ textAlign: "center" }}>
          {`${name}'s Background`}
        </Title>
        <Timeline mode="left" style={{ marginTop: 50 }}>
          {data.map((milestone, key) => (
            <Timeline.Item
              key={key}
              label={milestone.date}
              data-sal="fade"
              data-sal-duration="500"
              data-sal-easing="ease"
            >
              <ReactMarkdown>{milestone.description}</ReactMarkdown>
            </Timeline.Item>
          ))}
        </Timeline>
      </div>
    )
  )
}

export default backgroundTimeline
