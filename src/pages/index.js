import React from 'react'
import { withSiteData } from 'react-static'
import bgImg1 from '../../public/alex_galea_raven.jpg'
import bgImg3 from '../../public/rose_white.png'
import styled from 'styled-components'
import { Link } from '@reach/router'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';


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

const BgBlock = styled.div`
  /* Size */
  width: 100%;
  height: ${props => props.height};
  /* Position */
  position: absolute;
  top: ${props => props.top};
  left: 0;
`

const Image = styled.img`
  opacity: 1;
  /* Size */
  width: 200px;
  height: auto;
  /* Position */
  position: relative;
  padding: 10vh;
  margin: auto;
`


function iframeRender(url, id) {
  var iframe = document.createElement("iframe");
  iframe.src = url;
  document.getElementById(id).appendChild(iframe);
}


function copyEmail(url, id) {
  navigator.clipboard.writeText("agalea91@gmail.com");
  toast.info('Email copied to clipboard!', {containerId: 'A'});
}


export default withSiteData(() => (
  <div className="wrapper">
    <ToastContainer enableMultiContainer
      containerId={'A'}
      newestOnTop={true}
      autoClose={2000}
    />
    <div className="main-div">
      <img className="bg-1" id="homepage-bg-img-1" src={bgImg1} alt=""></img>
      <div className="bg-banner bg-white"></div>
      <div>
        <p className="text-title-1">
          Alex Galea
        </p>
        <p className="text-title-2">
          <i>Python Software Engineer</i><br/>
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
      </div>
      
      <div className="bg-2">
        <div>
        {/* <div style={{paddingTop: "100px"}}> */}
          <div className="card-container">
            {/* <Card>
              <div id="iframe-parent"></div>
            </Card> */}
            <Card
              style={{'background': 'rgba(65, 240, 158, 0.4)'}}
              href="https://medium.com/@galea"
              target="_blank"
              // onClick={() => iframeRender("https://medium.com/@galea", "iframe-parent")}
            >
              <InnerCard>Medium Blog</InnerCard>
            </Card>
            <Card
              style={{'background': 'rgba(65, 100, 240, 0.4)'}}
              href="https://www.linkedin.com/in/alex-galea/"
              target="_blank"
            >
              <InnerCard>Linkedin</InnerCard>
            </Card>
            <Card
              style={{'background': 'rgba(240, 65, 170, 0.59)'}}
              href="https://www.amazon.com/Beginning-Data-Science-Python-Jupyter/dp/1789532027/"
              target="_blank"
            >
              <InnerCard>Beginning Data Science Book</InnerCard>
            </Card>
            <Card
              style={{'background': 'rgba(167, 65, 240, 0.3)'}}
              href="https://arxiv.org/pdf/1511.05123.pdf"
              target="_blank"
            >
              <InnerCard>M.Sc. Quantum Gas Paper</InnerCard>
            </Card>
            {/* <LinkCard to="/blog">
              <InnerCard>Blog</InnerCard>
            </LinkCard> */}
            {/* <Card href="https://kavacay.wordpress.com/" target="_blank" >
              <InnerCard>Vacay 🌴</InnerCard>
            </Card> */}
          </div>
          <div className="card-container" style={{display: "flex", flexWrap: "wrap"}}>
            <Card
              style={{'background': 'rgba(0, 0, 0, 0.3)', 'max-width': '400px', 'width': '200px'}}
              href="https://github.com/agalea91"
              target="_blank"
            >
              <InnerCard>GitHub Profile</InnerCard>
            </Card>
            <Card
              style={{'background': 'rgba(65, 231, 240, 0.3)', 'max-width': '400px', 'width': '200px'}}
              href="https://galeascience.wordpress.com/"
              target="_blank"
            >
              <InnerCard>DataViz Blog</InnerCard>
            </Card>
            {/* <LinkCard to="/blog">
              <InnerCard>Blog</InnerCard>
            </LinkCard> */}
            {/* <Card href="https://kavacay.wordpress.com/" target="_blank" >
              <InnerCard>Vacay 🌴</InnerCard>
            </Card> */}
          </div>
        </div>
      </div>
    </div>
    {/* <div className="main-div">
      <BgBlock top="170%">
        <Image src={bgImg3} alt="" />
      </BgBlock>
    </div> */}
    {/* <BgBlock top="250%" height="100px"></BgBlock> */}
  </div>
))
