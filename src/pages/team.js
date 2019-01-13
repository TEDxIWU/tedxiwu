import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Grid from '@material-ui/core/Grid'
import TeamMember from '../components/TeamMember'
import Layout from '../components/Layout'
import withRoot from '../components/withRoot';

class BlogIndex extends React.Component {
  render() {
    const members = get(this, 'props.data.allContentfulTeam.edges')

    return (
      <Layout location={this.props.location}>
        <Grid container spacing={16} alignItems="stretch">
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
  }
}

export default withRoot(BlogIndex)

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
