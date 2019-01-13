import React from 'react'
import Layout from '../components/Layout'
import FAQs from '../components/FAQs'
import withRoot from '../components/withRoot';

class FAQPage extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <FAQs />
      </Layout>
    )
  }
}

export default withRoot(FAQPage)
