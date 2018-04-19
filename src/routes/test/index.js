import React from 'react'
import Users from 'components/users'

function action() {
  return {
    chunks: ['about'],
    // title: about.title,

    component: (
      <Layout>
        <Users />
      </Layout>
    ),
  }
}

export default action
