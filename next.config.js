module.exports = {
  useFileSystemPublicRoutes: false,
  routes: [
    {
      page: '/about',
      path: '/about/:id'
    },
    {
      page: '/event-list',
      path: '/events'
    },
    {
      page: '/persons-detail',
      path: '/persons/:name'
    },
    {
      page: '/persons-list',
      path: '/persons'
    },
    {
      page: '/event',
      path: '/event/:name'
    }
  ]
}
