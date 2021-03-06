import React from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import PropTypes from 'prop-types'

// external-global styles must be imported in your JS.
import normalizeCss from 'normalize.css'
import s from './Layout.css'

// import Header from '../Header'
// import Feedback from '../Feedback'
// import Footer from '../Footer'

// <Header />
// {this.props.children}
// <Feedback />
// <Footer />

class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

export default withStyles(normalizeCss, s)(Layout)


