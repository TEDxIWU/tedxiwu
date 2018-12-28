import React from 'react'
import Layout from '../components/Layout'
import Tickets from '../components/Tickets'

class TicketsPage extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <Tickets />
      </Layout>
    )
  }
}

export default TicketsPage
