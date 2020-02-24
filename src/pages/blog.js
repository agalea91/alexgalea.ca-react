import React from 'react'
import { withSiteData, Head } from 'react-static'
import bgImg1 from '../../public/alex_galea_raven.jpg'


var mediumWidgetHTML = `
<div id="retainable-rss-embed" 
data-rss="https://medium.com/feed/@galea"
data-maxcols="2" 
data-layout="grid" 
data-poststyle="modal" 
data-readmore="Read the rest" 
data-buttonclass="btn btn-primary" 
data-offset="-100"></div>
`



export default withSiteData(() => (
  <div className="wrapper">
    <Head>
      <title>alexgalea.ca | Blog</title>
      <meta
        name="description"
        content="Alex Galea Python Data Engineer - Medium Blog."
      />
      <script src="https://www.retainable.io/assets/retainable/rss-embed/retainable-rss-embed.js"></script>
    </Head>
    <div className="main-div">
      <img className="bg-img" id="homepage-bg-img-1" src={bgImg1} alt=""></img>
      <div className="bg-banner bg-white"></div>
      <div>
        <p className="text-title-1">
          Alex Galea
        </p>
        <p className="text-title-2">
          <i>Python Data Engineer</i><br/>
          Data Science | ETL | Web Analytics
        </p>
        {/* <div className="text-title-2" style={{paddingTop: "200px", paddingBottom: "500px"}}>
          Coming soon...
        </div> */}
      </div>
    </div>
    <div className="blog-body-1">
      <div dangerouslySetInnerHTML={{ __html: mediumWidgetHTML }}></div>
    </div>
  </div>
))
