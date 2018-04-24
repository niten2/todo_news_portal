import React from 'react'
import Users from 'components/users'
import Layout from 'components/Layout'

function action() {
  return {
    chunks: ['about'],
    // title: about.title,

    component: (
      <Layout>
        12345
        <Users />
      </Layout>
    ),
  }
}

export default action

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

// import React from 'react';
// import Layout from '../../components/Layout';

// const title = 'New User Registration';

// function action() {
//   return {
//     chunks: ['register'],
//     title,
//     component: (
//       <Layout>
//         dsfsdfsdf
//       </Layout>
//     ),
//   };
// }

// export default action;
