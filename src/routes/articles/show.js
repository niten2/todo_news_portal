import React from 'react'
import Layout from 'src/components/Layout'
import ArticleShow from 'src/components/articles/show'

const title = 'Article Show'

export default () => {

  return {
    title,
    component: (
      <Layout>
        <ArticleShow />
      </Layout>
    ),
  }
}
