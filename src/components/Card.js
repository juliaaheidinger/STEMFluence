import React from 'react'
import styled from 'styled-components'

//Hierzu Jerry fragen, ob es noch einen besseren Weg gibt, um Bilder zu importieren
// import twitterIcon from '../../public/images/twitter_icon.png'
// import InstagramIcon from '../../public/images/instagram_icon.png'
// import youtubeIcon from '../../public/images/youtube_icon.png'
// import arrowDown from '../../public/images/arrow-down.png'
import CampaignDetails from './CampaignDetails'
import Bookmark from './Bookmark'
import PropTypes from 'prop-types'

const Wrapper = styled.section`
  position: relative;
  width: 80%;
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
  static propTypes = {
    imgURL: PropTypes.string,
    headline: PropTypes.string,
    productName: PropTypes.string,
    campaignStatus: PropTypes.oneOf([
      'Application Phase',
      'Posting Phase',
      'Completed'
    ]),
    hasTwitter: PropTypes.bool,
    hasInstagram: PropTypes.bool,
    hasYoutube: PropTypes.bool
  }

  static defaultProps = {
    campaignStatus: 'Application Phase'
  }

  state = {
    showDetails: false,
    cardID: this.loadCardID()
  }

  saveCardID() {
    localStorage.setItem(
      [this.props.headline + '-cardID'],
      JSON.stringify(this.props.id)
    )
  }

  loadCardID() {
    try {
      return JSON.parse(localStorage.getItem(this.props.headline + '-cardID'))
    } catch (err) {
      return console.log(err)
    }
  }

  toggleDetails = () => {
    this.setState({
      showDetails: !this.state.showDetails
    })
  }

  chooseBookmarkImage = () => {
    return this.props.isBookmarked ? (
      <img src="images/bookmark-filled.svg" alt="bookmark filled" />
    ) : (
      <img src="images/bookmark-empty.svg" alt="bookmark empty" />
    )
  }

  render() {
    this.saveCardID()
    const {
      imgURL,
      headline,
      productName,
      campaignStatus,
      hasTwitter,
      hasInstagram,
      hasYoutube,
      id,
      rest
    } = this.props

    const {
      productDescription,
      postingPeriod,
      amountPosts,
      amountStories,
      tags,
      hashtags
    } = rest

    return (
      <Wrapper>
        <img src={imgURL} alt="" />
        <CampaignInfo>
          <Bookmark
            toggleBookmark={this.props.toggleBookmark}
            img={this.chooseBookmarkImage()}
          />
          <div>
            <h2>{headline}</h2>
            <p>{productName}</p>
          </div>
          <StatusAndSocial>
            <p>Status: {campaignStatus}</p>
            <SocialIcons>
              {hasTwitter && (
                <img src="images/twitter_icon.png" alt="Twitter" />
              )}
              {hasInstagram && (
                <img src="images/instagram_icon.png" alt="Instagram" />
              )}
              {hasYoutube && (
                <img src="images/youtube_icon.png" alt="Youtube" />
              )}
            </SocialIcons>
          </StatusAndSocial>
          <CampaignDetails
            id={id}
            showDetails={this.state.showDetails}
            productDescription={productDescription}
            postingPeriod={postingPeriod}
            amountPosts={amountPosts}
            amountStories={amountStories}
            tags={tags}
            hashtags={hashtags}
          />
        </CampaignInfo>
        <ToggleBtn onClick={this.toggleDetails}>
          <img
            src="images/arrow-down.png"
            alt="arrow-down"
            className={this.state.showDetails ? 'upside-down' : null}
          />
        </ToggleBtn>
      </Wrapper>
    )
  }
}
