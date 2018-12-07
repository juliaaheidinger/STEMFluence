import React, { Component } from 'react'
import styled from 'styled-components'
import CardContainer from './CardContainer'

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

  renderSingleCard = campainData => {
    return <CardContainer cardObj={campainData} key={campainData.id} />
  }

  render() {
    return <Wrapper>{this.createCards()}</Wrapper>
  }
}
