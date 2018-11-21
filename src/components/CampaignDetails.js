import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
  max-height: 0;
  overflow: hidden;
  transition: all 0.5s ease;
  color: #000;

  p {
    font-size: 14px;
  }

  h3 {
    margin-bottom: 5px;
  }

  &.visible {
    opacity: 1;
    max-height: 100vh;
    transition: all 1.5s ease;
  }
`

export default class CampaignDetails extends React.Component {
  render() {
    const {
      showMe,
      productDescription,
      postingPeriod,
      amountPosts,
      amountStories,
      tags,
      hashtags
    } = this.props
    return (
      <Wrapper className={showMe ? 'visible' : null}>
        <h3>Product Description</h3>
        <p>{productDescription}</p>
        <h3>Briefing</h3>
        <p>
          Timing: {postingPeriod} <br />
          {amountPosts} Posts {amountStories} Stories <br />
          {tags} <br />
          {hashtags}
        </p>
      </Wrapper>
    )
  }
}
