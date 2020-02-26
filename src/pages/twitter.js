import React from 'react'
import { withSiteData, Head } from 'react-static'
import bgImg1 from '../../public/alex_galea_alberta_mountains.jpg'

import { TwitterTimelineEmbed } from 'react-twitter-embed';


export default withSiteData(() => (
  <div className="wrapper">
    <Head>
      <title>alexgalea.ca | Blog</title>
      <meta
        name="description"
        content="Alex Galea Python Data Engineer - Twitter Feed."
      />
    </Head>
    <div className="main-div">
      <img className="bg-img" id="homepage-bg-img-1" src={bgImg1} alt=""></img>
      <div className="bg-banner bg-white"></div>
      <div>
        <p className="text-title-1">
          Twitter
          <br></br>
          Feed
        </p>
        <p className="text-title-2">
          <i>Alex Galea</i><br/>
        </p>
        <div>
          <TwitterTimelineEmbed
            sourceType="profile"
            screenName="agalea91"
            options={{height: 700}}
          />
        </div>
        {/* <div className="text-title-2" style={{paddingTop: "200px", paddingBottom: "500px"}}>
          Coming soon...
        </div> */}
        <div style={{paddingBottom: "40px"}}></div>
      </div>
    </div>
  </div>
))
