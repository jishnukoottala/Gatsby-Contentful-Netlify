import React from "react";
import Link from "gatsby-link";

const PostListing = ({ post }) => (
  <article>
    <h3><Link to={post.path}>{post.title}</Link></h3>
   <span>{post.createdAt}</span>
   
    {/* <div
      dangerouslySetInnerHTML={{
        __html: post.html
      }}
    /> */}
    <p>{post.body.childMarkdownRemark.excerpt}</p>
  </article>
);

export default PostListing;
