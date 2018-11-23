import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Open Sans', sans-serif;
  box-sizing: border-box;
  text-align: center;
  transition: all ease 0.5s;
  letter-spacing: 1.5px;
  background: #fff;
  max-width: 150px;
  height: 35px;
  border: 2px solid black;
  border-radius: 4px;
  padding-left: 15px;
  color: #000;
  text-transform: uppercase;
  transition: all ease 0.5s;

  &:hover {
    padding: 0px 10px;
    background: #000;
    color: #fff;
  }

  &:after {
    content: '→';
    position: relative;
    opacity: 0;
    left: -5px;
  }

  &:hover:after {
    content: '→';
    transition: left ease 0.5s;
    opacity: 1;
    left: 7px;
  }

  .link {
    color: black;
    text-decoration: none;
  }
`

export default class ApplyBtn extends React.Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
  }

  static defaultProps = {
    text: 'Apply now'
  }

  render() {
    return (
      <Wrapper data-cy="ApplyBtn">
        <Link className="link" to={`/application/${this.props.id}`}>
          {this.props.text}
        </Link>
      </Wrapper>
    )
  }
}
