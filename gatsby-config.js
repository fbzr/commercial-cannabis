module.exports = {
  siteMetadata: {
    title: `Commercial Cannabis Inc.`,
    description: `Commercial Cannabis (Inc) is a Wholesale Marketing company. Using its nationally spread force, Commercial Cannabis Inc matches each type of business and products with the right partner(s). We introduce good people in the cannabis industry and ‘cultivate’ business to business relations.`,
    author: `@jamesbellile`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-plugin-less`,
      options: {
        javascriptEnabled: true,
        modifyVars: {
          "primary-color": "#6ebe46",
          "heading-color": "#333",
          "menu-horizontal-line-height": "50px",
          "layout-header-height": "50px",
          "navbar-height": "@menu-horizontal-line-height",
          "layout-footer-padding": "25px 10%",
          "screen-xs": "480px",
          "screen-sm": "576px",
          "screen-md": "768px",
          "screen-lg": "992px",
          "screen-xl": "1200px",
        },
      },
    },
    {
      resolve: "gatsby-plugin-antd",
      options: {
        style: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/misc`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `about`,
        path: `${__dirname}/src/images/about`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#6ebe46`,
        theme_color: `#6ebe46`,
        display: `minimal-ui`,
        icon: `src/images/commercial-cannabis-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
        once: true, // Defines if animation needs to be launched once
        threshold: 0.1, // Percentage of an element's area that needs to be visible to launch animation
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
