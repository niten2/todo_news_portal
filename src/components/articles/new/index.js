// @flow
import React from "react"
import { Input } from "reactstrap"

// import Link from "src/config/link"
// import Notification from "src/config/notification"
import { withData } from "./queries"

class New extends React.Component<any, any> {

  state = {
    article: {
      title: "",
      content: "",
    },
  }

  handleSetState = (e) => {
    const { name, value } = e.target
    let { article } = this.state

    article[name] = value
    this.setState({ article })
  }

  handleCreate = async (e?: any) => {
    if (e) { e.preventDefault() }
    const { article } = this.state

    const options = {
      variables: {
        input: {
          title: article.title,
          content: article.content,
        }
      },
    }

    try {
      await this.props.createArticleQuery(options)
      // Notification.success("update client")

      // this.setState({
      //   client: {
      //     full_name: "",
      //     email: "",
      //     passport: "",
      //     phone: "",
      //   }
      // })
    } catch (err) {
      console.log(err)
      // Notification.error(err.message)
    }
  }

  handleOnKeyPress = (target: any) => {
    if (target.charCode === 13) {
      this.handleCreate()
    }
  }

  render() {
    let { article } = this.state

    return (
      <div className="container-fluid">
        <div className="animated fadeIn">

          <div className="row">
            <div className="col-lg-12">

              <div className="card">

                <div className="card-header">
                  <i className="fa fa-align-justify" /> New Artilce
                </div>

                <div className="card-block">
                  <form className="form-2orizontal">

                    <div className="form-group row">
                      <div className="col-md-12">
                        <div className="input-group">
                          <span className="input-group-addon">Title</span>
                          <Input
                            name="title"
                            placeholder="title"
                            onChange={this.handleSetState}
                            onKeyPress={this.handleOnKeyPress}
                            value={article.title}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="form-group row">
                      <div className="col-md-12">
                        <div className="input-group">
                          <span className="input-group-addon">Content</span>
                          <Input
                            name="content"
                            placeholder="content"
                            onChange={this.handleSetState}
                            onKeyPress={this.handleOnKeyPress}
                            value={article.content}
                          />
                        </div>
                      </div>
                    </div>


                    <div className="form-actions">
                      <button
                        className="btn btn-primary"
                        onClick={this.handleCreate}
                      >
                        Save changes
                      </button>

                      &nbsp;

                    </div>

                  </form>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default withData(New)

                      // <Link to="/clients">
                      //   <button
                      //     className="btn btn-default"
                      //   >
                      //     Cancel
                      //   </button>
                      // </Link>
