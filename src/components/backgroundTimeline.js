import React from "react"
import { Timeline } from "antd"
import "./backgroundTimeline.less"

const backgroundTimeline = () => {
  return (
    <Timeline mode="left">
      <Timeline.Item label="May 2020 - Present">
        Company Founder/CEO/Co-Owner of Commercial Cannabis Inc.
      </Timeline.Item>
      <Timeline.Item label="2016 - Present ">
        Company Founder and Broker of Modern Times Realty LLC. Residential and
        Commercial real estate in the Las Vegas Valley.
        Buy-Sell-Lease-Fix-Manage (Please see ModernTimesRealty.com for details)
      </Timeline.Item>
      <Timeline.Item label="2008 - Present">
        Realtor
        <br />
        More than 1000 hours completed of accredited continuing education in
        real estate, business, construction and law related subjects instructed
        by the University of Nevada-Las Vegas (UNLV), the State Nevada
        Contractor’s Board, the Las Vegas Association of Realtors (LVAR) to
        include: RENE: Real Estate Negotiations Expert, Military Relocation
        Professional, Loan Officer Licensing; Real Estate Agent and then Broker
        Licensing; Accredited Buyers Representative; Sellers Representative
        Specialist; Senior Real Estate Specialist; Short Sales and Foreclosure
        Resources; Risk Reduction; Property Management Licensing; Real Estate
        Broker; Grievance Committee Member 2012-2013; Senior Realtor and Real
        Estate Broker committee.
      </Timeline.Item>
      <Timeline.Item label="2005 - 2008">Loan Officer</Timeline.Item>
      <Timeline.Item label="2001 - 2005">
        Active Duty Logistical Officer U.S. Army
        <ul>
          <li>
            6 of 6 Officer Evaluation Reports Rated Outstanding Officer Must
            Promote
          </li>
          <li>Army Parachutist Badge (Airborne)</li>
          <li>Cavalry Spurs</li>
          <li>Built mock cities and ran logistical trains for war campaigns</li>
        </ul>
      </Timeline.Item>
      <Timeline.Item label="2001">
        University of Wisconsin—Madison Bachelors of Science Undergraduate
        Degrees in both History and Political Science
      </Timeline.Item>
    </Timeline>
  )
}

export default backgroundTimeline
