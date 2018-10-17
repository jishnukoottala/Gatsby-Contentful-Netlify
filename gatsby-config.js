module.exports = {
  siteMetadata: {
    title: 'Gatsby with Contentful',
    desc: "simple blog with gatsby and contentful"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },{
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`
      }
    },
    'gatsby-plugin-offline',
    { resolve:"gatsby-source-contentful",
		options:{
		spaceId:"hhk4hm3wkha3",
		accessToken:"d808ea282e2e0cc7d3d4f2eab7e30554fb2b0f4afbfdcb20bf39fd6f7fbbea9a" //get these from contentful
    },
   
  }, 
  "gatsby-transformer-sharp",
  "gatsby-plugin-sharp",
  "gatsby-transformer-remark"

  ],
}
