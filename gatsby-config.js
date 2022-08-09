module.exports = {
  siteMetadata: {
    name: 'gatsby-comments-with-utterances'
  },
  plugins: [
    'gatsby-plugin-mdx',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/content/posts`
      }
    }
  ],
  partytownProxiedURLs: ['https://utteranc.es/client.js']
};
