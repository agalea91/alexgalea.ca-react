import React from 'react'
import { withSiteData, Head } from 'react-static'
import bgImg1 from '../../public/alex_galea_raven.jpg'
import blueZoneVenn from '../../public/blue_zones_venn_diagram.svg'
import blueZoneMap from '../../public/blue_zones_map.jpg'
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
      <title>alexgalea.ca | Blue Zones</title>
      <script src="https://www.googletagmanager.com/gtag/js?id=UA-114732034-2"></script>
      <script>{gtmScript}</script>
    </Head>
    <div className="main-div">
      <img className="bg-img" id="homepage-bg-img-1" src={bgImg1} alt=""></img>
      <div className="bg-banner bg-white"></div>
      <div className="main-content-div">
        <div className="text-title">
          <p className="bluezone-title-1">
            Blue Zones
          </p>
        </div>
        <div>
          <p className="text-body-1" style={{paddingTop: "50px"}}>
            are regions where the average lifespan is much longer than normal.
            This can be attributed to their lower stress lifestyle, moderate
            amount of physical activity, tendency not to smoke, and diet.
            They eat a lot of plants, including whole grains, sweet potatoes,
            and legumes. 
          </p>
        </div>
        <div className="card-container" style={{paddingTop: "50px"}}>
          <div className="white-bg-image-container" style={{background: 'white'}}>
            <a href="https://commons.wikimedia.org/wiki/File:3_blue_zones_venn_diagram.svg" target="_blank">
              <img
                className="image-white-frame"
                id="blue-zones-venn"
                alt="Blue Zones venn diagram"
                src={blueZoneVenn} width="100%"
              ></img>
            </a>
          </div>
        </div>
        <div className="card-container" style={{paddingTop: "50px"}}>
          <a href="https://www.uu.nl/sites/default/files/articlestopicskeynotes.pdf" target="_blank">
            <img
              className="image-white-frame"
              id="blue-zones-map"
              alt="Blue Zones map"
              src={blueZoneMap} width="100%"
            ></img>
          </a>
        </div>
        <div>
          <p className="text-body-1">
            I started a public instagram account, mostly to post photos
            of <a
                style={{color: "white", textDecoration: "underline"}}
                href="https://instagram.com/bluezonealex">delicious plant based food
              </a>.
            <br/>
            <br/>
            I might put up some photos of me from time to time
            as well.
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
          <p className="text-body-1">
            Check out my recipe book 😊 🌱
          </p>
          <div className="card-container" style={{paddingTop: "3rem", maxWidth: "400px"}}>
              <Card
                style={{background: 'rgba(0, 224, 146, 0.3)'}}
                href="https://drive.google.com/open?id=1Mq46jUoUzVDapiRtqLFBnHj6sFGCOa9NqsPzHdArXJU"
                target="_blank"
              >
              <InnerCard>Mostly Vegan Recipe Book</InnerCard>
            </Card>
          </div>
          <p className="text-body-1">
            My goal is to inspire you to eat plants, avoid animal 
            products, and set aside more time to be physically active.
          </p>
        </div>
        <div style={{'paddingTop': '100px'}}></div>
      </div>
    </div>
  </div>
))
