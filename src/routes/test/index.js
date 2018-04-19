import React from 'react'
import Layout from '../../components/Layout'
import Page from '../../components/Page'

function action() {
  return {
    chunks: ['about'],
    // title: about.title,

    component: (
      <Layout>
        <h1> dsfsdf </h1>
      </Layout>
    ),
  };
}

export default action;
