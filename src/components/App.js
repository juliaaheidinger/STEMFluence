import React, { Component } from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from '../components/Header'
import Home from '../components/Home'
import Favorites from '../components/Favorites'
import ApplicationForm from './ApplicationForm'
import Navigation from './Navigation'
import campaignData from '../data/campaignData.json'

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 80px auto 40px;
  height: 100vh;
`

export default class App extends Component {
  state = {
    teaserData: this.loadTeaserData() || campaignData
  }

  componentDidUpdate() {
    this.saveTeaserData()
  }

  componentDidMount() {
    this.loadTeaserData()
  }

  saveTeaserData() {
    localStorage.setItem('teaserData', JSON.stringify(this.state.teaserData))
  }

  loadTeaserData() {
    try {
      return JSON.parse(localStorage.getItem('teaserData'))
    } catch (err) {
      return console.log(err)
    }
  }

  toggleBookmark = id => {
    console.log('it works', id)
    const { teaserData } = this.state
    const cardIndex = teaserData.findIndex(card => card.id === id)
    const startOfArray = teaserData.slice(0, cardIndex)
    const endOfArray = teaserData.slice(cardIndex + 1)
    const changedData = teaserData[cardIndex]
    this.setState({
      teaserData: [
        ...startOfArray,
        {
          ...changedData,
          isBookmarked: !changedData.isBookmarked
        },
        ...endOfArray
      ]
    })
  }

  getData(id) {
    return this.state.teaserData.find(card => card.id === id)
  }

  render() {
    console.table(this.state.teaserData)
    return (
      <Router>
        <Wrapper>
          <Header text="STEMfluence" />
          <Route
            path="/"
            exact
            render={() => (
              <Home
                toggleBookmark={id => this.toggleBookmark(id)}
                teaserData={this.state.teaserData}
              />
            )}
          />
          <Route
            path="/application/:id"
            exact
            render={({ match }) => (
              <ApplicationForm data={this.getData(match.params.id)} />
            )}
          />
          <Route
            path="/favorites"
            exact
            render={() => (
              <Favorites
                teaserData={this.state.teaserData.filter(
                  card => card.isBookmarked
                )}
                toggleBookmark={id => this.toggleBookmark(id)}
              />
            )}
          />
          <Navigation />
        </Wrapper>
      </Router>
    )
  }
}
