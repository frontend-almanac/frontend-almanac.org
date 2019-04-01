module.exports = {
    useFileSystemPublicRoutes: false,
    routes: [
      {
          page: '/about',
          path: '/about/:id'
      },
      {
        page: '/persons',
        path: '/persons'
      },
      {
        page: '/persons',
        path: '/persons/:name'
      },
      {
        page: '/event',
        path: '/event/:name'
      }
    ]
}
