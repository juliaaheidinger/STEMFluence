import React, { Component } from 'react'
import styled from 'styled-components'
//import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import Header from '../components/Header'
import Card from '../components/Card'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

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
    return (
      <Wrapper>
        <Header text="STEMfluence" />
        <Card
          imgURL={'https://source.unsplash.com/random'}
          hashtag={'#Campaign Hashtag'}
          productName={'productName'}
          campaignStatus={'campaignStatus'}
          hasTwitter={true}
          hasInstagram={true}
          hasYoutube={true}
          isBookmarked={false}
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
