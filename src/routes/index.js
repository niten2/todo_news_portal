const routes = {
  path: '',

  children: [
    // {
    //   path: '',
    //   load: () => import(/* webpackChunkName: 'home' */ './home'),
    // },

    // {
    //   path: '',
    //   load: () => import(/* webpackChunkName: 'test' */ './test'),
    // },

    {
      path: '/articles',
      load: () => import(/* webpackChunkName: 'test' */ './articles/list'),
    },

    {
      path: '/articles/new',
      load: () => import(/* webpackChunkName: 'test' */ './articles/new'),
    },

    {
      path: '/articles/:id',
      load: () => import(/* webpackChunkName: 'test' */ './articles/show'),
    },

    // {
    //   path: '/test',
    //   load: () => import(/* webpackChunkName: 'home' */ './test'),
    // },

    // {
    //   path: '/contact',
    //   load: () => import(/* webpackChunkName: 'contact' */ './contact'),
    // },
    // {
    //   path: '/login',
    //   load: () => import(/* webpackChunkName: 'login' */ './login'),
    // },
    // {
    //   path: '/register',
    //   load: () => import(/* webpackChunkName: 'register' */ './register'),
    // },
    // {
    //   path: '/about',
    //   load: () => import(/* webpackChunkName: 'about' */ './about'),
    // },
    // {
    //   path: '/privacy',
    //   load: () => import(/* webpackChunkName: 'privacy' */ './privacy'),
    // },
    // {
    //   path: '/admin',
    //   load: () => import(/* webpackChunkName: 'admin' */ './admin'),
    // },

    // Wildcard routes, e.g. { path: '(.*)', ... } (must go last)
    {
      path: '(.*)',
      load: () => import(/* webpackChunkName: 'not-found' */ './page404'),
    },
  ],

  async action({ next }) {
    // Execute each child route until one of them return the result
    const route = await next()

    // Provide default values for title, description etc.
    route.title = `${route.title || 'Untitled Page'} - www.reactstarterkit.com`
    route.description = route.description || ''

    return route
  },
}

// The error page is available by permanent url for development mode
if (__DEV__) {
  routes.children.unshift({
    path: '/error',
    action: require('./error').default,
  })
}

export default routes
