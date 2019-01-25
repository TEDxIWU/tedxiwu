import React from 'react'
import Layout from '../components/Layout'
import Home from '../components/Home'
import withRoot from '../components/withRoot'
import get from 'lodash/get'

class RootIndex extends React.Component {
  render() {
    const content = get(this, 'props.data.allContentfulBasicContent.edges')

    return (
      <Layout location={this.props.location}>
        <Home content={content.map(({ node }) => node)} />
      </Layout>
    )
  }
}

export default withRoot(RootIndex)

export const pageQuery = graphql`
  query BasicContentIndexQuery {
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
