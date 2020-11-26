/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */



module.exports = {
  plugins: [
    'gatsby-plugin-sass',
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
        options: { 
        path: `${__dirname}/src/data/`,
      },
    },
  ],
}

module.exports = {
  plugins: [`gatsby-plugin-styled-components`],
}