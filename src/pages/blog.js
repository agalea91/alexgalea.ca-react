import React from 'react'
import { withSiteData, Head } from 'react-static'
import bgImg1 from '../../public/alex_galea_raven.jpg'

var mediumWidgetHTML = `
<div id="medium-widget"></div>
<script src="https://medium-widget.pixelpoint.io/widget.js"></script>
<script>MediumWidget.Init({renderTo: '#medium-widget', params: {"resource":"https://medium.com/@galea","postsPerLine":2,"limit":10,"picture":"big","fields":["description","author","claps","publishAt"],"ratio":"landscape"}})</script>
`


export default withSiteData(() => (
  <div className="wrapper">
    <Head>
      <title>alexgalea.ca | Blog</title>
      <meta
        name="description"
        content="Alex Galea Python Data Engineer - Medium Blog."
      />
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
        <div className="text-title-2" style={{paddingTop: "200px", paddingBottom: "500px"}}>
          Coming soon...
        </div>
        {/* <div dangerouslySetInnerHTML={{ __html: mediumWidgetHTML }}></div> */}
      </div>
    </div>
  </div>
))
