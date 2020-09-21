module.exports = {
  siteMetadata: {
    title: "Boulot-trottro-ecolo",
    author: "Roule Ecolo",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          "gatsby-remark-relative-images",
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 960,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-source-contentful",
      options: {
        //spaceId: process.env.CONTENTFUL_SPACE_ID,
        spaceId: "04k1kvl1txxf",
        //accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        accessToken: "zl95agG3CHMpqllJnTDqdPl0QxOnRGwi8CTrhLD4i9Q",
      },
    },
  ],
}
