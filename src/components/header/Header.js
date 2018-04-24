// import React from 'react'
// import withStyles from 'isomorphic-style-loader/lib/withStyles'
// import s from './Header.css'
// import Link from '../Link'
// import Navigation from '../Navigation'
// import logoUrl from './logo-small.png'
// import logoUrl2x from './logo-small@2x.png'

// class Header extends React.Component {
//   render() {
//     return (
//       <div className={s.root}>
//         <div className={s.container}>
//           <Navigation />
//           <Link className={s.brand} to="/">
//             <img
//               src={logoUrl}
//               srcSet={`${logoUrl2x} 2x`}
//               width="38"
//               height="38"
//               alt="React"
//             />
//             <span className={s.brandTxt}>Your Company</span>
//           </Link>
//           <div className={s.banner}>
//             <h1 className={s.bannerTitle}>React</h1>
//             <p className={s.bannerDesc}>Complex web apps made easy</p>
//           </div>
//         </div>
//       </div>
//     )
//   }
// }

// export default withStyles(s)(Header)


import * as React from "react"
import gql from "graphql-tag"
import Spinner from "src/components/spinner"
import Page500 from "src/components/page500"
import Link from "src/components/link"

// import { withRouter } from "react-router"
// import { withApollo, graphql } from "react-apollo"

// import AuthProvider from "src/config/auth_provider"

// const meQuery = gql`
//   query {
//     me {
//       login
//       role
//     }
//   }
// `

// const withData = graphql<any, any, any>(
//   meQuery, {
//     name: "meQuery"
//   }
// )

class Header extends React.Component<any, any> {

  state = {
    dropdownOpen: false
  }

  toggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    })
  }

  sidebarToggle = (e) => {
    e.preventDefault()
    document.body.classList.toggle('sidebar-hidden')
  }

  mobileSidebarToggle = (e) => {
    e.preventDefault()
    document.body.classList.toggle('sidebar-mobile-show')
  }

  asideToggle = (e) => {
    e.preventDefault()
    document.body.classList.toggle('aside-menu-hidden')
  }

  // handleLogout = () => {
  //   AuthProvider.removeToken()

  //   this.props.client.resetStore()
  //   this.props.history.push("/login")

  //   console.log("logout")
  // }

  render() {
    // let { me, loading, error } = this.props.meQuery

    // if (loading ) {
    //   return <Spinner />
    // }

    // if (error) {
    //   return <Page500 />
    // }

    return (
      <header className="app-header navbar">
        <button
          className="navbar-toggler mobile-sidebar-toggler d-lg-none"
          type="button"
          onClick={this.mobileSidebarToggle}
        >
          &#9776;
        </button>

        <a className="navbar-brand">Todo news portal</a>

        &nbsp;

        <ul className="nav navbar-nav d-md-down-none">
          <li className="nav-item">
            <button
              className="nav-link navbar-toggler sidebar-toggler"
              type="button"
              onClick={this.sidebarToggle}
            >
            &#9776;
            </button>
          </li>

        </ul>

        <ul className="nav navbar-nav ml-auto">

          <li className="d-md-down-none nav-item">
            <Link to="/articles">
              <button className="btn btn-secondary">
                Home
              </button>
            </Link>
          </li>

          &nbsp;

          <li className="d-md-down-none nav-item">
            <Link to="/articles/new">
              <button className="btn btn-secondary">
                New Article
              </button>
            </Link>
          </li>

          &nbsp;
        </ul>

      </header>
    )
  }
}

export default Header

// export default withRouter(
//   withApollo(
//     withData(Header)
//   )
// )
        // <ul className="nav navbar-nav ml-auto">
        //   <li className="d-md-down-none nav-item">
        //     <button className="btn btn-secondary">
        //       {me.login}
        //     </button>
        //     &nbsp;
        //   </li>

        //   <li className="d-md-down-none nav-item">
        //     <button className="btn btn-secondary">
        //       {me.role}
        //     </button>
        //     &nbsp;
        //   </li>

        //   <li onClick={this.handleLogout} className="nav-item pointer">
        //     <button className="btn btn-info">
        //       Logout
        //     </button>
        //     &nbsp;&nbsp;
        //   </li>
        // </ul>
