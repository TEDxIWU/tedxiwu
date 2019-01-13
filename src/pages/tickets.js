import React from 'react'
import Layout from '../components/Layout'
import Tickets from '../components/Tickets'
import withRoot from '../components/withRoot';

class TicketsPage extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <Tickets />
      </Layout>
    )
  }
}

export default withRoot(TicketsPage)
