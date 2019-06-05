import Helmet from 'react-helmet'
import Layout from '../components/AppLayout'
import React from 'react'
import Speaker from '../components/Speaker'
import { graphql } from 'gatsby'

const SpeakersPage = ({
  location,
  data: {
    allContentfulSpeakers: { edges: speakers },
  },
}) => (
  <Layout location={location}>
    <Helmet title="TEDxIWU - Speakers" />
    {speakers.map(({ node }) => {
      return <Speaker key={node.id} speaker={node} />
    })}
  </Layout>
)

export default SpeakersPage

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
