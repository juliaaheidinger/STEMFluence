import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-auto-flow: center;
  padding: 0 30px;
`

export default class Favorites extends React.Component {
  showBookmarkedCards = () => {}

  render() {
    return (
      <Wrapper>
        Hey, hier sieht ihr schon bald alle gebookmarkten Cards
        <span role="img" aria-label="starseyes">
          🤩
        </span>
      </Wrapper>
    )
  }
}
