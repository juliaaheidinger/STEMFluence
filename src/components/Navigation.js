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
    background: #efefef;

    &:first-child {
      border-right: 1px solid white;
    }

    &.active {
      background: deeppink;
      color: white;
    }
  }
`

export default props => (
  <Wrapper data-cy="Navigation">
    <NavLink exact activeClassName="active" to="/">
      Home
    </NavLink>
    <NavLink activeClassName="active" to="/favorites">
      Favorites
    </NavLink>
  </Wrapper>
)
