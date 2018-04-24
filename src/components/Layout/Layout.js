import React from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import PropTypes from 'prop-types'
import normalizeCss from 'normalize.css'
import s from './Layout.css'
import Header from 'src/components/header'

// import Feedback from '../Feedback'
// import Footer from '../Footer'


class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  }

  render() {
    return (
      <div>
        <Header />

        <br />

        {this.props.children}
      </div>
    )
  }
}

export default withStyles(normalizeCss, s)(Layout)


