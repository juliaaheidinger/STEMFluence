import React, { Component } from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from '../components/Header'
import Home from '../components/Home'
import Favorites from '../components/Favorites'
import ApplicationForm from './ApplicationForm'
import Navigation from './Navigation'

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 80px auto 40px;
  height: 100vh;
`

export default class App extends Component {
  render() {
    return (
      <Router>
        <Wrapper>
          <Header text="STEMfluence" />
          <Route path="/" exact render={() => <Home />} />
          <Route
            path="/application/:id"
            exact
            render={({ match }) => (
              <ApplicationForm data={this.getData(match.params.id)} />
            )}
          />
          <Route path="/favorites" exact render={() => <Favorites />} />
          <Navigation />
        </Wrapper>
      </Router>
    )
    // <Router>
    //   <Wrapper>
    //     <Route
    //       exact
    //       path="/"
    //       render={() => <Home showDoneTodos={this.state.showDoneTodos} />}
    //     />
    //     <Route
    //       path="/config"
    //       render={() => (
    //         <Config
    //           showDoneTodos={this.state.showDoneTodos}
    //           onToggle={this.toggleShowDoneTodos}
    //         />
    //       )}
    //     />
    //     <nav>
    //       <NavLink exact activeClassName="active" to="/">
    //         Home
    //       </NavLink>
    //       <NavLink activeClassName="active" to="/config">
    //         Config
    //       </NavLink>
    //     </nav>
    //   </Wrapper>
    // </Router>
  }
}
