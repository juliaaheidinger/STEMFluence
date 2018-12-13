import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Open Sans', sans-serif;
  box-sizing: border-box;
  text-align: center;
  transition: all ease 0.5s;
  letter-spacing: 1.5px;
  background: #fff;
  max-width: 250px;
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
    color: #000;
    text-decoration: none;

    &:hover {
      color: #fff;
    }
  }
`

export default class SubmitScreen extends React.Component {
  render() {
    return (
      <Wrapper>
        <p>Thank you for submitting your application!</p>
        <Button>
          <Link className="link" to="/">
            Back to Home
          </Link>
        </Button>
      </Wrapper>
    )
  }
}
