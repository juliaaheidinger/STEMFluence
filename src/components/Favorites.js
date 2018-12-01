import React from 'react'
import styled from 'styled-components'
import Card from './Card'

const DefaultText = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 10px;
  padding: 0 30px;
`

const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  grid-gap: 30px;
  grid-auto-flow: center;
  overflow-y: scroll;
`
const StylingIfOnlyOneCardOnPage = styled.div`
  height: 225px;
`

export default class Favorites extends React.Component {
  createCards() {
    return this.props.teaserData.map(this.renderSingleCard)
  }

  renderSingleCard = teaserInfo => {
    const {
      imgURL,
      headline,
      productName,
      campaignStatus,
      hasTwitter,
      hasInstagram,
      hasYoutube,
      id,
      isBookmarked,
      ...rest
    } = teaserInfo

    return (
      <Card
        key={id}
        id={id}
        imgURL={imgURL}
        headline={headline}
        productName={productName}
        campaignStatus={campaignStatus}
        hasTwitter={hasTwitter}
        hasInstagram={hasInstagram}
        hasYoutube={hasYoutube}
        rest={rest}
        toggleBookmark={() => this.props.toggleBookmark(id)}
        isBookmarked={isBookmarked}
      />
    )
  }

  render() {
    return (
      <Wrapper>
        {this.props.teaserData.length > 0 ? (
          <React.Fragment>
            {this.createCards()}
            <StylingIfOnlyOneCardOnPage />
          </React.Fragment>
        ) : (
          <DefaultText>
            Hey there, here you'll see all your bookmarked cards
            <span role="img" aria-label="starseyes">
              🤩
            </span>
          </DefaultText>
        )}
      </Wrapper>
    )
  }
}
