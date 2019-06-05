import Layout from '../components/AppLayout'
import React from 'react'
import TicketsCard from '../components/TicketsCard'

const TicketsPage = ({
  location,
  data: {
    allContentfulBasicContent: { edges: content },
  },
}) => (
  <Layout location={location}>
    <TicketsCard content={content[0].node} />
  </Layout>
)

export default TicketsPage

export const pageQuery = graphql`
  query TicketsContentIndexQuery {
    allContentfulBasicContent(sort: { fields: [order], order: ASC }) {
      edges {
        node {
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
