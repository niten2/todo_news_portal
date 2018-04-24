import React from 'react'
import Layout from 'src/components/Layout'
import ArticleNew from 'src/components/articles/new'

const title = 'Article New'

export default () => {

  return {
    title,
    component: (
      <Layout>
        <ArticleNew />
      </Layout>
    ),
  }
}
