import React from 'react'
import styled from 'styled-components'
import FavoriteContainer from './FavoriteContainer'

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

  renderSingleCard = campainData => {
    return <FavoriteContainer cardObj={campainData} key={campainData.id} />
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
            Hey there, here you will see all your bookmarked cards
            <span role="img" aria-label="starseyes">
              🤩
            </span>
          </DefaultText>
        )}
      </Wrapper>
    )
  }
}
