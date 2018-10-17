const path = require("path")


exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions
  
    const blogPostTemplate = path.resolve(`src/templates/blogTemplate.js`)
  
    return graphql(`
      {
        allContentfulBlogPost{
          edges {
            node {
                path
              
            }
          }
        }
      }
    `).then(result => {
      if (result.errors) {
        return Promise.reject(result.errors)
      }
  
      result.data.allContentfulBlogPost.edges.forEach(({ node }) => {
        createPage({
          path: node.path,
          component: blogPostTemplate,
          context: {
              path: node.path
          }, // additional data can be passed via context
        })
      })
    })
  }

