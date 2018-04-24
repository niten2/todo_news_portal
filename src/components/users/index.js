import React from 'react'

// // import Spinner from 'src/components/shared/spinner'
// // import Page500 from 'src/components/shared/page500'
// // import UserView from 'src/components/users/list/view'
import { withData } from './queries'

// // interface P {
// //   usersQuery: {
// //     users: [object]
// //     loading: any
// //     error: any
// //   }
// // }

const UserView = (props) => {
  let { user } = props

  return (
    <div>
      <div>{user.id}</div>
      <div>{user.email}</div>
    </div>
  )
}

class ListUser extends React.Component {

  render() {
    const { users, loading, error } = this.props.usersQuery

    if (loading) {
      return (<div>Loading...</div>)
    }

    if (error) {
      return (<div>{error.message}</div>)
    }

    return  (
      <div>

        <div> dsfsdfsdxzzzz </div>

        {users.map((user, index) => (
          <UserView user={user} key={index}/>
        ))}

      </div>
    )



//     let { users, loading, error } = this.props.usersQuery

//     if (loading ) {
//       return <Spinner />
//     }

//     if (error) {
//       return <Page500 />
//     }

//     console.log(users)

//     return (
//       <div className="container-fluid">
//         <div className="animated fadeIn">

//           <div className="row">
//             <div className="col-lg-12">
//               <div className="card">

//                 <div className="card-header">
//                   <i className="fa fa-align-justify" /> Users
//                 </div>

//                 <div className="card-block">
//                   <table className="table text-center">
//                     <thead>
//                       <tr>
//                         <th className="text-center">Id</th>
//                         <th className="text-center">Email</th>
//                         <th className="text-center">Login</th>
//                         <th className="text-center">Role</th>
//                         <th className="text-center">Edit</th>
//                       </tr>
//                     </thead>
//                     <tbody>

//                       { users.map((object, index) =>
//                         <UserView
//                           key={index}
//                           object={object}
//                         />
//                       )}

//                     </tbody>
//                   </table>
//                 </div>

//               </div>
//             </div>
//           </div>

//         </div>
//       </div>
//     )
  }
}

export default withData(ListUser)
// export default ListUser
