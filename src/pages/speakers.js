import React from 'react'
import Layout from '../components/Layout'
import Speakers from '../components/Speakers'
import withRoot from '../components/withRoot'

class SpeakersPage extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <Speakers />
      </Layout>
    )
  }
}

export default withRoot(SpeakersPage)
