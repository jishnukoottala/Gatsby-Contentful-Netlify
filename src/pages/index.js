import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import PostListing from '../components/Posts/PostListing';

const IndexPage = ({data}) => {
  
  return (
  <Layout>
    <h1>Posts</h1>
    
    {data.allContentfulBlogPost.edges.map(({node})=> <PostListing post={node} key={node.id}/>)}
    
   
  </Layout>
)}

export default IndexPage

export const query = graphql`
  query SiteMeta {
    site {
      siteMetadata {
        title
        desc
      }
    }
    allContentfulBlogPost {
      edges {
        node {
         title
         body{
           childMarkdownRemark {
             
             excerpt
           }
         }
         createdAt(formatString: "DD MMM YYYY")
         path
         id
        }
      }
    }
  }
`;