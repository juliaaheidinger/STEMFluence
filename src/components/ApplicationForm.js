import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  /* max-width: 500px; */
  max-width: 500px;
  margin: 0 auto;
  background: #fff;
  box-shadow: 0 8px 16px rgba(0, 40, 100, 0.4);
  border: px solid black;
  border-radius: 4px;
  overflow-y: scroll;

  form {
    display: grid;
    grid-gap: 15px;
    padding: 20px;
  }
  label {
    display: grid;
    grid-gap: 8px;
  }
  .checkbox {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 5px;
  }

  .Terms-div {
    display: block;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Open Sans', sans-serif;
    box-sizing: border-box;
    text-align: center;
    transition: all ease 0.5s;
    letter-spacing: 1.5px;
    background: #fff;
    max-width: 100%;
    height: 35px;
    border: 2px solid black;
    border-radius: 4px;
    padding-left: 15px;
    color: #000;
    text-transform: uppercase;
  }

  textarea {
    height: 100px;
    border: 2px solid black;
    border-radius: 4px;
    font-size: 14px;
    padding-left: 4px;
  }

  input {
    height: 30px;
    border: 2px solid black;
    border-radius: 4px;
    font-size: 14px;
    padding-left: 4px;
  }

  h2 {
    font-size: 26px;
    color: black;
    margin: 0;
  }

  a {
    color: navy;
    text-decoration: none;
  }
`

export default class ApplicationForm extends React.Component {
  constructor(props) {
    super(props)
    this.campaignInputRef = React.createRef()
    this.nameInputRef = React.createRef()
    this.addressInputRef = React.createRef()
    this.emailInputRef = React.createRef()
    this.plattformInputRef = React.createRef()
    this.handleInputRef = React.createRef()
    this.followersInputRef = React.createRef()
    this.textConnectionInputRef = React.createRef()
    this.textPostIdeaInputRef = React.createRef()
    this.feeInputRef = React.createRef()
  }

  handleSubmit = event => {
    this.props.preventDefault(event)
    this.props.onSubmit()
    this.campaignInputRef.current.value = ''
    this.nameInputRef.current.value = ''
    this.addressInputRef.current.value = ''
    this.emailInputRef.current.value = ''
    this.plattformInputRef.current.value = ''
    this.handleInputRef.current.value = ''
    this.followersInputRef.current.value = ''
    this.textConnectionInputRef.current.value = ''
    this.textPostIdeaInputRef.current.value = ''
    this.feeInputRef.current.value = ''
  }

  componentDidMount() {
    this.props.resetInputValues()
  }

  render() {
    const { data, onChange, onCheck, displayValueCheckbox } = this.props

    return (
      <Wrapper>
        <form id="contact" onSubmit={this.handleSubmit}>
          <h2>Application for: {data.headline}</h2>
          <h3>Fill in the form to apply bindingly for this paid Campaign</h3>
          <label>
            The Campaign Name
            <input
              placeholder={data.headline}
              type="text"
              name="campaign"
              required={true}
              onChange={onChange}
              ref={this.campaignInputRef}
            />
          </label>
          <label>
            Your name
            <input
              placeholder="Ada Lovelace"
              type="text"
              name="name"
              required={true}
              onChange={onChange}
              ref={this.nameInputRef}
            />
          </label>
          <label>
            Your Address
            <input
              placeholder="main street 123, 20095 Hamburg, Germany"
              type="text"
              name="address"
              onChange={onChange}
              ref={this.addressInputRef}
            />
          </label>
          <label>
            Your Email Address
            <input
              placeholder="stemfluence@gmail.com"
              type="email"
              name="email"
              required={true}
              onChange={onChange}
              ref={this.emailInputRef}
            />
          </label>
          <label>
            Your Social Media Plattform
            <input
              placeholder="Instagram"
              type="text"
              name="plattform"
              required={true}
              onChange={onChange}
              ref={this.plattformInputRef}
            />
          </label>
          <label>
            Your Handle
            <input
              placeholder="@stemfluence"
              type="text"
              name="handle"
              required={true}
              onChange={onChange}
              ref={this.handleInputRef}
            />
          </label>
          <label>
            Number of Followers
            <input
              placeholder="13.500"
              type="number"
              name="followers"
              required={true}
              onChange={onChange}
              ref={this.followersInputRef}
            />
          </label>
          <label>
            What connects you to the Product/Service?
            <textarea
              placeholder="Type your Message Here...."
              name="textConnection"
              required={true}
              onChange={onChange}
              ref={this.textConnectionInputRef}
            />
          </label>
          <label>
            What is your post idea and how do you realize the product placement?
            <textarea
              placeholder="Type your Idea Here..."
              name="textPostIdea"
              required={true}
              onChange={onChange}
              ref={this.textPostIdeaInputRef}
            />
          </label>
          <label>
            how much do you want to get paid for this campaign (in Euro)?
            <input
              placeholder="Your Fee"
              type="number"
              name="fee"
              required={true}
              onChange={onChange}
              ref={this.feeInputRef}
            />
          </label>

          <label className="checkbox">
            <input
              type="checkbox"
              name="termsAccepted"
              required={true}
              onChange={onCheck}
              checked={displayValueCheckbox}
            />
            <div className="Terms-label">
              I have read the{' '}
              <a href="https://www.google.com">
                Influencer Terms and Conditions
              </a>{' '}
              and <a href="https://www.google.com">Privacy Policy</a> and agree
              with their validity. I confirm that all my details in this
              registration are correct.
            </div>
          </label>
          <button name="submit" type="submit" value="submit">
            Submit application
          </button>
        </form>
      </Wrapper>
    )
  }
}
