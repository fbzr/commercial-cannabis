import React from "react"
import { Timeline, Typography } from "antd"
import "./backgroundTimeline.less"

const backgroundTimeline = () => {
  const { Title } = Typography

  return (
    <div>
      <Title level={2} style={{ textAlign: "center" }}>
        James's Background
      </Title>
      <Timeline mode="left" style={{ marginTop: 50 }}>
        <Timeline.Item
          label="May 2020 - Present"
          data-sal="fade"
          data-sal-duration="500"
          data-sal-easing="ease"
        >
          Company Founder/CEO/Co-Owner of Commercial Cannabis Inc.
        </Timeline.Item>
        <Timeline.Item
          label="2016 - Present "
          data-sal="fade"
          data-sal-duration="500"
          data-sal-easing="ease"
        >
          Company Founder and Broker of Modern Times Realty LLC. Residential and
          Commercial real estate in the Las Vegas Valley.
          Buy-Sell-Lease-Fix-Manage (Please see ModernTimesRealty.com for
          details)
        </Timeline.Item>
        <Timeline.Item
          label="2008 - Present"
          data-sal="fade"
          data-sal-duration="500"
          data-sal-easing="ease"
        >
          Realtor
          <br />
          More than 1000 hours completed of accredited continuing education in
          real estate, business, construction and law related subjects
          instructed by the University of Nevada-Las Vegas (UNLV), the State
          Nevada Contractor’s Board, the Las Vegas Association of Realtors
          (LVAR) to include: RENE: Real Estate Negotiations Expert, Military
          Relocation Professional, Loan Officer Licensing; Real Estate Agent and
          then Broker Licensing; Accredited Buyers Representative; Sellers
          Representative Specialist; Senior Real Estate Specialist; Short Sales
          and Foreclosure Resources; Risk Reduction; Property Management
          Licensing; Real Estate Broker; Grievance Committee Member 2012-2013;
          Senior Realtor and Real Estate Broker committee.
        </Timeline.Item>
        <Timeline.Item
          label="2005 - 2008"
          data-sal="fade"
          data-sal-duration="500"
          data-sal-easing="ease"
        >
          Loan Officer
        </Timeline.Item>
        <Timeline.Item
          label="2001 - 2005"
          data-sal="fade"
          data-sal-duration="500"
          data-sal-easing="ease"
        >
          Active Duty Logistical Officer U.S. Army
          <ul>
            <li>
              6 of 6 Officer Evaluation Reports Rated Outstanding Officer Must
              Promote
            </li>
            <li>Army Parachutist Badge (Airborne)</li>
            <li>Cavalry Spurs</li>
            <li>
              Built mock cities and ran logistical trains for war campaigns
            </li>
          </ul>
        </Timeline.Item>
        <Timeline.Item
          label="2001"
          data-sal="fade"
          data-sal-duration="500"
          data-sal-easing="ease"
        >
          University of Wisconsin—Madison Bachelors of Science Undergraduate
          Degrees in both History and Political Science
        </Timeline.Item>
      </Timeline>
    </div>
  )
}

export default backgroundTimeline
