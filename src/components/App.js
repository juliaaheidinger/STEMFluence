import React, { Component } from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from '../components/Header'
import Home from '../components/Home'
import Favorites from '../components/Favorites'
import ApplicationForm from './ApplicationForm'
import Navigation from './Navigation'
//import campaignData from '../data/campaignData.json'
import reducer from '../duck/reducer'
import { configureStore } from 'redux-starter-kit'
import { saveToLocalStorage } from '../duck/operations'
import { Provider } from 'react-redux'

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 80px auto 40px;
  height: 100vh;
`

const store = configureStore({ reducer })
store.subscribe(() =>
  saveToLocalStorage('campaignData', store.getState().teaserData)
)

export default class App extends Component {
  // state = {
  //   teaserData: this.loadTeaserData() || campaignData
  // }

  // componentDidUpdate() {
  //   this.saveTeaserData()
  // }

  // saveTeaserData() {
  //   localStorage.setItem('teaserData', JSON.stringify(this.state.teaserData))
  // }

  loadTeaserData() {
    try {
      return JSON.parse(localStorage.getItem('teaserData'))
    } catch (err) {
      //ist das return hier notwendig?
      return console.log(err)
    }
  }

  getData(id) {
    return store.getState().teaserData.find(card => card.id === id)
  }

  render() {
    return (
      <Router>
        <Provider store={store}>
          <Wrapper>
            <Header text="STEMfluence" />
            <Route
              path="/"
              exact
              render={() => <Home teaserData={store.getState().teaserData} />}
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
                  teaserData={store
                    .getState()
                    .teaserData.filter(card => card.isBookmarked)}
                />
              )}
            />
            <Navigation />
          </Wrapper>
        </Provider>
      </Router>
    )
  }
}
