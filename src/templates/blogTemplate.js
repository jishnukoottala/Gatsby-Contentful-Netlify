import React from "react"
import { graphql,Link } from "gatsby"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { contentfulBlogPost } = data // data.markdownRemark holds our post data
  
  return (
    <div className="blog-post-container">
      <div className="blog-post">
      <br/>
        <h1>{contentfulBlogPost.title}</h1>
        <br/>
        <Link to="/">Home</Link>
        <br/>
        <br/>
        <article> <h2>{contentfulBlogPost.date}</h2>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: contentfulBlogPost.body.childMarkdownRemark.html }}
        /></article>
       
      </div>
    </div>
  )
}


export const query = graphql`
query BlogPostQuery($path:String!){
    contentfulBlogPost(path: {eq:$path}) {
      
        title
        body{
            childMarkdownRemark{
                html
                excerpt
                
              }
        }
        path
        id
       }
}

`;
