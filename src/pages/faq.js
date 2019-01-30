import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import FAQ from '../components/FAQ'
import Layout from '../components/Layout'
import withRoot from '../components/withRoot'
import Grid from '@material-ui/core/Grid'

class FAQPage extends React.Component {
  render() {
    const faqs = get(this, 'props.data.allContentfulFaq.edges')

    return (
      <Layout location={this.props.location}>
        <Grid container spacing={16}>
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
  }
}

export default withRoot(FAQPage)

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
