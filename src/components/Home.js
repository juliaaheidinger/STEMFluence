import React, { Component } from 'react'
import styled from 'styled-components'
import Card from '../components/Card'
import campaignData from '../data/campaignData.json'

const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  grid-gap: 30px;
  grid-auto-flow: center;
  overflow-y: scroll;
`

export default class App extends Component {
  state = {
    teaserData: campaignData
  }

  createCards() {
    return this.state.teaserData.map(this.renderSingleCard)
  }

  renderSingleCard = teaserInfo => {
    const {
      imgURL,
      headline,
      productName,
      campaignStatus,
      hasTwitter,
      hasInstagram,
      hasYoutube,
      id,
      ...rest
    } = teaserInfo

    return (
      <Card
        key={id}
        id={id}
        imgURL={imgURL}
        headline={headline}
        productName={productName}
        campaignStatus={campaignStatus}
        hasTwitter={hasTwitter}
        hasInstagram={hasInstagram}
        hasYoutube={hasYoutube}
        rest={rest}
      />
    )
  }

  getData(id) {
    return this.state.teaserData.find(card => card.id === id)
  }

  render() {
    return <Wrapper>{this.createCards()}</Wrapper>
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
