import React from 'react'
import Layout from 'src/components/Layout'
import ArticleList from 'src/components/articles/list'

const title = 'Article Pages'

export default () => {

  return {
    title,
    component: (
      <Layout>
        <ArticleList />
      </Layout>
    ),
  }
}
