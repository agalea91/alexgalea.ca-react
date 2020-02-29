import React from 'react'
import { withSiteData, Head } from 'react-static'
import bgImg1 from '../../public/alex_galea_raven.jpg'
import alexPic1 from '../../public/alex_galea_alberta.jpg'
import ecomSlidePic from '../../public/alex_galea_ecom_analytics.png'
import styled from 'styled-components'
import { Link } from '@reach/router'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'


const Card = styled.a`
  flex: 1 1 150px;
  border: 1px rgb(0,0,0,0.2);
  background: rgb(0,0,0,0.3);
  color: white;
  border-radius: 5px;
  padding: 2vh 2vw;
  max-width: 800px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-bottom: 5vh;
  font-weight: 100;
  font-size: 30px;
  cursor: pointer;
  transition: 0.1s ease-out;
  white-space: nowrap;
  :hover {
    transform: translate(3px, 0px);
    box-shadow: 6px 10px 10px rgba(0, 0, 0, 0.2);
  }
`

const EmailCard = styled.div`
  flex: 1 1 150px;
  border: 1px rgb(0,0,0,0.2);
  background: rgb(0,0,0,0.3);
  color: white;
  border-radius: 5px;
  max-width: 300px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-bottom: 5vh;
  font-weight: 100;
  font-size: 30px;
  cursor: pointer;
  transition: 0.1s ease-out;
  white-space: nowrap;
  :hover {
    transform: translate(3px, 0px);
    box-shadow: 6px 10px 10px rgba(0, 0, 0, 0.2);
  }
`

const LinkCard = styled(Link)`
  flex: 1 1 150px;
  border: 1px rgb(0,0,0,0.2);
  background: rgb(0,0,0,0.3);
  color: white;
  border-radius: 5px;
  padding: 2vh 2vw;
  max-width: 800px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-bottom: 5vh;
  font-weight: 100;
  font-size: 30px;
  cursor: pointer;
  transition: 0.1s ease-out;
  white-space: nowrap;
  :hover {
    transform: translate(3px, 0px);
    box-shadow: 6px 10px 10px rgba(0, 0, 0, 0.2);
  }
`

const InnerCard = styled.div`
  width: 100%;
  height: 100%
`

const InnerEmailCard = styled.div`
  width: 100%;
  height: 100%;
  margin-bottom: 15px;
`

// function iframeRender(url, id) {
//   var iframe = document.createElement("iframe");
//   iframe.src = url;
//   document.getElementById(id).appendChild(iframe);
// }

// var aiEcommSlidesIframe = '<iframe src="https://www.slideshare.net/slideshow/embed_code/key/FBlgxt273KGX8R" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%; width: 100%; height: 100%;" allowfullscreen> </iframe>';
var aiEcommSlidesIframe = '<iframe src="//www.slideshare.net/slideshow/embed_code/key/FBlgxt273KGX8R" width="595" height="485" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen> </iframe> <div style="margin-bottom:5px"> <strong> <a href="//www.slideshare.net/AlexanderGalea1/using-ai-for-ecommerce-analytics" title="Using AI for Ecommerce Analytics" target="_blank">Using AI for Ecommerce Analytics</a> </strong> from <strong><a href="https://www.slideshare.net/AlexanderGalea1" target="_blank">Alexander Galea</a></strong> </div>';


function copyEmail(url, id) {
  navigator.clipboard.writeText("agalea91@gmail.com");
  toast.info('Email copied to clipboard!', {containerId: 'A'});
}

