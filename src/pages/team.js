import Grid from '@material-ui/core/Grid'
import Layout from '../components/AppLayout'
import React from 'react'
import TeamMember from '../components/TeamMember'
import { graphql } from 'gatsby'

const TeamPage = ({
  location,
  data: {
    allContentfulTeam: { edges: members },
  },
}) => (
  <Layout location={location}>
    <Grid container spacing={2} alignItems="stretch">
      {members.map(({ node }) => {
        return (
          <Grid key={`${node.name} grid`} item xs={12} sm={6} md={6} lg={4}>
            <TeamMember key={node.name} teamMember={node} />
          </Grid>
        )
      })}
    </Grid>
  </Layout>
)

export default TeamPage

export const pageQuery = graphql`
  query TeamIndexQuery {
    allContentfulTeam(sort: { fields: [name], order: DESC }) {
      edges {
        node {
          name
          title
          picture {
            fluid(maxHeight: 400, maxWidth: 400) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`
