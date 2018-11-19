import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Georgia, Times, 'Times New Roman', serif;
  font-weight: 900;
  font-size: 26px;
  width: 100%;
  background: #fff;
  padding: 20px;
`

export default class Header extends React.Component {
  render() {
    return <Wrapper>{this.props.text}</Wrapper>
  }
}
