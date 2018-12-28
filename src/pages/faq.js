import React from 'react'
import Layout from '../components/Layout'
import FAQs from '../components/FAQs'

class FAQPage extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <FAQs />
      </Layout>
    )
  }
}

export default FAQPage
