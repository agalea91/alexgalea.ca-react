import React from 'react'
import { withSiteData, Head } from 'react-static'
import bgImg1 from '../../public/alex_galea_raven.jpg'
import scIcon from '../../public/social_media_icon.png'
import styled from 'styled-components'


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

const InnerCard = styled.div`
  width: 100%;
  height: 100%
`

var gtmScript = `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'UA-114732034-2');
`

export default withSiteData(() => (
  <div className="wrapper">
    <Head>
      <title>alexgalea.ca | Vegan Prana Power Meals</title>
      <script src="https://www.googletagmanager.com/gtag/js?id=UA-114732034-2"></script>
      <script>{gtmScript}</script>
    </Head>
    <div className="main-div">
      <img className="bg-img" id="homepage-bg-img-1" src={bgImg1} alt=""></img>
      <div className="bg-banner bg-white"></div>
      <div className="main-content-div">
        <div className="text-title">
          <p className="bluezone-title-1">
            Vegan Prana Power Meals
          </p>
        </div>
        <div>
          <p className="text-body-1" style={{paddingTop: "30px", paddingBottom: "50px"}}>
            MINDFUL EATING<br/>
            FOR MUSCLE GAIN THROUGH<br/>
            THE 5 PRANA VAYUS<br/>
          </p>
          <div className="card-container" style={{paddingTop: "3rem", maxWidth: "400px"}}>
              <Card
                style={{background: 'rgba(0, 224, 146, 0.3)'}}
                href="https://docs.google.com/forms/d/e/1FAIpQLSdWriJ0PJw5WgkRAjP12LgChBt1wHBGzyhasXRg-2fgGYGE7Q/viewform?usp=sf_link"
                target="_blank"
              >
              <InnerCard>Click to Download<br/>Vegan Prana Power Meals<br/>Recipe Book PDF 🌱</InnerCard>
            </Card>
          </div>
          <p className="text-body-1" style={{paddingTop: "50px"}}>
            Yama, the first of the 8 limbs of yoga, asks for nonviolence; ahiṃsā, to not cause pain.<br/><br/>
            I've seen the suffering caused by the consumption of animal products and refuse to be a part of it.<br/><br/>
            It is my hope that, through your own journey, you will see this truth and follow the same path.
          </p>
        </div>
        <div>
          {/* <p className="text-body-1">
            <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSdWriJ0PJw5WgkRAjP12LgChBt1wHBGzyhasXRg-2fgGYGE7Q/viewform?usp=sf_link">
              Download Vegan Prana Power Meals PDF 🌱
            </a>
          </p> */}
          <p className="text-body-1" style={{paddingTop: "30px", paddingBottom: "50px"}}>
            The meals I've included in this book are staples in my diet and easy to prepare.
            My Cocoa Breakfast Lentils are something I look forward to eating first nearly every day (lately).
            And for dinner, my Miso Tofu Bulgogi is a great crowd pleaser that pairs well with cruciferous vegetables.<br/><br/>
            I am proud to say that I've taken a beautiful photograph of each meal in the book and estimated the macro nutrition
            details per portion. This way you can see exactly what a Choco Bean Smoothie or Mangoes Nuts Pudding has to offer.
            
          </p>
          {/* <div>
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdWriJ0PJw5WgkRAjP12LgChBt1wHBGzyhasXRg-2fgGYGE7Q/viewform?embedded=true" width="400" height="1100" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
          </div> */}
          <p className="text-body-1">
            Follow me
            on <a
                style={{color: "white", textDecoration: "underline"}}
                href="https://instagram.com/bluezonealex">instagram
              </a>
            <br/>
            <br/>
            for more plant-based meal inspiration 👇
          </p>
          <div className="card-container" style={{paddingTop: "3rem", maxWidth: "200px"}}>
            <a href="https://instagram.com/bluezonealex" target="_blank">
              <img
                className="image-white-frame"
                id="sc-icon"
                alt=""
                src={scIcon} width="100%"
              ></img>
            </a>
          </div>
        </div>
        <div style={{'paddingTop': '100px'}}></div>
      </div>
    </div>
  </div>
))
