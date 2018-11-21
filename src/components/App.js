import React, { Component } from 'react'
import styled from 'styled-components'
//import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import Header from '../components/Header'
import Card from '../components/Card'
import CampaignDetails from './CampaignDetails'

const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  grid-template-rows: 30px;
  grid-gap: 30px;
  margin-top: 30px;
`

export default class App extends Component {
  render() {
    return (
      <Wrapper>
        <Header text="STEMfluence" />
        <Card
          imgURL="https://source.unsplash.com/random"
          headline="#BecomeADeveloper"
          productName="neuefische Bootcamp"
          campaignStatus="Application Phase"
          hasTwitter={true}
          hasInstagram={true}
          hasYoutube={true}
        />
      </Wrapper>
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
