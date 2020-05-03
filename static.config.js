

import axios from 'axios'

export default {
  getSiteData: () => ({
    title: 'alexgalea.ca | Alex Galea - Python Data Engineer',
  }),
  getRoutes: async () => {
    const { data: postIndex } = await axios.get(
      'https://alexgalea.ca/photoblog/posts_index.json'
    )
    
    return [
      {
        path: '/',
        component: 'src/pages/index',
      },
      {
        path: '/bluezones',
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
      {
        path: '/photoblog',
        component: 'src/pages/photoblog',
        getData: () => ({
          postIndex,
        }),
        children: postIndex['posts'].map(post => ({
          path: `/post/${post.post_id}`,
          component: 'src/components/PhotoblogPost',
          getData: () => ({
            post,
          // async () => ({
          //   data : await axios.get(
          //     `https://alexgalea.ca/photoblog/posts/${post.date.slice(0,4)}/${post.post_ytd_number}.json`
          //   )
          // }),
          }),
        }))
      },

    ]
  },
  siteRoot: 'https://alexgalea.ca',
}
