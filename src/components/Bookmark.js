import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: absolute;
  top: -26px;
  right: 3%;
  img {
    height: 31px !important;
    width: 26px !important;
    object-fit: cover;
  }
`

export default class ApplyBtn extends React.Component {
  render() {
    return <Wrapper onClick={this.props.onClick}>{this.props.img}</Wrapper>
  }
}