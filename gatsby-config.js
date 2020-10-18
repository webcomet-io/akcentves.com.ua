/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `ubsw7fncaons`,
        accessToken: `Rj3YijTCExkdeefHyhjlFA3kQpWvDo6cF4O8iX6LBmA`,
      },
    },
  ],
}
