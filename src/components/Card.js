import React from 'react'
import styled from 'styled-components'
import twitterIcon from '../images/twitter_icon.png'
import InstagramIcon from '../images/instagram_icon.png'
import youtubeIcon from '../images/youtube_icon.png'
import arrowDown from '../images/arrow-down.png'
import CampaignDetails from './CampaignDetails'

const Wrapper = styled.section`
  position: relative;
  width: 80%;
  min-height: 150px;
  background: #fff;
  box-shadow: 0 8px 16px rgba(0, 40, 100, 0.4);
  border-radius: 4px;

  img {
    width: 100%;
    height: 100px;
    object-fit: cover;
    border-radius: 4px 4px 0 0;
  }
`
const CampaignInfo = styled.div`
  position: relative;
  padding: 0 15px 30px;

  h2 {
    word-wrap: break-word;
    margin: 15px 0;
  }
  p {
    margin: 0;
  }
`

const StatusAndSocial = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  p {
    margin: 0;
  }
`

const SocialIcons = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 3px;

  img {
    height: 20px;
    width: 20px;
    object-fit: cover;
  }
`
const ToggleBtn = styled.div`
  position: absolute;
  width: 30px;
  height: 30px;
  bottom: -15px;
  right: calc(50% - 15px);
  border-radius: 50%;
  box-shadow: 0 8px 16px rgba(0, 40, 100, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;

  img {
    height: 20px;
    width: 20px;
    object-fit: cover;
    transition: all 0.5s ease;

    &.upside-down {
      transform: rotate(180deg);
    }
  }
`

export default class Card extends React.Component {
  state = {
    showDetails: false
  }

  toggleDetails = () => {
    this.setState({
      showDetails: !this.state.showDetails
    })
  }

  render() {
    return (
      <Wrapper>
        <img src={this.props.imgURL} alt="" />
        <CampaignInfo>
          <div>
            <h2>{this.props.headline}</h2>
            <p>{this.props.productName}</p>
          </div>
          <StatusAndSocial>
            <p>Status: {this.props.campaignStatus}</p>
            <SocialIcons>
              {this.props.hasTwitter && <img src={twitterIcon} alt="Twitter" />}
              {this.props.hasInstagram && (
                <img src={InstagramIcon} alt="Instagram" />
              )}
              {this.props.hasYoutube && <img src={youtubeIcon} alt="Youtube" />}
            </SocialIcons>
          </StatusAndSocial>
          <CampaignDetails
            showMe={this.state.showDetails}
            productDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, eos delectus! Sint earum officia quasi. Eius minus id nobis perferendis temporibus distinctio, suscipit quod. Doloremque non ad iure eveniet quis?      "
            postingPeriod="15 Jan 2019 - 30 Jan 2019"
            amountPosts={1}
            amountStories={2}
            tags="@neuefische"
            hashtags="#neuefische #bootcamp #ad"
          />
        </CampaignInfo>
        <ToggleBtn onClick={this.toggleDetails}>
          <img
            src={arrowDown}
            alt="arrow-down"
            className={this.state.showDetails ? 'upside-down' : null}
          />
        </ToggleBtn>
      </Wrapper>
    )
  }
}
