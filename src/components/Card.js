import React from 'react'
import styled from 'styled-components'
import twitterIcon from '../images/twitter_icon.png'
import InstagramIcon from '../images/instagram_icon.png'
import youtubeIcon from '../images/youtube_icon.png'
import arrowDown from '../images/arrow-down.png'
import bookmarkEmpty from '../images/Bookmark_empty.svg'
import bookmarkFilled from '../images/Bookmark_Filled.png'

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
  display: grid;
  grid-template-columns: auto auto;
  padding: 0 15px 15px;
`

const Bookmark = styled.div`
  /* background-image: url(${bookmarkEmpty}); */
  position: absolute;
  width: 30px;
  height: 30px;
  top: -4%;
  right: 3%;
  img {
    height: 30px;
    width: 30px;
    object-fit: cover;
  }
`

const Text = styled.div``

const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding-bottom: 20px;

  img {
    height: 20px;
    width: 20px;
    object-fit: cover;
  }
`
const Togglebtn = styled.div`
  position: absolute;
  width: 30px;
  height: 30px;
  top: 93%;
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
  }
`

export default class Card extends React.Component {
  render() {
    return (
      <Wrapper>
        <img src={this.props.imgURL} alt="" />
        <CampaignInfo>
          <Bookmark>
            {this.props.isBookmarked ? (
              <img src={bookmarkEmpty} alt="bookmark Empty" />
            ) : (
              <img src={bookmarkFilled} alt="bookmark filled" />
            )}
          </Bookmark>
          <Text>
            <h2>{this.props.hashtag}</h2>
            <p>{this.props.productName}</p>
            <p>{this.props.campaignStatus}</p>
          </Text>
          <SocialIcons>
            {this.props.hasTwitter && <img src={twitterIcon} alt="Twitter" />}
            {this.props.hasInstagram && (
              <img src={InstagramIcon} alt="Instagram" />
            )}
            {this.props.hasYoutube && <img src={youtubeIcon} alt="Youtube" />}
          </SocialIcons>
        </CampaignInfo>
        <Togglebtn>
          <img src={arrowDown} alt="Twitter" />
        </Togglebtn>
      </Wrapper>
    )
    // <Router>
    //   <Wrapper>
    //     <Route
    //       exact
    //       path="/"
    //       render={() => <Home showDoneTodos={this.state.showDoneTodos} />}
    //     />
    //     <Route
    //       path="/config"
    //       render={() => (
    //         <Config
    //           showDoneTodos={this.state.showDoneTodos}
    //           onToggle={this.toggleShowDoneTodos}
    //         />
    //       )}
    //     />
    //     <nav>
    //       <NavLink exact activeClassName="active" to="/">
    //         Home
    //       </NavLink>
    //       <NavLink activeClassName="active" to="/config">
    //         Config
    //       </NavLink>
    //     </nav>
    //   </Wrapper>
    // </Router>
  }
}
