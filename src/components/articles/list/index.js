// @flow
import React from 'react'
import Spinner from 'src/components/spinner'
import Page500 from 'src/components/page500'

import ViewArticle from './view'
import { withData } from './queries'

class List extends React.Component {

  render() {
    let { articles, loading, error } = this.props.articlesQuery

    if (loading) {
      return <Spinner />
    }

    if (error) {
      return <Page500 />
    }

    return (
      <div className="container-fluid">
        <div className="animated fadeIn">

          <div className="row">
            <div className="col-lg-12">
              <div className="card">

                <div className="card-header">
                  <i className="fa fa-align-justify" /> Articles
                </div>

                <div className="card-block">
                  <table className="table text-center">
                    <thead>
                      <tr>
                        <th className="text-center">Title</th>
                        <th className="text-center">Content</th>
                      </tr>
                    </thead>
                    <tbody>

                      { articles.map((object, index) =>
                        <ViewArticle
                          key={index}
                          object={object}
                        />
                      )}

                    </tbody>
                  </table>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default withData(List)
