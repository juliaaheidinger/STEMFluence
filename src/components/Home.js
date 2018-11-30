import React, { Component } from 'react'
import styled from 'styled-components'
import Card from '../components/Card'

const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  grid-gap: 30px;
  grid-auto-flow: center;
  overflow-y: scroll;
`

export default class Home extends Component {
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
    return <Wrapper>{this.createCards()}</Wrapper>
  }
}
