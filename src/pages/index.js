import Helmet from 'react-helmet'
import Home from '../components/Home'
import Layout from '../components/AppLayout'
import React from 'react'
import { graphql } from 'gatsby'

const RootIndex = ({
  location,
  data: {
    allContentfulBasicContent: { edges: content },
  },
}) => (
  <Layout location={location}>
    <Helmet title="TEDxIWU - Home" />
    <Home content={content.map(({ node }) => node)} />
  </Layout>
)

export default RootIndex

export const pageQuery = graphql`
  query BasicContentIndexQuery {
    allContentfulBasicContent(sort: { fields: [order], order: ASC }) {
      edges {
        node {
          id
          order
          title
          linkUrl
          linkText
          type
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`
