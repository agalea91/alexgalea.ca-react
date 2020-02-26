export default {
  getSiteData: () => ({
    title: 'alexgalea.ca | Alex Galea - Python Data Engineer',
  }),
  getRoutes: async () => {
//     const { data: posts } = await axios.get(
//       'https://jsonplaceholder.typicode.com/posts'
//     )
    return [
      {
        path: '/',
        component: 'src/pages/index',
      },
      {
        path: '/bluezone',
        component: 'src/pages/bluezones',
      },
      {
        path: '/blog',
        component: 'src/pages/blog',
      },
      {
        path: '/twitter',
        component: 'src/pages/twitter',
      },
    ]
  },
  siteRoot: 'https://alexgalea.ca',
}