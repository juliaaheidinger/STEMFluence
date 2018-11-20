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
    return (
      <Wrapper className={this.props.showMe ? 'visible' : null}>
        <h3>Product Description</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
          dignissimos possimus! Unde voluptate, quibusdam hic deserunt
          architecto ea sit distinctio ipsum debitis iste dolorum, possimus quo
          dolorem, eaque quas mollitia.
        </p>
        <h3>Briefing</h3>
        <p>
          Timing: 01.Jan - 15.Jan 2019 <br />
          1 Post 2 Stories <br />
          @neuefische <br />
          #neuefische #bootcamp #ad #becomeADeveloper
        </p>
      </Wrapper>
    )
  }
}