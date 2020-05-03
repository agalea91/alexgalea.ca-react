import React from 'react'
import { withRouteData, Head } from 'react-static'
import bgImg1 from '../../public/alex_galea_raven.jpg'

function PhotoReel(post) {
  const imageHtml = [];
  const images = 
  Object.entries(images).forEach(([imageName, imagePath]) => {
    imageHtml.push(
      <img
        className="fullscreen-photo-gallery"
        // src={"../" + image}
        src={imagePath}
        alt={imageName}>
      </img>
    );
  });
  return imageHtml;
}


export default withRouteData(( {post} ) => (
  <div className="wrapper">
    <Head>
      <title>alexgalea.ca | Photo Blog</title>
      <meta
        name="description"
        content="Alex Galea - Photo Blog."
      />
    </Head>
    <div className="main-div">
      {/* <h1>{post.post_id}</h1> */}
      <img className="bg-img" id="homepage-bg-img-1" src={bgImg1} alt=""></img>
      <div className="bg-banner bg-white"></div>
      <div>
        <p className="text-title-1">
          Photo Blog
        </p>
        <p className="text-title-2">
          <i>Alex Galea</i><br/>
        </p>
        <div>
          <p>{JSON.stringify(post)}</p>
        </div>
      </div>
    </div>
    <div className="blog-body-1">
      {/* <PhotoReel post={post}/> */}
    </div>
  </div>
))