export default withSiteData(() => (
  <div className="wrapper">
    <Head>
      <meta
        name="description"
        content="Alex Galea Python Data Engineer. Proudly Canadian, living in Vancouver, BC."
      />
    </Head>
    <ToastContainer enableMultiContainer
      containerId={'A'}
      newestOnTop={true}
      autoClose={2000}
    />
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
        <p className="text-title-3">
          Get in touch ⬇
        </p>
        <div>
          <div className="card-container">
            <EmailCard>
              <InnerEmailCard id="inner-email-card" onClick={copyEmail}>agalea91@gmail.com</InnerEmailCard>
            </EmailCard>
          </div>
        </div>
        <div className="card-container">
          <a href="https://alexgalea.ca/alex_galea_alberta.jpg" target="_blank">
            <img
              className="image-white-frame"
              id="alex-hiking-pic"
              alt="Alex Galea hiking in Alberta, Canada"
              src={alexPic1} width="100%"
            ></img>
          </a>
        </div>
        <div className="card-container">
          {/* <Card>
            <div id="iframe-parent"></div>
          </Card> */}
          {/* <LinkCard to="/blog">
            <InnerCard>Blog</InnerCard>
          </LinkCard> */}
          <Card
            style={{background: 'rgba(65, 240, 158, 0.4)'}}
            href="/blog"
            target="_blank"
            // onClick={() => iframeRender("https://medium.com/@galea", "iframe-parent")}
          >
            <InnerCard>Medium Blog</InnerCard>
          </Card>
          <Card
            style={{background: 'rgba(65, 100, 240, 0.4)'}}
            href="https://www.linkedin.com/in/alex-galea/"
            target="_blank"
          >
            <InnerCard>Linkedin</InnerCard>
          </Card>
          <Card
            style={{background: 'rgba(240, 65, 170, 0.59)'}}
            href="https://www.amazon.com/Beginning-Data-Science-Python-Jupyter/dp/1789532027/"
            target="_blank"
          >
            <InnerCard>My Data Science Book</InnerCard>
          </Card>
          <Card
            style={{background: 'rgba(167, 65, 240, 0.3)'}}
            href="https://arxiv.org/pdf/1511.05123.pdf"
            target="_blank"
          >
            <InnerCard>My M.Sc Cold Atoms Paper</InnerCard>
          </Card>
        </div>
        <div className="card-container">
          <div id="ecom-slide-pic">
            <a href="https://www.slideshare.net/AlexanderGalea1/using-ai-for-ecommerce-analytics" target="_blank">
              <img
                className="image-white-frame"
                alt="Alex Galea Using AI for Ecommerce Analytics"
                src={ecomSlidePic} width="100%"
              ></img>
            </a>
          </div>
        </div>
        <div className="card-container">
          <Card
            style={{background: 'rgba(29, 202, 255, 0.6)'}}
            href="/twitter"
            target="_blank"
            // onClick={() => iframeRender("https://medium.com/@galea", "iframe-parent")}
          >
            <InnerCard>Twitter</InnerCard>
          </Card>
        </div>
        <div className="card-container">
          <div style={{
            display: "flex",
            flexWrap: "wrap",
            marginBottom: "5vh",
          }}>
            <Card
              style={{
                background: 'rgba(0, 0, 0, 0.3)',
                maxWidth: '400px',
                width: '200px',
                marginBottom: 'auto',
              }}
              href="https://github.com/agalea91"
              target="_blank"
            >
              <InnerCard>GitHub Profile</InnerCard>
            </Card>
            <Card
              style={{
                background: 'rgba(65, 231, 240, 0.3)',
                maxWidth: '400px',
                width: '200px',
                marginBottom: 'auto',
              }}
              href="https://galeascience.wordpress.com/"
              target="_blank"
            >
              <InnerCard>DataViz Blog</InnerCard>
            </Card>
          </div>
        </div>
        <div className="card-container">
          <Card
            style={{background: 'rgba(23, 13, 117, 0.3)'}}
            href="https://alexgalea.ca/bluezones"
            target="_blank"
          >
            <InnerCard>Blue Zone Instagram</InnerCard>
          </Card>
        </div>
        {/* <div className="card-container">
          <div
            id="ai-ecommerce-slideshare"
            contentEditable="true"
            dangerouslySetInnerHTML={{ __html: aiEcommSlidesIframe }}>
          </div>
        </div> */}
        <div style={{paddingTop: '100px'}}></div>
      </div>
    </div>
  </div>
))
