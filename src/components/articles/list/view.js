// @flow
import * as React from 'react'
// import Link from "src/config/link"

class ViewClient extends React.Component<any, any> {

  state = {
    attributes: [
      "title",
      "content",
    ]
  }

  render() {
    let { object } = this.props
    let { attributes } = this.state

    return (
      <tr>
        {
          attributes.map((attribute, index) => {
            return (
              <td key={index}>
                {object[attribute]}
              </td>
            )
          })
        }


      </tr>
    )
  }

}

export default ViewClient

        // <td>
        //   <Link
        //     to={`/clients/${object.id}`}
        //   >
        //     <button className="btn btn-primary">
        //       Edit
        //     </button>
        //   </Link>
        // </td>
