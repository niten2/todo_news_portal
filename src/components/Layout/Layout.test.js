// import React from 'react'
// import renderer from 'react-test-renderer'
// import App from 'components/App'
// import Layout from 'components/Layout'

// describe('Layout', () => {
//   it('renders children correctly', () => {
//     // const app = (
//     //   <App context={{ insertCss: () => {}, fetch: () => {}, pathname: '' }}>
//     //     <Layout>
//     //       <div className="child" />
//     //     </Layout>
//     //   </App>
//     // )

//     console.log(111)

//     // const wrapper = renderer.create(<App />).toJSON()

//     // expect(wrapper).toMatchSnapshot()
//   })
// })


import config from "src/config"

it('should return valid values', () => {

  console.log(11111)

  const attr = {
    port: process.env.PORT || 3000,

    trustProxy: process.env.TRUST_PROXY || 'loopback',
  }

  expect(config).toEqual(expect.objectContaining(attr))
})
