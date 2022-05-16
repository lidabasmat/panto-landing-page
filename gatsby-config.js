module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
        resolve: 'gatsby-source-filesystem',
        options: {
            name: 'products',
            path: `${__dirname}/src/content/products`,
        },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "gatsby-starter-kit",
        short_name: "starter",
        start_url: "/",
        background_color: "#4256e7",
        theme_color: "#4256e7",
        display: "minimal-ui",
        icon: "src/images/icon.png", // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/layout/Layout.jsx`),
      },
    },
    `gatsby-plugin-postcss`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
          extensions: ['.mdx', '.md'],
          gatsbyRemarkPlugins: [
              'gatsby-remark-relative-images',
              {
                  resolve: 'gatsby-remark-images',
                  options: {
                      maxWidth: 907,
                      quality: 100,
                      withWebp: true,
                      ignoreFileExtensions: [],
                  },
              },
              'gatsby-remark-copy-linked-files',
              'gatsby-remark-smartypants',
              'gatsby-remark-external-links',
          ],
      },
    },
  ]
}
