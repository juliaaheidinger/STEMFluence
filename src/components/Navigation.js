import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Wrapper = styled.nav`
  display: flex;
  border-top: 2px solid white;
  height: 40px;

  a:any-link {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: black;
    width: 100%;
    background: black;

    &:first-child {
      border-right: 1px solid white;
    }

    &.active {
      background: #545252;
      color: white;
    }
    img {
      height: 20px;
    }
  }
`

export default props => (
  <Wrapper data-cy="Navigation">
    <NavLink exact activeClassName="active" to="/">
      <img src="/images/house-footer-icon.svg" alt="house-icon" />
    </NavLink>
    <NavLink activeClassName="active" to="/favorites">
      <img src="/images/bookmark-footer-icon.svg" alt="house-icon" />
    </NavLink>
  </Wrapper>
)
