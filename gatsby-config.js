module.exports = {
  siteMetadata: {
    title: 'Karan Popat',
    description: 'Something I would like to share!',
    keywords:
      'Karan Popat, Karan, Popat, popatkaran, karanpopat1992, popkrn, krn.ppt@gmail.com',
    author: 'Karan Popat',
    url: 'https://www.popatkaran.com/',
    siteUrl: 'https://www.popatkaran.com/',
  },
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-transformer-yaml',
    'gatsby-transformer-remark',
    {
      // we are using this to parse yaml content
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `yml-content`,
        path: `${__dirname}/content`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'yaml-content-images',
        path: `${__dirname}/content/images/`,
      },
    },
    {
      // use this config to create markdown pages
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'markdown-pages',
        path: `${__dirname}/content`,
      },
    },
  ],
}
