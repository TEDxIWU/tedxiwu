import React from 'react'
import Layout from '../components/Layout'
import Home from '../components/Home'
import withRoot from '../components/withRoot'

class RootIndex extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <Home />
      </Layout>
    )
  }
}

export default withRoot(RootIndex)
