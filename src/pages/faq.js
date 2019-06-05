import FAQ from '../components/FAQ'
import Grid from '@material-ui/core/Grid'
import Helmet from 'react-helmet'
import Layout from '../components/AppLayout'
import React from 'react'
import { graphql } from 'gatsby'

const FAQPage = ({
  location,
  data: {
    allContentfulFaq: { edges: faqs },
  },
}) => (
  <Layout location={location}>
    <Helmet title="TEDxIWU - FAQ" />
    <Grid container spacing={2}>
      {faqs.map(({ node }) => {
        return (
          <Grid key={node.id} item xs={12}>
            <FAQ key={node.order} faq={node} />
          </Grid>
        )
      })}
    </Grid>
  </Layout>
)

export default FAQPage

export const pageQuery = graphql`
  query FAQIndexQuery {
    allContentfulFaq(sort: { fields: [order], order: ASC }) {
      edges {
        node {
          id
          order
          question
          answer {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`
