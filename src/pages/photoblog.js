import React from 'react'
import { withSiteData, Head } from 'react-static'
import bgImg1 from '../../public/alex_galea_raven.jpg'

import postIndex from '../../photoblog/posts/posts_index.json'

var posts = []
postIndex['posts'].forEach((post) =>
  posts.push({
    "img": require(`../../photoblog/posts/${post.cover_image}`),
    ...post
  })
)

function PostFeed(props) {
  const postFeedHtml = posts.map((post) =>
    <div>
      <p>{post.title}</p>
      <p>{post.date}</p>
      <div className="photoblog-index-post-img-container">
        <a href={`/photoblog/post/${post.post_id}`}>
          <img
            className="photoblog-index-post-img"
            alt=""
            src={post.img}
          ></img>
        </a>
      </div>
    </div>
  );
  console.log(postFeedHtml);
  return postFeedHtml;
}

export default withSiteData(() => (
  <div className="wrapper">
    <Head>
      <title>alexgalea.ca | Photo Blog</title>
      <meta
        name="description"
        content="Alex Galea - Photo Blog."
      />
    </Head>
    <div className="main-div">
      <img className="bg-img" id="homepage-bg-img-1" src={bgImg1} alt=""></img>
      <div className="bg-banner bg-white"></div>
      <div>
        <p className="text-title-1">
          Photo Blog
        </p>
        <p className="text-title-2">
          <i>Alex Galea</i><br/>
        </p>
      </div>
    </div>
    <div className="photoblog-index-body-1">
      <PostFeed />
    </div>
  </div>
))
