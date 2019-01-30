import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Speaker from '../components/Speaker'
import Layout from '../components/Layout'
import withRoot from '../components/withRoot'

class SpeakersPage extends React.Component {
  render() {
    const speakers = get(this, 'props.data.allContentfulSpeakers.edges')

    return (
      <Layout location={this.props.location}>
        {speakers.map(({ node }) => {
          return <Speaker key={node.id} speaker={node} />
        })}
      </Layout>
    )
  }
}

export default withRoot(SpeakersPage)

export const pageQuery = graphql`
  query SpeakersIndexQuery {
    allContentfulSpeakers(sort: { fields: [order], order: ASC }) {
      edges {
        node {
          id
          name
          talkTitle
          biography {
            childMarkdownRemark {
              html
            }
          }
          headshot {
            fluid(maxHeight: 400, maxWidth: 400) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`
