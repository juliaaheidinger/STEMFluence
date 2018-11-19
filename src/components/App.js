import React, { Component } from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'

export default class App extends Component {
  state = {
    showDoneTodos: true
  }

  toggleShowDoneTodos = () => {
    this.setState({
      showDoneTodos: !this.state.showDoneTodos
    })
  }

  render() {
    return <div>Hello App</div>
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
