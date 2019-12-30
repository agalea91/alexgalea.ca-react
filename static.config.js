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
        path: '/blog',
        component: 'src/pages/blog',
      },
    ]
  },
  siteRoot: 'https://alexgalea.ca',
}