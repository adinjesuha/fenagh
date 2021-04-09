import React from 'react'
import { useStaticQuery, graphql} from "gatsby"
import ContentfulListing from '../contentfulListing'


const News = () => {
  const data = useStaticQuery(graphql`
    query {
      posts: allContentfulBlogPost(
        limit: 10, 
        sort: {order: ASC, fields: body___references___createdAt}
      ) {
        nodes {
          id
          title
          tag
          slug
          excerpt {
            excerpt
          }
          createdAt
          image{
            title
            fluid(maxWidth: 620){
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  `)
  return (
  <ContentfulListing posts={data.posts} intro="ultimas noticias"/>
)}

export default News