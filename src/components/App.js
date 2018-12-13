import React, { Component } from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from '../components/Header'
import Home from '../components/Home'
import Favorites from '../components/Favorites'
import ApplicationForm from './ApplicationForm'
import Navigation from './Navigation'
import campaignData from '../data/campaignData.json'
import {
  //getApplication,
  postApplication
  //deleteApplication,
  //patchApplication
} from '../services/application'
import SubmitScreen from './SubmitScreen'

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 80px auto 40px;
  height: 100vh;
`

export default class App extends Component {
  state = {
    teaserData: this.loadTeaserData() || campaignData,
    applicationData: this.loadApplicationData() || [],
    campaign: '',
    name: '',
    address: '',
    email: '',
    plattform: '',
    handle: '',
    followers: '',
    textConnection: '',
    textPostIdea: '',
    fee: '',
    termsAccepted: false
  }

  componentDidUpdate() {
    this.saveTeaserData()
    this.saveApplicationData()
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

  saveApplicationData() {
    localStorage.setItem(
      'applicationData',
      JSON.stringify(this.state.applicationData)
    )
  }

  loadApplicationData() {
    try {
      return JSON.parse(localStorage.getItem('applicationData'))
    } catch (err) {
      return console.log(err)
    }
  }

  toggleBookmark = id => {
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

  resetInputValues = () => {
    this.setState({
      campaign: '',
      name: '',
      address: '',
      email: '',
      plattform: '',
      handle: '',
      followers: '',
      textConnection: '',
      textPostIdea: '',
      fee: '',
      termsAccepted: false
    })
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleCheck = event => {
    const checkBoxChecked = event.target.checked ? true : false

    this.setState({
      [event.target.name]: checkBoxChecked
    })
  }

  preventDefault = event => event.preventDefault()

  createNewDataSet = () => {
    const {
      campaign,
      name,
      address,
      email,
      plattform,
      handle,
      followers,
      textConnection,
      textPostIdea,
      fee,
      termsAccepted
    } = this.state

    const newDataSet = {
      campaign: campaign,
      name: name,
      address: address,
      email: email,
      plattform: plattform,
      handle: handle,
      followers: followers,
      textConnection: textConnection,
      textPostIdea: textPostIdea,
      fee: fee,
      termsAccepted: termsAccepted
    }

    postApplication(newDataSet)
      .then(newDataSet => {
        this.setState({
          applicationData: [newDataSet, ...this.state.applicationData]
        })
        window.location = '/thankyou'
      })

      .then(this.resetInputValues())
  }

  render() {
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
              <ApplicationForm
                displayValueCheckbox={this.state.termsAccepted}
                resetInputValues={this.resetInputValues}
                onChange={this.handleChange}
                onCheck={this.handleCheck}
                onSubmit={this.createNewDataSet}
                preventDefault={this.preventDefault}
                data={this.getData(match.params.id)}
              />
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
          <Route path="/thankyou" exact render={() => <SubmitScreen />} />
          <Navigation />
        </Wrapper>
      </Router>
    )
  }
}
