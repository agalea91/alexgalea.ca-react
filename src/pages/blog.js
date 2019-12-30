import React from 'react'
import { withSiteData } from 'react-static'
import bgImg1 from '../../public/alex_galea_raven.jpg'
import bgImg3 from '../../public/rose_white.png'
import styled from 'styled-components'



const Cards = styled.div`
  display: flex;
  flex-align: stretch;
  justify-content: stretch;
  flex-wrap: wrap;
  width: 300px;
  max-width: 95%;
  margin: auto;
`

const Card = styled.a`
  flex: 1 1 150px;
  border: 1px rgb(0,0,0,1);
  background: rgb(0,0,0,0.8);
  color: white;
  border-radius: 5px;
  padding: 2vh 2vw;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 10px;
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

export default withSiteData(() => (
  <div className="wrapper">
    <div className="main-div">
      <div className="bg-banner bg-white"></div>
      <div className="text-title">
        <p className="text-title-1">
          K&amp;A
        </p>
        <p className="text-title-2">
          Friday<br/>
          Sept. 13th<br/>
          2019
        </p>
      </div>
      <img className="bg-1" id="homepage-bg-img-1" src={bgImg1} alt=""></img>
      <BgBlock className="bg-white" top="120%" height="120px">
        <p className="text-body-1 vertical-align">
          Welcome to our wedding page 🎉
        </p>
      </BgBlock>
    </div>
    <div className="main-div">
      <BgBlock top="143%">
        <Image src={bgImg3} alt="" />
      </BgBlock>
    </div>
    <div className="main-div">
      <BgBlock className="bg-white" top="200%" height="1050px">
        <div style={{padding: "2rem"}}>
          <p className="text-body-1">
            We had a lot of fun typing out the invitations and look forward to celebrating with everyone this September 😊 
            <br/>
            <br/>
            Please RSVP by clicking the link below and filling in the form.
            <br/>
            <br/>
            The deadline to RSVP is August 1st!
          </p>
        </div>
        <Cards>
          <Card href="https://forms.gle/DfPYma8k2jCwfH988" >
            <InnerCard>RSVP 💌</InnerCard>
          </Card>
        </Cards>
        <div>
          <p className="text-body-1">
            <ul>
              <li>
                Our venue is <a href="https://goo.gl/maps/13y4ZFFYiF6yHnkK9" target="_blank">The Roseville Estate</a> in Cambridge, ON.
              </li>
              <li>
                Please arrive by 4:00 PM as the ceremony is at 4:30 PM.
              </li>
              <li>
                Overnight parking at the venue is allowed (until 11 AM on Saturday). There will be shuttles running to the <a href="http://www.kitchenercambridge.hgi.com/" target="_blank">Hilton Garden Inn</a> / <a href="http://www.cambridgehotel.ca/" target="_blank">Cambridge Hotel</a> later in the night.
              </li>
            </ul>
          </p>
        </div>
      </BgBlock>
    </div>
    <div className="main-div">
      <BgBlock top="400%" height="20px">
      </BgBlock>
    </div>
  </div>
))
